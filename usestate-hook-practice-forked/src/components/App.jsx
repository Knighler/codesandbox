import React, { useState } from "react";

function App() {
  let options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  let time = new Date().toLocaleTimeString([], options);

  const [cTime, update] = useState(time);

  setInterval;

  function Update() {
    update(new Date().toLocaleTimeString([], options));
  }

  function UpdateAuto() {
    update(new Date().toLocaleTimeString([], options));
  }
  setInterval(UpdateAuto, 1000);

  return (
    <div className="container">
      <h1>{cTime}</h1>
      <button onClick={Update}>Get Time</button>
    </div>
  );
}

export default App;
