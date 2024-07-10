import React, { useState, useEffect } from "react";
import "../style/questionForm.css";
import { getData, postData } from "../router/request";
const QuestionForm = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestionLink, setNewQuestionLink] = useState("");

  useEffect(() => {
    let allQuestion = [];
    const getAll = async () => {
      allQuestion = await getData("/form/getAllFormData");
      console.log(allQuestion.allFormData);
      setQuestions(allQuestion.allFormData);
    };
    getAll();
  }, [newQuestionLink]);

  const handleAddQuestion = async () => {
    await postData("/form/create", { questionLink: newQuestionLink });
    setNewQuestionLink("");
  };

  return (
    <div className="question-form">
      {/* add question ka area */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your question"
          value={newQuestionLink}
          onChange={(e) => setNewQuestionLink(e.target.value)}
        />
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>

      <div>
        {questions.map((question) => (
          <div
            style={{
              color: "white",
              padding: "1rem",
              background: "grey",
              margin: ".5rem",
              borderRadius: ".7rem",
            }}
          >
            {question.questionName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionForm;
