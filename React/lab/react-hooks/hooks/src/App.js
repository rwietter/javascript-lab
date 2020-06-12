import React, { useState } from "react";
import "./App.css";
import UseAsync from "./useAsync/useAsync";
import UseEffect from "./useEffect/useEffect";

function App() {
  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false);
  }, 6000);

  // useHooks: https://usehooks.com/
  return (
    <div className="App">
      <UseAsync />
      {visible && <UseEffect />}
    </div>
  );
}

export default App;
