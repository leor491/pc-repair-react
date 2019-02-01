import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Jumbotron.css';

export default class Jumbotron extends Component {
  static defaultProps = {
    header: "Hello, world!",
    description: "This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.",
    label: "Learn more \u00BB"
  }

  static propTypes = {
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }

  render() {
    return(
      <div className="jumbotron">
        <div className="container">
          <h1>{this.props.header}</h1>
          <p>{this.props.description}</p>
          <p>
            <a className="btn btn-primary btn-lg" href="#" role="button">{this.props.label}</a>
          </p>
        </div>
      </div>
  );
  }
}