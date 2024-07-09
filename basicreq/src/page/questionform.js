import React, { useState, useEffect } from 'react';
import "../style/questionForm.css";
const QuestionForm = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  useEffect(() => {
    // Fetch existing questions from local storage
    const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
    setQuestions(storedQuestions);
  }, []);

  const handleAddQuestion = () => {
    const date = new Date();
    const newEntry = {
      serial: questions.length + 1,
      question: newQuestion,
      date: date.toISOString(),
    };

    const updatedQuestions = [...questions, newEntry];
    setQuestions(updatedQuestions);
    setNewQuestion('');
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));
  };

  return (
    <div className="question-form">
      <div className="select-container">
        <select>
          {questions.map((q) => (
            <option key={q.serial} value={q.serial}>
              {q.question}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>
    </div>
  );
};

export default QuestionForm;
