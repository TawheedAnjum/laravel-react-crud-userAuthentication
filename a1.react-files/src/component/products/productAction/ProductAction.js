import React from "react";
import { Table, Button } from "react-bootstrap";

import "./productAction.css";
import InputAction from "../inputAction/InputAction";

function ProductAction(props) {
    let inputShow = null;

    if (props.formShow) {
        inputShow = <InputAction />;
    }

    const deleleteProductHandler = (id) => {
        props.newData(id);
    }

    const allProducts = props.products.map((p) => {
        return (
            <tr key={p.product_id}>
                <td>{p.product_id}</td>
                <td>{p.product_name}</td>
                <td>${p.price}</td>
                <td>{p.quantity}</td>
                <td>
                    <Button variant="primary" onClick={props.editBtnHandler}>Edit</Button>{" "}
                    <Button variant="danger" onClick={() => deleleteProductHandler(p.product_id)}>
                        Delete
                    </Button>{" "}
                </td>
            </tr>
        );
    });

    return (
        <React.Fragment>
            <Table striped bordered hover size="md">
                <thead className="productAction">
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{allProducts}</tbody>
            </Table>

            {inputShow}
        </React.Fragment>
    );
}

export default ProductAction;
