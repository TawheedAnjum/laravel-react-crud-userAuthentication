import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "../../Axios";

import "./register.css";

function Register() {
    const [nameState, setNameState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [passwordState, setPasswordState] = useState("");
    const [confirmPasswordState, setConfirmPasswordState] = useState("");
    
    const registerHandaler = () => {
        axios({
            method: 'post',
            url: '/register',
            data: {
                name: nameState,
                email: emailState,
                password: passwordState,
                password_confirmation: confirmPasswordState
            }
          }).then(response => {
                localStorage.setItem('token', response.data.token);
                console.log(response.data)
          }).catch((error)=>{
            console.log(error);
          });
        
    }

    return (
        <React.Fragment>
            <Form className="form">
                <Form.Group controlId="validationFormik101">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        className="formControl"
                        value={nameState}
                        onChange={event => {setNameState(event.target.value)}}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className="formControl"
                        value={emailState}
                        onChange={event => {setEmailState(event.target.value)}}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className="formControl"
                        value={passwordState}
                        onChange={event => {setPasswordState(event.target.value)}}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        className="formControl"
                        value={confirmPasswordState}
                        onChange={event => {setConfirmPasswordState(event.target.value)}}
                    />
                </Form.Group>
                <Button variant="primary" onClick={registerHandaler}>
                    Register
                </Button>
            </Form>
        </React.Fragment>
    );
}

export default Register;
