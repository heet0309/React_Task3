import React, { useState } from 'react';



const GuessNumber = () => {
  const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState<number | null>(null);

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 20) + 1;
  }


  const handleGuess = () => {
    if (userGuess === null) {
      alert('Please enter a valid guess.');
      return;
    }
    if (userGuess === secretNumber) {
      alert('You guessed the correct number.');
    } else if (userGuess < secretNumber) {
      alert('The correct number is higher.');
    } else {
     alert('The correct number is lower.');
    }

 
  };

  return (
    <div>
      <h1>Guess the Number Game</h1>
      <p>Guess a number between 1 and 20:</p>
      <input
        type="number"
        value={userGuess !== null ? userGuess : ''}
        onChange={(e) => {
        const inputVal = parseInt(e.target.value, 10) ;
        const rangeValue = Math.min(20, Math.max(0, inputVal)); 
        setUserGuess(rangeValue);
        }}
      />

      <button onClick={handleGuess}>Play</button>
    </div>
  );
};

export default GuessNumber;
