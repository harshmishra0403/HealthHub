import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import React, { useState } from "react";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCF7] mb-5 cursor-pointer">
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccordion}
      >
        <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
          {item.question}
        </h4>
        <div
          className={`w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center ${
            isOpen ? "bg-primaryColor text-white border-none" : ""
          }`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <div className="mt-3 text-[14px] leading-6 text-[#4F4F4F]">
          
          {item.content}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
