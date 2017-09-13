import React from "react";

export default class Banner extends React.Component {
  render() {
    return (
      <section className="banner">
        <img
          src={this.props.images.src}
          srcSet={this.props.images.srcSet}
          alt={this.props.images.alt}
        />
      </section>
    );
  }
}
