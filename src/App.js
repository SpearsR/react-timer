import { useState } from "react";
import React, { useEffect } from 'react'


function formatTime(num){
  if (num === 0){
    return num;
  }
  else if(num < 10){
    return '0' + num.toString();
  }

  else {
    return num.toString();
  }
}

function App() {
  const [time, setTime] = useState(598);
  const [count, setcount] = useState(false);

  useEffect(() => {
    if(count){
      setTimeout(() => {
        setTime(time +  1);
      }, 100);
    if(time >= 600){
      setTime(0);
    }
    }
  },[time,count]);
  return (
    <div className="timer">
      <p>{time}</p>
      <p id="time">{formatTime(1)}:{formatTime(Math.floor(time/10))}.{time%10}</p>
      <div className="start-stop-box">
        <span onClick={() => setcount(true)} className="fun-buttons" id="start">Start</span>
        <span onClick={() => setcount(false)} className="fun-buttons" id="stop">Stop</span>
      </div>
    </div>
  );
}

export default App;
