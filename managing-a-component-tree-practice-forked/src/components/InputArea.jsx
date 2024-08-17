import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function HandleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={HandleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.addItem(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
