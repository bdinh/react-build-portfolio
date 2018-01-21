import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '/../include/bootstrap';


export default class Navbar extends Component {
  render() {

    const {
      navbarBrand,
      navbarLinks
    } = this.props;

    return (
      <nav className="navbar navbar-expand-md fixed-top navbar-dark">
        <a className="navbar-brand" href="#home">{navbarBrand}</a>
        <button className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item "><a className="nav-link" href={navbarLinks[0].link}>{navbarLinks[0].name} <span className="sr-only">(current)</span></a></li>
            {
              navbarLinks.splice(1, navbarLinks.length - 1).map((link, i) => {
                return (
                  <li className="nav-item" key={i}>
                    <a className="nav-link" href={link.link}>
                      {link.name}
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  navbarBrand: PropTypes.string,
  navbarLinks: PropTypes.object
};
