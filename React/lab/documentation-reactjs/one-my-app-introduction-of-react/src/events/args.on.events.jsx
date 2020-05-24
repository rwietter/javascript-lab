import React, { Component } from "react";

class ArgsEvents extends Component {
  render() {
    return (
      <div>
        <button onClick={e => this.deleteRow(id, e)}>Deletar linha</button>
        <button onClick={this.deleteRow.bind(this, id)}>Deletar linha</button>
      </div>
    );
  }
}
export default ArgsEvents;

/*
 * Passando Argumentos para Manipuladores de Eventos
 * Dentro de uma estrutura de repetição, é comum querer passar um parâmetro extra
 * para um manipulador de evento. Por exemplo, se id é o ID de identificação da linha, qualquer
 * um dos dois a seguir funcionará:
 *
 * As duas linhas acima são equivalentes e usam arrow functions e Function.prototype.bind respectivamente.
 *
 * Em ambos os casos, o argumento e representando o evento do React será passado como segundo
 * argumento após o ID. Com uma arrow function, nós temos que passá-lo explicitamente. Mas
 * com o bind outros argumentos adicionais serão automaticamente encaminhados.
 */
