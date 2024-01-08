import React, { useState } from 'react';

type Question = {
  questionText: string;
  options: string[];
  correctOptionIndex: number;
};

type QuizState = {
  QuetionIndex: number;
  userAnswers: number[];
};

const questions: Question[] = [
  {
    questionText: 'What is React?',
    options: ['Framework', 'Library', 'Language', 'Tool'],
    correctOptionIndex: 1,
  },
  {
    questionText: 'Which programming language is React built with?',
    options: ['Java', 'Python', 'C++', 'JavaScript'],
    correctOptionIndex: 3,
  },
  {
    questionText: 'What does JSX stand for?',
    options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'JavaScript XML Syntax'],
    correctOptionIndex: 0,
  },
];

const Quiz: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    QuetionIndex: 0,
    userAnswers: [],
  });

  const { QuetionIndex, userAnswers } = quizState;
  const currentQuestion = questions[QuetionIndex];

  const handleNextClick = (OptionIndex: number) => {
    setQuizState((prevState) => ({
      ...prevState,
      userAnswers: [...prevState.userAnswers, OptionIndex],
      QuetionIndex: prevState.QuetionIndex + 1,
    }));
  };

  const handlePrevClick = (OptionIndex: number) => {
    setQuizState((prevState) => ({
      ...prevState,
      userAnswers: prevState.userAnswers.slice(0, -1),
      QuetionIndex: prevState.QuetionIndex - 1,
    }));
  };
  

  const calculateScore = () => {
    return userAnswers.reduce((score, userAnswer, index) => {
      const correctOptionIndex = questions[index].correctOptionIndex;
      return userAnswer === correctOptionIndex ? score + 1 : score;
    }, 0);
  };

  const renderResult = () => {
    const score = calculateScore();
    return (
      <div>
        <h2>Your Score: {score}/{questions.length}</h2>
      </div>
    );
  };

  const handleButtonClick = (index: number) => {
    if (QuetionIndex < questions.length) {
      handleNextClick(index);
    }
  };

  return (
    <div>
      {QuetionIndex < questions.length ? (
        <div>
          <h2>Question {QuetionIndex + 1}</h2>
          <p>{currentQuestion.questionText}</p>
          <div>
            {currentQuestion.options.map((option, index) => (
              <button key={index} onClick={() => handleButtonClick(index)}>
                {option}
              </button>
            ))}
          </div>
          <button onClick={() => handleNextClick(-1)} disabled={QuetionIndex === questions.length - 1}>
            Next
          </button>
          <button onClick={() => handlePrevClick(-1)} >
            Prev
          </button>
        </div>
      ) : (
        renderResult()
      )}
    </div>
  );
};

export default Quiz;
