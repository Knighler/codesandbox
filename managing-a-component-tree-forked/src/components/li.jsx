import React, { useState } from "react";

function Li(props) {
  return (
    <li
      onClick={() => {
        props.delete(props.id);
      }}
    >
      {props.value}
    </li>
  );
}

export default Li;
