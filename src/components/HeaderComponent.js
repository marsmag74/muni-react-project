import React, { Component }  from 'react';
import {  Navbar, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, } from 'reactstrap';




/*
class MenuSignIn extends Component {
 constructor(props) {
     super(props);
     this.toggleNav = this.toggleNav.bind(this);
     this.state = {
         isSignIn: true,
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
                                <a className="nav-link" to="/home">
                                    <i className="fa fa-home fa-sm" /> Home
                                </a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" to="/myaccount">
                                    <i className="fa fa-bars fa-sm" /> My Account
                                </a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" to="/orders">
                                    <i className="fa fa-bars fa-sm" /> Orders
                                </a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" to="/messages">
                                    <i className="fa fa-bars fa-sm" /> Messages
                                </a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" to="/sign-out">
                                    <i className="fa fa-bars fa-sm" /> Sign Out
                                </a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    );
}
}
*/

class MenuPage extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isSignIn: false,
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
            <div className="container">
                <div className= "row align-items-center">

               <div className="logo col-xs-9 col-md-2 " >
        <img src="./assets/images/logo-80.jpg" alt="Muni Logo" />
    </div>  
    <div className="col-xs-3 col-md-10 ml-auto mr-0 pr-0 align-self-end" >
               <Navbar bg="light" light expand="md">
                  
                   <NavbarToggler onClick={this.toggleNav} className="ml-auto"/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                       <Nav navbar>
                           
                               <NavItem>
                                   <a className="nav-link" to="/home">
                                     Home
                                   </a>
                               </NavItem>
                               <NavItem>
                                   <a className="nav-link" to="/bakery">
                                      Bakery
                                   </a>
                               </NavItem>
                               <NavItem>
                                   <a className="nav-link" to="/bread">
                                     Bread
                                   </a>
                               </NavItem>
                               <NavItem>
                                   <a className="nav-link" to="/jamsandpreserves">
                                      Jams 	&amp; Preserves
                                   </a>
                               </NavItem>
                               <NavItem>
                                   <a className="nav-link" to="/crafts">
                                     Crafts
                                   </a>
                               </NavItem>
                               <NavItem>
                                   <a className="nav-link" to="/signin">
                                      Sign In
                                   </a>
                               </NavItem>
                           </Nav>
                       </Collapse>
                   
               </Navbar>
               </div>
               <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit">Login</Button>
                        </Form>
                    
                    </ModalBody>
                </Modal>
                </div>
                </div>
           </React.Fragment>
       );
   }
   }

   class MenuComponent extends Component {
       render(){
           return(
               <MenuPage />
           );
       }
   }
export default MenuComponent;