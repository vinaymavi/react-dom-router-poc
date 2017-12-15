import React from "react";

export default ({ match }) => (
  <h1>
    Hello {match.params.who || ""}
  </h1>
);
