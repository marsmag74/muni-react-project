import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom';
import BakeryProduct from './BakeryProducts';
import BreadProduct from './BreadProducts';
import JamProduct from './JamsProducts';
import HomeComponent from './HomeComponent';
import MenuComponent from './HeaderComponent'


import { PRODUCTS } from '../shared/products';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS
        };
    }

        render() {
            const HomePage =()=>{
                return(
                    <HomeComponent/>
                )
            }

            return (
                <Router>
                <div>
                    <MenuComponent />
                    <Switch>
                    <Route path='/home' component={HomeComponent}  />
                        <Route exact path='/bakery' render={() => <BakeryProduct products={this.state.products} />} />
                        <Route exact path='/bread' render={() => <BreadProduct products={this.state.products} />} />
                        <Route exact path='/jamsandpreserves' render={() => <JamProduct products={this.state.products} />} />
                        
                        <Redirect to='/home' />
                    </Switch>
                    
                </div>
                </Router>
            );
        };
    }

    export default Main;


    /*

     {
   const HomePage =()=>{
       return(
           <HomeComponent/>
       )
   }


     <Router>
                <div>
                    <MenuComponent />
                    <Switch>
                        <Route path='/home' component={HomeComponent}  />
                        <Route exact path='/bakery' render={() => <BakeryProduct products={this.state.products} />} />
                        <Route exact path='/bread' render={() => <BreadProduct products={this.state.products} />} />
                        <Route exact path='/jamsandpreserves' render={() => <JamProduct products={this.state.products} />} />
                        
                        <Redirect to='/home' />
                    </Switch>
                    
                </div>
                </Router>

                import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom';
import MenuComponent from './HeaderComponent';
import HomeComponent from './HomeComponent';
import BakeryProduct from './BakeryProducts';
import BreadProduct from './BreadProducts';
import JamProduct from './JamsProducts';
import { PRODUCTS } from '../shared/products';

   */