import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import LoginForm from "../component/login/LoginForm";
import RegisterForm from "../component/register/RegisterForm";
import Home from "../component/home/Home";
import axios from "../Axios";

class User extends Component {
    state = {
        user: {}
    };
    componentDidMount() {
        axios
            .get("/home")
            .then((response)=>{
                this.setState({user: response.data});
                console.log(this.state.user);
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
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
                </Switch>
            </React.Fragment>
        );
    }
}

export default User;
