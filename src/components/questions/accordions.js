"use client";

import Accordion from "./accordion";
import { useEffect, useState } from "react";

const Accordions = () => {
  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const response = await fetch("/api/questions");
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
