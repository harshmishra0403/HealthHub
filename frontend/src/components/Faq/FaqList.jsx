import React from 'react';
import { faqs } from "../../assets/data/faqs";
import FaqItem from './FaqItem';

const FaqList = () => { // Changed component name to PascalCase
	return (
		<ul className="mt-[38px]">
			{faqs.map((item, index) => (
				<FaqItem item={item} key={index} />
			))}
		</ul>
	);
};

export default FaqList;
