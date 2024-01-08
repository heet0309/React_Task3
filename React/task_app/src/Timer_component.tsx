import React, { useState, useEffect } from 'react';

interface TimerProps {
  initialSeconds: number ;
}
let initialSeconds=0;
const Timer  = () => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds]);
  let inputSeconds;
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     inputSeconds = parseInt(event.target.value);
    setSeconds(isNaN(inputSeconds) ? 0 : inputSeconds);
  };

  const handleStart = () => {
    setIsActive(true);
  };


  return (
    <div>
      <br/>
      <h3>TIMER</h3>
      <br/>
      <div>
        <label>
          Enter Seconds:
          <input type="text" value={inputSeconds} onChange={handleInputChange} />
        </label>
        <button onClick={handleStart}>Start</button>
        <div>
        <p>Counter: {seconds} seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
