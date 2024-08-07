import React from "react";
import ReactDom from "react-dom";

const num = 10;
const name = "yo";
const lname = "jo";

ReactDom.render(
  <div>
    <h1>
      Hello {name} {lname}
    </h1>

    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
