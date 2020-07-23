import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MenuComponent from './HeaderComponent';
import HomeComponent from './components/HomeComponent';
import BakeryProduct from './components/BakeryProducts';
import BreadProduct from './components/BreadProducts';
import JamProduct from './components/JamsProducts';
import { PRODUCTS } from '../shared/products'



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
           <HomeComponent />
       )
   }

            return (
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
            );
        };
    }

    export default Main;