import React, { Component } from "react";
import "./date.css";

// @ passando Hello de Welcome e name para element
// const element = <Welcome name="Sara" />;

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// ! other ---------------------------------------------------------------------------------

// function Clock(props) {
//   return (
//     <div>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function Hello(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>;
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
// }
// setInterval(tick, 1000);

// * IMPLEMENTADO CLOCK E STATES COM CLASSES:

export class ClockClass extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  // @ Estes métodos são chamados de “métodos de ciclo de vida”
  // ? componentDidMount => montado; componentWillUnmount => desmontado
  // @ O método componentDidMount() é executado depois que a saída do componente é renderizada no DOM.
  componentDidMount() {
    this.timerID = setInterval(() => this.tik(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tik() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div className="date">
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default ClockClass;

/**
 * * Tópicos:
 * * Errado => this.state.comment = 'Hello';
 * * Correto => this.setState({comment: 'Hello'});
 * * O único lugar onde você pode atribuir this.state é o construtor.
 */
