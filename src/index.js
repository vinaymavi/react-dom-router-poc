import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import About from "./About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Links = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>      
    </nav>
  );
};
const App = () => (
  <Router>
    <div>
      <Links/>
      <Route exact path="/" component={Hello} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));
