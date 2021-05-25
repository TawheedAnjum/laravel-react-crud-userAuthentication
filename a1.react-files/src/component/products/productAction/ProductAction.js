import React from "react";
import { Table, Button } from "react-bootstrap";

import "./productAction.css";

function ProductAction(props) {
    const deleleteProductHandler = (id) => {
        props.newData(id);
    }

    const editProduct = (id) => {
        props.editBtnHandler(id);
    }

    const allProducts = props.products.map((p) => {
        return (
            <tr key={p.product_id}>
                <td>{p.product_id}</td>
                <td>{p.product_name}</td>
                <td>${p.price}</td>
                <td>{p.quantity}</td>
                <td>
                    <Button variant="primary" onClick={() => editProduct(p.product_id)}>Edit</Button>{" "}
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

        </React.Fragment>
    );
}

export default ProductAction;
