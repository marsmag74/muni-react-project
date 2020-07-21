import React from 'react';
import './App.css';
import Search  from './components/SearchBar'
import HomeCarousel from './components/CarouselComponent';
import FeaturedProduct from './components/FeaturedProducts';
import { PRODUCTS } from '../src/shared/products';
import MenuPage from './components/HeaderComponent';

function App() {
  return (
    <div className="App">
      <MenuPage />
      <HomeCarousel />
      <Search />
      <FeaturedProduct products={ PRODUCTS }/>
      
    </div>
  );
}

export default App;
