import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
	try {
		const { name, email, password, photo, gender, role } = req.body;

		if (!name || !email || !password || !role) {
			return res.status(400).json({ message: "All fields are required" });
		}

		if (role !== 'patient' && role !== 'doctor') {
			return res.status(400).json({ message: "Invalid role specified" });
		}

		let user = null;
		if (role === 'patient') {
			user = await User.findOne({ email });
		} else if (role === 'doctor') {
			user = await Doctor.findOne({ email });
		}

		// Check if user exists
		if (user) {
			return res.status(400).json({ message: "User already exists" });
		}

		// Hash password
		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, salt);

		if (role === 'patient') {
			user = new User({
				name,
				email,
				password: hashPassword,
				photo,
				gender,
				role
			});
		}
		if (role === 'doctor') {
			user = new Doctor({
				name,
				email,
				password: hashPassword,
				photo,
				gender,
				role
			});
		}

		await user.save();
		return res.status(201).json({ success: true, message: 'User Successfully Created' });

	} catch (error) {
		return res.status(500).json({ success: false, message: 'Internal server error' });
	}
};


export const login = async (req, res) => {
	const {email, password} = req.body;

	try {
		let user = null
		const patient = await User.findOne({email});
		const doctor = await Doctor.findOne({email});
		if (patient) {
			user = patient
		}
		if (doctor) {
			user = doctor
		}

		if (!user) {
			return res.status(404).json({message:"User Not Found"})
		}

		const isPasswordMatch = await bcrypt.compare(password, user.password)

		if (!password) {
			return res.status(400).json({status:false, message:"Invalid Credential"})
		}
	} catch (error) {

	}
};

