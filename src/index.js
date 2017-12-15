import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import About from "./About";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Hello} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));
