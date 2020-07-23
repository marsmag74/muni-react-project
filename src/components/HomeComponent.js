import React, { Component } from 'react';
import Header from './HeaderComponents';
import Search  from './components/SearchBar'
import HomeCarousel from './components/CarouselComponent';
import FeaturedProduct from './components/FeaturedProducts';
import { PRODUCTS } from '../shared/products';

class HomeComponent extends Component {

render(){
    return(
        
        <React.Fragment>
         <Header />
         <HomeCarousel />
         <Search />
         <FeaturedProduct products= {PRODUCTS}/>
        </React.Fragment>


    );
}

}

export default HomeComponent;