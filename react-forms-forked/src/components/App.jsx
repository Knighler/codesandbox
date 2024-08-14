import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [head, setHead] = useState("");

  function NameUpdate(event) {
    setName(event.target.value);
  }

  function NameConfirm(event) {
    setHead(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={NameConfirm}>
        <h1 id="head">Hello {head}</h1>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={NameUpdate}
          value={name}
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
