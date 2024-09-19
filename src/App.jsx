import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Items from './component/Items';
import Cart from './component/Cart';
import data from './json/Item.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  return (
    <>
    <Row>
    <Col md={2} sm={12}></Col>
      <Col md={8} sm={12}>
      
    
    <Row>
      
  {
  data.map((item)=>(
    <Col md={4} sm={12} key={item.id}>
    <Items  name={item.name} price={item.price} url={item.imageUrl}/>
    </Col>
  ))}
  
   </Row>
  
   
      </Col>
      <Col md={2} sm={12}><Cart/></Col>
    </Row>
   
    </>
  )
}

export default App
