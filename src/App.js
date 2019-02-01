import React, { Component } from 'react';
import Menu from './Menu';
import Main from './Main';
import About from './About';
import Contact from './Contact';
import Container from './Container';

export default class App extends Component {

	static pages = ["Home", "About", "Contact"];
	static comps = [<Main/>, <About/>, <Contact/>];

	constructor(props) {
		super(props);

		this.state = {
			pIndex: 0
		}
	}

	handleMenuClick = (pIndex) => {
		this.setState({ pIndex });
	}

	render = () => {
		return(
			<div className="App">
				<Menu 
					onMenuClick={this.handleMenuClick} 
					pIndex={this.state.pIndex} 
					pages={App.pages}
					color="dark"
					brand="PC Repair"
				/>
				<Container
					pIndex={this.state.pIndex}
					comps={App.comps} 
				/>
			</div>
			);
	}
}