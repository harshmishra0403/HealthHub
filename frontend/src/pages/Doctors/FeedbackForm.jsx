import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	const [reviewText, setReviewText] = useState("");
	const handleSubmitReview = async e => {
		e.preventDefault();
	}


	const handleMouseEnter = (index) => {
		setHover(index);
	};

	const handleMouseLeave = () => {
		setHover(0);
	};

	const handleClick = (index) => {
		setRating(index);
	};

	return (
		<form action="">
			<h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 ">
				How would you rate the overall experience?*
			</h3>
			<div>
				{[...Array(5).keys()].map((index) => {
					const ratingValue = index + 1;
					return (
						<button
							key={index}
							type="button"
							onMouseEnter={() => handleMouseEnter(ratingValue)}
							onMouseLeave={handleMouseLeave}
							onClick={() => handleClick(ratingValue)}
						>
							<span>
								<AiFillStar
									color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
								/>
							</span>
						</button>
					);
				})}
			</div>

			<div className="mt-[30px]">
				<h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
					How would you rate the overall experience?*
				</h3>
				<textarea
					placeholder="Write your message"
					value={reviewText}
					onChange={e => setReviewText(e.target.value)}
					className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full  py-3 rounded-md"
					rows="5"
				/>
		</div>

		<button type="submit" className="btn py-3 rounded-md" onClick={handleSubmitReview}>
        Submit Feedback
      </button>
		</form >
	);
};

export default FeedbackForm;
