import React from "react";

export default function MyInput({ inputValue, onInputChange }) {
  console.log(inputValue, onInputChange);
  return <input type="text" value={inputValue} onChange={onInputChange} />;
}
