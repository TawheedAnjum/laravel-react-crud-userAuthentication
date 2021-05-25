import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function InputAction(props) {
    const [productId, setProductId] = useState(props.productInfo.product_id);
    const [productName, setProductName] = useState(props.productInfo.product_name);
    const [price, setPrice] = useState(props.productInfo.price);
    const [quantity, setQuantity] = useState(props.productInfo.quantity);

    const submitHandeler = () => {
        props.addNewProduct(productName, price, quantity);
    };

    const updateHandeler = () => {
        props.updateProduct(productId, productName, price, quantity);
    }

    let btnName = null;
    if (props.btnType) {
        btnName = (
            <Button
                variant="primary"
                type="submit"
                className="btn-block"
                onClick={updateHandeler}
            >
                Update
            </Button>
        );
    } else {
        btnName = (
            <Button
                variant="primary"
                type="submit"
                className="btn-block"
                onClick={submitHandeler}
            >
                Add Product
            </Button>
        );
    }

    return (
        <div className="row justify-content-center bg-light shadow-sm mt-5 mx-4">
            <div className="col-7 my-5">
                <Form>
                <Form.Group controlId="formGroupExampleInput">
                        <Form.Control
                            type="hidden"
                            value={productId}
                            onChange={(event) => {
                                setProductId(event.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGroupExampleInput">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={productName}
                            onChange={(event) => {
                                setProductName(event.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGroupExampleInput2">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control
                            type="number"
                            value={price}
                            onChange={(event) => {
                                setPrice(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupExampleInput3">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            value={quantity}
                            onChange={(event) => {
                                setQuantity(event.target.value);
                            }}
                        />
                    </Form.Group>
                </Form>

                {btnName}
            </div>
        </div>
    );
}

export default InputAction;
