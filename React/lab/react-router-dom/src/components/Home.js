import React, { useState } from "react";

export default function Home() {
  const [user, setUser] = useState("");

  return (
    <>
      <h1>Home page</h1>
      <input
        placeholder="Email"
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <button>Submit</button>
    </>
  );
}
