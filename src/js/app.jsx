/*
 * Root component
 */
import React from "react";

import HomePage from "./containers/HomePage/HomePage";

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <HomePage />
      </div>
    );
  }
}
