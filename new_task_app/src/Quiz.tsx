import React, { useState } from 'react';

type Question = {
  questionText: string;
  options: string[];
  correctOptionIndex: number;
};

type QuizState = {
  QuestionIndex: number;
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
    QuestionIndex: 0,
    userAnswers: [],
  });

  const { QuestionIndex, userAnswers } = quizState;
  const currentQuestion = questions[QuestionIndex];

  const handleNextClick = (OptionIndex: number) => {
    setQuizState((prevState) => ({
      ...prevState,
      userAnswers: [...prevState.userAnswers, OptionIndex],
      QuestionIndex: prevState.QuestionIndex + 1,
    }));
  };

  const handlePrevClick = (OptionIndex: number) => {
    setQuizState((prevState) => ({
      ...prevState,
      userAnswers: prevState.userAnswers.slice(0, -1),
      QuestionIndex: prevState.QuestionIndex - 1,
    }));
  };

  const handleResetClick = () => {
    setQuizState({
      QuestionIndex: 0,
      userAnswers: [],
    });
  };

  const calculateresult = () => {
    return userAnswers.reduce((result, userAnswer, index) => {
      const correctOptionIndex = questions[index].correctOptionIndex;
      return userAnswer === correctOptionIndex ? result + 1 : result;
    }, 0);
  };

  const renderResult = () => {
    const result = calculateresult();
    return (
      <div>
        <h2>Your result: {result}/{questions.length}</h2>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    );
  };

  const handleButtonClick = (index: number) => {
    if (QuestionIndex < questions.length) {
      handleNextClick(index);
    }
  };

  return (
    <div>
      {QuestionIndex < questions.length ? (
        <div>
          <h2>Question {QuestionIndex + 1}</h2>
          <p>{currentQuestion.questionText}</p>
          <div>
            {currentQuestion.options.map((option, index) => (
              <button key={index} onClick={() => handleButtonClick(index)}>
                {option}
              </button>
            ))}
          </div>
          <button onClick={() => handleNextClick(-1)} disabled={QuestionIndex === questions.length - 1}>
            Next
          </button>
          <button onClick={() => handlePrevClick(-1)} disabled={QuestionIndex === 0}>
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
