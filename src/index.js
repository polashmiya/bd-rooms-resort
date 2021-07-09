import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RoomProvider } from "./RoomContext";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);
