import React, { Component } from "react";

class ConditionalRenderingState extends Component {
  render() {
    function UserGreeting(props) {
      return <h1>Welcome back!</h1>;
    }

    function GuestGreeting(props) {
      return <h1>Please sign up.</h1>;
    }

    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
    }
    return (
      <div>
        <Greeting isLoggedIn={true} />
      </div>
    );
  }
}
export default ConditionalRenderingState;
/*
 * Em React, você pode criar componentes distintos que encapsulam o comportamento que
 * você precisa. Então, você pode renderizar apenas alguns dos elementos, dependendo do
 * estado da sua aplicação.
 *
 *
 */
