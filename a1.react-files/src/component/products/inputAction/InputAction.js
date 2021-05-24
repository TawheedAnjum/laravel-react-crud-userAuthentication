import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

function InputAction() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="row justify-content-center bg-light shadow-sm mt-5 mx-4">
            <div className="col-7 my-5">
                <Form>
                    <Form.Group controlId="formGroupExampleInput">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="formGroupExampleInput2">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="numberr" />
                    </Form.Group>
                    <Form.Group controlId="formGroupExampleInput3">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    
                </Form>
                <Button
                    variant="primary"
                    type="submit"
                    className="btn-block"
                    onClick={handleShow}
                >
                    Submit
                </Button>

                {/* Model */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Do you want to comfirm
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Comfirm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default InputAction;
