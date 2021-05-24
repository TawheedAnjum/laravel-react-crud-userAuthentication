import React from 'react';
import { Table, Button } from 'react-bootstrap';

import "./productAction.css";
import InputAction from "../inputAction/InputAction";

function ProductAction(props) {
    let inputShow = null;

    if(props.formShow){
        inputShow =  <InputAction />
    }
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
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Phone</td>
                    <td>$40</td>
                    <td>3</td>
                    <td>
                        <Button variant="primary" onClick={props.editBtnHandler}>Edit</Button>{' '}
                        <Button variant="danger">Delete</Button>{' '}
                    </td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Phone</td>
                    <td>$40</td>
                    <td>3</td>
                    <td>
                        <Button variant="primary" onClick={props.editBtnHandler}>Edit</Button>{' '}
                        <Button variant="danger">Delete</Button>{' '}
                    </td>
                    </tr>
                </tbody>
            </Table> 

           
            {inputShow}
        </React.Fragment>
    )
}

export default ProductAction
