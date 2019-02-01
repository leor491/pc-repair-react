import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
	static defaultProps = {
		years: "2018-2019",
		company: "PC Repairs, Inc"
	}

	static propTypes = {
		years: PropTypes.string.isRequired,
		company: PropTypes.string.isRequired
	}

	render(){
		return (
	        <footer>
	          <p>&copy; {this.props.years} {this.props.company}.</p>
	        </footer>
	    );
	}
}