import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import About from "./About";
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
const Links = () => {
  return (
    <nav>
      <NavLink activeStyle={{color:'red'}} to="/">Home</NavLink>
      <NavLink activeStyle={{ color: 'red' }} to="/about">About</NavLink>      
    </nav>
  );
};
const App = () => (
  <Router>
    <div>
      <Links/>
      <Route exact path="/:who?" component={Hello} />
      <Route path="/about/:name?/:whr?" component={About} />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));
