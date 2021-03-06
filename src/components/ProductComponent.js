import React from 'react';
import {
    Card,
    CardImg,
    
    CardBody,
    CardTitle
} from 'reactstrap';



const Product = ({ id,image, title, description }) => {
    return (
        
                <Card  key={id}>
                    <CardImg className="product-image" variant=" top" src={image} alt="Product" />
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                       
                    </CardBody>
                </Card>

    )
};


export default Product;



