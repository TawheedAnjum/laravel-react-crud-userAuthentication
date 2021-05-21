import React, {useState} from 'react';
import axios from "../../Axios";
import {useHistory} from "react-router-dom";

import { Form, Button } from "react-bootstrap";
import "./reset.css";

function Reset(props) {
    const [newpassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPasswordState] = useState('');

    let history = useHistory();

    const resetPasswordHandeler = () => {
        const email = props.match.params.email;
        const token = props.match.params.token;

        axios.post('/reset_password/'+email+'/'+token, {
            password: newpassword
          })
          .then(function (response) {
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
          }).then(() => {
            if (localStorage.getItem('token') !== 'undefined') {
                history.push('/')
            } else {
                console.log(`can not update`);
            }
          })
          .catch(function (error) {
            console.log(error);
        });

    }
    return (
        <React.Fragment>
            <Form className="resetForm">
                <Form.Group controlId="formBasicPassword1">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" className="formControl" value={newpassword} onChange={event => {setNewPassword(event.target.value)}}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" className="formControl" value={confirmPassword} onChange={event => {setConfirmPasswordState(event.target.value)}}/>
                </Form.Group>
                <Button variant="primary" onClick={resetPasswordHandeler}>
                    Reset Password
                </Button>
            </Form>
        </React.Fragment>
    )
}

export default Reset
