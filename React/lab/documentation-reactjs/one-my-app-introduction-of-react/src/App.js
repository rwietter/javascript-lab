import React from "react";
import "./App.css";
import Header from "./components/header";
import ConditionalRendering from "./conditional-render/loginControl";
// import ControlledComponents from "./forms/controlled-component";
// import Temperature from "./elevando-state/elevando-state";
import Events from "./events/events";
import EventsThisCall from "./events/events.this.call";
import UseEffect from "./hook/useEffect";
import Date from "./life-cicle/Date/Data";
import LabelText from "./life-cicle/LabelButton/button";
import List from "./listasChaves/listasChaves";

function App() {
  return (
    <div className="App">
      <Header />
      <LabelText />
      <Date />
      <Events />
      <EventsThisCall />
      <ConditionalRendering />
      <List />
      <UseEffect />
    </div>
  );
}

export default App;
