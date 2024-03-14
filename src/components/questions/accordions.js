'use client';

import Accordion from './accordion';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '@/config/apiConfig';

const Accordions = () => {
	const [questionsData, setQuestionsData] = useState([]);

	useEffect(() => {
		const getQuestions = async () => {
			const response = await fetch(`${API_BASE_URL}/questions`);
			const data = await response.json();
			setQuestionsData(data);
		};

		getQuestions();
	}, []);

	return (
		<div>
			{questionsData.map((question) => {
				return (
					<Accordion
						key={question._id}
						header={question.question}
						body={question.answer}
					></Accordion>
				);
			})}
		</div>
	);
};

export default Accordions;
