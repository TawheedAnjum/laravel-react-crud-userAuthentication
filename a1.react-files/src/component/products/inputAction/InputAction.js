import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function InputAction(props) {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const submitHandeler = () => {
        props.addNewProduct(productName, price, quantity)
    }

    return (
        <div className="row justify-content-center bg-light shadow-sm mt-5 mx-4">
            <div className="col-7 my-5">
                <Form>
                    <Form.Group controlId="formGroupExampleInput">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" value={productName}  onChange={event => {setProductName(event.target.value)}} />
                    </Form.Group>

                    <Form.Group controlId="formGroupExampleInput2">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="number" value={price} onChange={event => {setPrice(event.target.value)}} />
                    </Form.Group>
                    <Form.Group controlId="formGroupExampleInput3">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" value={quantity} onChange={event => {setQuantity(event.target.value)}} />
                    </Form.Group>
                    
                </Form>
                <Button
                    variant="primary"
                    type="submit"
                    className="btn-block"
                    onClick={submitHandeler}
                >
                    Submit
                </Button>

              
            </div>
        </div>
    );
}

export default InputAction;
