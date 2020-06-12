import React from "react";

export default function Input() {
  const [text, setText] = React.useState("");
  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      {text}
    </div>
  );
}
