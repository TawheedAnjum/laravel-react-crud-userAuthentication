import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import LoginForm from "../component/login/LoginForm";
import RegisterForm from "../component/register/RegisterForm";
import ForgotPassword from "../component/forgotPass/ForgotPassword";
import ResetPassword from "../component/resetpassword/Reset";
import Home from "../component/home/Home";
import axios from "../Axios";

class User extends Component {
    state = {
        user: {},
        sentMail: false,
    };
    componentDidMount() {
        axios
            .get("/home")
            .then((response) => {
                this.setState({ user: response.data });
                console.log(this.state.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {

        // const sentDoneHandeler = () => {
        //     this.setState({sentMail: true});
        // }
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact>
                        <Home info={this.state.user} />
                    </Route>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/register" component={RegisterForm} />
                    <Route path="/Forgot-password">
                        <ForgotPassword  sentMail={this.state.sentMail}  sendingDone={this.sentDoneHandeler}/>
                    </Route>
                    <Route path="/reset-password/:email/:token" component={ResetPassword} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default User;
