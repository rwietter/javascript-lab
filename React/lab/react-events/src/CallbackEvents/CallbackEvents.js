import React from "react";
import MyInput from "./CallbackChildren";

export default function CallbackEvents() {
  const [text, setText] = React.useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <MyInput inputValue={text} onInputChange={handleTextChange} />
      {text}
    </div>
  );
}
