import React, {Component} from 'react';
import Jumbotron from './Jumbotron';

export default class Main extends Component {
	render(){
		return (<div>
					<Jumbotron/>
					<div className="row">
					  <div className="col-md-4">
					    <h2>Virus Removal</h2>
					    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
					    <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
					  </div>
					  <div className="col-md-4">
					    <h2>Hardware Issues</h2>
					    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
					    <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
					  </div>
					  <div className="col-md-4">
					    <h2>Software Issues</h2>
					    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
					    <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
					  </div>
					</div>
				</div>
			);
	}
}