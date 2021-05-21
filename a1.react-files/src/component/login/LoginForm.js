import React, {useState} from "react";
import "./loginFrom.css";
import { Form, Button } from "react-bootstrap";
import axios from "../../Axios";
import {Link, useHistory} from "react-router-dom";


function LoginForm() {
    const [emailState, setEmailState] = useState('');
    const [passwordState, setPasswordState] = useState('');

    let history = useHistory();

    const loginHandeler = () => {
        axios({
            method: 'post',
            url: '/login',
            data: {
                email: emailState,
                password: passwordState
            }
          }).then(response => {
                localStorage.setItem('token', response.data.token);
                console.log(response.data);
          }).then(() => {
                if (localStorage.getItem('token') !== 'undefined') {
                    history.push('/')
                } else {
                    console.log(`password wrong`);
                }
          })
          .catch((error)=>{
            console.log(error);
          });
        
    }
    return (
        <div className="login">
            <Form className="form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className="formControl" value={emailState} onChange={event => {setEmailState(event.target.value)}}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" className="formControl" value={passwordState} alue={emailState} onChange={event => {setPasswordState(event.target.value)}}/>
                </Form.Group>
                <Form.Group>
                    <Link to="/forgot-password">Forgot Password</Link>
                </Form.Group>
                <Button variant="primary" onClick={loginHandeler}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default LoginForm;
