/*
 * HomePage: the '/' route
 */
import React from "react";

import Banner from "../../components/banner";
import Card from "../../components/card";

export default class HomePage extends React.Component {
  constructor() {
    super();

    // initialise the state in the constructor
    this.state = {
      html: ""
    };
  }

  // executes when the component is rendered on the page; used to populate/set the state
  // read more: https://facebook.github.io/react/docs/react-component.html
  componentWillMount() {
    // TODO: data should be retireved from an API
    this.setState({
      banner: {
        images: {
          src: "/img/banner.jpg",
          alt: "Poznan Old Market",
          srcset: "/img/banner.jpg 720w, /img/banner@2x.jpg 1440w"
        }
      },
      html: {
        __html:
          "<h1>Let's Learn!</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quis hic iure est ex, provi consectetur praesentium, atque.</p>"
      },
      buttons: [
        {
          href: "/learn",
          title: "get started",
          text: "Get Started!"
        }
      ]
    });
  }

  // returns the JSX that will be rendered for this component
  render() {
    return (
      <div className="home">
        <Banner images={this.state.banner.images} />
        <section className="main content home">
          <Card
            html={this.state.html}
            buttons={this.state.buttons}
            className="richtext"
          />
        </section>
      </div>
    );
  }
}
