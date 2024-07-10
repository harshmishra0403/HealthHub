import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../utils/formData"; // Corrected the import path and function name
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {

  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div className="mb-[50px]">
      <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
        All reviews (272)
      </h4>
      <div className="flex justify-between gap-10 mb-[30px]">
        <div className="flex gap-3">
          <figure className="w-10 h-10 rounded-full">
            <img className="w-full" src={avatar} alt="" />
          </figure>
          <div>
            <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
              Ali Ahmed
            </h5>
            <p className="text-[14px] leading-6 text-textColor">
              <p className="text__para mt-3 font-medium text-[15px]">Good services, highly recommended 👍</p>
              | {formatDate("02-14-2023")} {/* Corrected the function name */}
            </p>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => ( // Corrected the syntax for creating an array
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>
      </div>
      {
        !showFeedbackForm && <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback</button>
        </div>
      }
 {showFeedbackForm && <FeedbackForm /> }
    </div>
  );
};

export default Feedback;
