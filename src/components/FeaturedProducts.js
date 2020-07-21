import React from 'react';
import Product from './ProductComponent';




const FeaturedProducts = ({products}) => {
    return(
        <div className="container my-5">
            <div className="row">
             
            {products.map(
                product => {
                    return(
                        <div className="col-xs-6 col-sm-3">     
                <Product id={product.id} image={product.image} title={product.title} />
                        </div>
                    );}
            )}
            </div>
            </div>
       
    )
}

export default FeaturedProducts;
