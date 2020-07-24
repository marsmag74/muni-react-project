import React, { Component } from 'react';
import Search  from './SearchBar'
import HomeCarousel from './CarouselComponent';
import FeaturedProduct from './FeaturedProducts';
import { PRODUCTS } from '../shared/products';


class HomeComponent extends Component {

render(){
    return(
        
        <React.Fragment>
         <HomeCarousel />
         <Search />
         <FeaturedProduct products={ PRODUCTS }/>
        </React.Fragment>


    );
}

}

export default HomeComponent;