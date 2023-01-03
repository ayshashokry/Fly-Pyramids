import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../images/FPLogo.png';
import '../../stylesheets/NavBCss.css';

export default class NavB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBackground: 'transparent'
    };
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const backgroundcolor = window.scrollY < 100 ? 'transparent' : '#fff';

      this.setState({ navBackground: backgroundcolor });
    });
  }
  render() {
    return (
      // <Container>
      <Navbar
        style={{ backgroundColor: this.state.navBackground }}
        collapseOnSelect
        fixed="top"
        expand="lg"
        className="navbar"
      >
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="navLogo mx-auto img-fluid"
            alt="Fly-Pyramid-Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <NavLink
              exact
              to="/"
              activeStyle={{
                color: '#2C9CB7',
                textDecoration: 'none',
                borderBottom: '5px solid #2C9CB7'
              }}
            >
              {' '}
              Home
            </NavLink>
            <NavLink
              exact
              to="/Services"
              activeStyle={{
                color: '#2C9CB7',
                textDecoration: 'none',
                borderBottom: '5px solid #2C9CB7'
              }}
            >
              Services
            </NavLink>
            <NavLink
              exact
              to="/AboutUs"
              activeStyle={{
                color: '#2C9CB7',
                textDecoration: 'none',
                borderBottom: '5px solid #2C9CB7'
              }}
            >
              About Us
            </NavLink>
            {/* <NavLink
              exact className='disabled-link'
              to="/News"
              activeStyle={{
                color: '#2C9CB7',
                textDecoration: 'none',
                borderBottom: '5px solid #2C9CB7'
              }}
            >
              News
            </NavLink> */}
            <NavLink
              className="reachlink"
              exact
              to="/ReachUs"
              activeStyle={{
                color: '#2C9CB7',
                paddingBottom: '5px',
                textDecoration: 'none',
                borderBottom: '5px solid #2C9CB7'
              }}
            >
              Reach Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      // </Container>
    );
  }
}
