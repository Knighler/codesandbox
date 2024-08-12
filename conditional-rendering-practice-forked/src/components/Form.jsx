import React from "react";
import Input from "./Inputs";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.bt ? null : (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.bt ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
