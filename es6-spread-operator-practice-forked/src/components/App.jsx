import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const [item, setItem] = useState("");

  function ItemChange(event) {
    const { value } = event.target;

    setItem(value);
  }

  function ListChange(event) {
    setList((prev) => {
      return [...prev, item];
    });

    event.preventDefault();
    setItem("");
  }

  function Show(item) {
    return <li>{item}</li>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form onSubmit={ListChange}>
        <div className="form">
          <input onChange={ItemChange} type="text" value={item} />
          <button type="Submit">
            <span>Add</span>
          </button>
        </div>
      </form>
      <div>
        <ul>{list.map(Show)}</ul>
      </div>
    </div>
  );
}

export default App;
