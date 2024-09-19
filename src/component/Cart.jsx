import React from 'react';
import { useContext } from 'react';
import { cardcontext } from '../context/Cart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Cart() {
    const carditem = useContext(cardcontext);
    const total = carditem.items.reduce((acc, item) => acc + item.price, 0);

    // Function to remove an item
    const removeItem = (index) => {
        const newItems = carditem.items.filter((_, i) => i !== index);
        carditem.setItems(newItems);
    };

    return (
        <div>
            <Row>
                <Col sm={12}>
                    {carditem && <p className="bg-primary text-white p-3">Total price = Rs. {total}</p>}
                </Col>
                <Col sm={12}>
                   
                        {carditem && carditem.items.map((item, index) => (
                            <div key={index} className="bg-light p-1 m-1 ">
                                <span style={{}}><b>{item.name}</b> </span><br /> <span>Rs. {item.price}</span>
                                <br />
                                <br />
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removeItem(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                 
                </Col>
            </Row>
        </div>
    );
}
