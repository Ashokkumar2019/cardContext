import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { cardcontext } from '../context/Cart';

export default function Items(props) {
    const carditem=useContext(cardcontext);
  return (
    <div>
    <Card>
      <Card.Img variant="top" src={props.url} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        Rs.  {props.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>carditem.setItems([...carditem.items,{ name: props.name, price: props.price }])}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
