import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';

export default class Container extends Component {
	
	static propTypes = {
		pIndex: PropTypes.number.isRequired,
		comps: PropTypes.array.isRequired
	}

	render = () => {
		var comp = this.props.comps[this.props.pIndex];
		return (
			<div className="container">
				{comp}
				<hr/>
				<Footer/>
			</div>
		);
	}
}