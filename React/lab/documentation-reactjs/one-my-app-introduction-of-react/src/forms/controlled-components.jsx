/*
 * Em HTML, elementos de formulário como <input>, <textarea> e <select> normalmente mantêm seu
 * próprio estado e o atualiza baseado na entrada do usuário. Em React, o estado mutável é normalmente
 * mantido na propriedade state dos componentes e atualizado apenas com setState().
 *
 * Às vezes pode ser tedioso usar componentes controlados, porque você precisa escrever um
 * manipulador de eventos para cada maneira que seus dados podem mudar e canalizar todo o estado
 * do input através de um componente React. Isso pode se tornar particularmente irritante quando
 * você está convertendo uma base de código preexistente para o React ou integrando um aplicativo
 * React com uma biblioteca que não seja baseado em React. Nessas situações, talvez você queira verificar
 * os componentes não controlados, uma técnica alternativa para implementar formulários de entrada.
 *
 */
import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Um nome foi enviado: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}
export default NameForm;

/*
 *  Como o atributo value é definido no nosso <input type="text">, o valor exibido sempre será o mesmo
 *  de this.state.value, fazendo com que o estado do React seja a fonte da verdade. Como o handleChange
 *  é executado a cada tecla pressionada para atualizar o estado do React, o valor exibido será atualizado
 *  conforme o usuário digita.
 */

/*
 * Note que a opção “coco” é selecionada por padrão, por causa do atributo selected. Em React, em
 * vez de usar este atributo selected, usa-se um atributo value na raiz da tag select. Isso é mais
 * conveniente em um componente controlado, porque você só precisa atualizá-lo em um só lugar.
 */

//   <select>
//     <option value="laranja">Laranja</option>
//     <option value="limao">Limão</option>
//     <option selected value="coco">
//       Coco
//     </option>
//     <option value="manga">Manga</option>
//   </select>;

// ? ----------------------------------------------------------------------
/*
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coco'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Seu sabor favorito é: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Escolha seu sabor favorito:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="laranja">Laranja</option>
            <option value="limao">Limão</option>
            <option value="coco">Coco</option>
            <option value="manga">Manga</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}
*/

/*
? Input value null
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
*/

/*
 * Se você está procurando por uma solução completa, incluindo validação, manter o controle dos campos
 * visualizados e lidar com o envio de formulários, o Formik é uma das escolhas mais populares. No entanto,
 * ele é construído sobre os mesmos princípios de componentes controlados e gerenciamento de
 * estado - portanto, não negligencie o aprendizado desses conceitos.
 */
