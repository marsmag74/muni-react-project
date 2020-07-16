import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
 constructor(props) {
     super(props);
     this.toggleNav = this.toggleNav.bind(this);
     this.state = {
         isNavOpen: false
     }

 }

 //js bind retains the this from original
toggleNav(){
    this.setState({
        isNavOpen: !this.state.isNavOpen

    });
}

render() {
    return (
        <React.Fragment>
            <div className="logo">
                <img src="/assets/images/logo-80.jpg" />
            </div>
            
            <Navbar dark  expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-sm" /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/myaccount">
                                    <i className="fa fa-bars fa-sm" /> My Account
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/orders">
                                    <i className="fa fa-bars fa-sm" /> Orders
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/messages">
                                    <i className="fa fa-bars fa-sm" /> Messages
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/sign-out">
                                    <i className="fa fa-bars fa-sm" /> Sign Out
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    );
}
}

export default Header;