import React from 'react';
import { Card } from 'react-bootstrap';
// Adjusted import path for Product.css

function Product(props) {
  return (
    <Card className='card' id={props.id}  style={{ backgroundImage: `url(${props.image})` }}>
   
      <Card.Body>
        <Card.Title><h2>{props.title}</h2>
          </Card.Title>
        <Card.Text>{props.subtitle}</Card.Text>
        <button>Show More</button>
      </Card.Body>
    </Card>
  );
}

export default Product;
