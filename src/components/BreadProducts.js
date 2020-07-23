import React from 'react';
import Product from './ProductComponent';


const BreadProduct = ({ products }) => {
    return (
        <div className="container my-5">
            <div className="row">

                {products.map(product => {
                    if (product.categories.bread === true) {
                        return (
                            <div className="col-6 col-sm-3 "> 
                                <Product id={product.id} image={product.image} title={product.title} />
                            </div>
                        );
                    } else {
                        return (
                            <div></div>
                        );
                    }
                })}

            </div>
        </div>
    )


}

export default BreadProduct;