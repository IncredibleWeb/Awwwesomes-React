import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <a href={this.props.href} className="button" title={this.props.title}>
        {this.props.text}
      </a>
    );
  }
}
