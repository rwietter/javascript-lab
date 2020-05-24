import React from "react";
import "./events.scss";

/*
  function Events() {
    return (
      <div>
        <button>Ativar lasers</button>
      </div>
    );
  }
*/

/*
 * Outra diferença é que você não pode retornar false para evitar o comportamento padrão no React. Você deve chamar preventDefault explícitamente. Por exemplo, com HTML simples, para evitar que um link abra uma nova página, você pode escrever:
  <a href="#" onclick="console.log('O link foi clicado.'); return false">
    Clique Aqui
  </a>

* No React, isso poderia ser:
  function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('O link foi clicado.');
    }

    return (
     <a href="#" onClick={handleClick}>
       Clique Aqui
      </a>
    );
  }
 */

function ActionLinkTest() {
  function handleClickTest(e) {
    // @ Aqui, ”e” é um synthetic event.
    e.preventDefault(); // @ return false for href="/"
    console.log("event traved to preventDefault");
  }
  return (
    <div className="grid">
      <a className="refer" href="/" onClick={handleClickTest}>
        click-me
      </a>
    </div>
  );
}

export default ActionLinkTest;
