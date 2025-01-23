import React, { Component } from "react";

class Topbar extends Component {
  render() {
    return (
      <div className="topbar-one">
        <div className="container">
          <div className="topbar-one__left">
            <a href="#none">info@vervebot.io</a>
            <a href="#none">+919560433039</a>
          </div>
          <div className="topbar-one__right">
            <a href="#none">Demo</a>
            <a href="#none">Demo</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
