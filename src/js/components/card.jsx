import React from "react";
import Button from "./button";

export default class Card extends React.Component {
  render() {
    // create an array of button elements
    let buttons = this.props.buttons.map(button => {
      return (
        <li key={button.href}>
          <Button href={button.href} title={button.title} text={button.text} />
        </li>
      );
    });
    return (
      <section className={`card ${this.props.className}`}>
        <div
          className="card-content"
          dangerouslySetInnerHTML={this.props.html}
        />
        {buttons.length > 0 && <ul className="card-buttons">{buttons}</ul>}
      </section>
    );
  }
}
