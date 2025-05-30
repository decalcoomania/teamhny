import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import testData from "../data/test.json";
import "./Test.css";

const Test = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [resultLevel, setResultLevel] = useState("A1");
  const totalQuestions = testData.length;
  const answeredQuestions = selectedAnswers.filter(answer => answer !== undefined).length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  useEffect(() => {
    setQuestions(testData);
  }, []);

  const handleAnswer = (questionIndex, answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleFinishTest = () => {
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].CorrectAnswer ? acc + 1 : acc;
    }, 0);

    let level;
    if (score <= 5) level = "A1";
    else if (score <= 10) level = "A2";
    else if (score <= 15) level = "B1";
    else if (score <= 20) level = "B2";
    else level = "C1";

    setResultLevel(level);
    setShowResults(true);
  };

  const handleCloseResults = () => {
    navigate("/");
  };

  if (questions.length === 0) {
    return <div>Завантаження...</div>;
  }

  return (
    <div className="test-page">
      <div className="test-wrapper">
        <Header />
        <div className="test-content">
          <h1 className="test-title">ТЕСТ НА РІВЕНЬ ВОЛОДІННЯ МОВОЮ</h1>
          <div className="progress-container">
            <div className="progress-bar-wrapper">
              <span className="progress-text">{Math.round(progress)}%</span>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          </div>

          {questions.map((currentQ, index) => (
            <div className="question-block" key={index}>
              <h3 className="question-text">
                {index + 1}. {currentQ.Question}
              </h3>
              <div className="options">
                <div className="options-column">
                  <button
                    className={`option-button ${selectedAnswers[index] === currentQ.Option1 ? 'selected' : ''}`}
                    onClick={() => handleAnswer(index, currentQ.Option1)}
                  >
                    A. {currentQ.Option1}
                  </button>
                  <button
                    className={`option-button ${selectedAnswers[index] === currentQ.Option3 ? 'selected' : ''}`}
                    onClick={() => handleAnswer(index, currentQ.Option3)}
                  >
                    C. {currentQ.Option3}
                  </button>
                </div>
                <div className="options-column">
                  <button
                    className={`option-button ${selectedAnswers[index] === currentQ.Option2 ? 'selected' : ''}`}
                    onClick={() => handleAnswer(index, currentQ.Option2)}
                  >
                    B. {currentQ.Option2}
                  </button>
                  <button
                    className={`option-button ${selectedAnswers[index] === currentQ.Option4 ? 'selected' : ''}`}
                    onClick={() => handleAnswer(index, currentQ.Option4)}
                  >
                    D. {currentQ.Option4}
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button className="finish-test-button" onClick={handleFinishTest}>
            Завершити тест
          </button>
        </div>
      </div>

      {showResults && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Вітаємо!</h2>
            <p>Ваш рівень володіння англійською мовою - {resultLevel}</p>
            <button
              className="close-button"
              onClick={handleCloseResults}
            >
              Закрити
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;