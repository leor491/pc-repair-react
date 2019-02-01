import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Menu extends Component {
  
  static propTypes = {
    brand: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    pIndex: PropTypes.number.isRequired,
    pages: PropTypes.array.isRequired,
    onMenuClick: PropTypes.func
  }

  static defaultProps = {
    brand: "Sample Website",
    color: "light",
    page: "Home",
    pages: ["Home", "About Us", "Contact"]
  }

  render() {
    var navClass = "navbar ";
    
    if(this.props.color === "light"){
      navClass += "navbar-default";
    }else if (this.props.color === "dark"){
      navClass += "navbar-inverse";
    }

    return(
      <nav className={navClass}>
        <div className="container-fluid">
          <div className="navbar-header">
            <p className="navbar-brand">{this.props.brand}</p>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
            {
              this.props.pages.map(
                (value, index) => {
                  return (
                      <li onClick={() => this.props.onMenuClick(index)}
                      key={index}
                      className={index === this.props.pIndex ? "active" : ""}>
                        <a>{value}</a>
                      </li>
                    );
                })
            }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}