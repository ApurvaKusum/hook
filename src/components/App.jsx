import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);

  const now = new Date().toLocaleTimeString();
  const [time, setState] = useState(now);

  function getTime() {
    let currentTime = new Date().toLocaleTimeString();
    setState(currentTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
