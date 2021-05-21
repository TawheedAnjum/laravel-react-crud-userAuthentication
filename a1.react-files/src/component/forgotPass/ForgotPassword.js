import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "../../Axios";

import "./forgot.css";

function ForgotPassword(props) {
    const [emailState, setEmailState] = useState("");
    
    let sendingInfo  =  props.sentMail;

    let mailHandeler = () => {
        axios({
            method: "post",
            url: "/forgot_password",
            data: {
                email: emailState,
            },
        })
            .then((response) => {
                console.log(response);
                return sendingInfo=true;
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const showUI = (
        <Form className="forgotForm">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Your Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="formControl"
                    value={emailState}
                    onChange={(event) => {
                        setEmailState(event.target.value);
                    }}
                />
            </Form.Group>
            <Button variant="primary" onClick={mailHandeler}>
                Send
            </Button>
        </Form>
    );

    const dontShowMail = <p>Code sent on your Email</p>

    return <React.Fragment>
        {sendingInfo? dontShowMail : showUI}
    </React.Fragment>;
}

export default ForgotPassword;
