import React, { Component } from "react";
import "./events.scss";

class Toogle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToogleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToogleOn: !state.isToogleOn
    }));
  }
  render() {
    return (
      <div className="grid">
        <button className="refer" onClick={this.handleClick}>
          {this.state.isToogleOn ? "on" : "of"}
        </button>
      </div>
    );
  }
}
export default Toogle;
