import React, { Component } from "react";
import "./button.css";

class MyButton extends Component {
  render() {
    return (
      <button
        className="Button"
        onClick={() => {
          this.props.handleClick(this.props.label);
        }}
      >
        {this.props.label}
      </button>
    );
  }
}

class MyLabel extends Component {
  render() {
    return <p className="label">Você deu click no botão: {this.props.text}</p>;
  }
}

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelText: "",
    };
  }

  setLabelText = (labelText) => {
    this.setState({ labelText });
  };

  render() {
    return (
      <section className="container">
        <div className="buttonClass">
          <MyLabel text={this.state.labelText} />
          <MyButton handleClick={this.setLabelText} label="1" />
          <MyButton handleClick={this.setLabelText} label="2" />
          <MyButton handleClick={this.setLabelText} label="3" />
          <MyButton handleClick={this.setLabelText} label="4" />
        </div>
      </section>
    );
  }
}

export default Button;
