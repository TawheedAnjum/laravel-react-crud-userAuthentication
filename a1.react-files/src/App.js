import React from "react";
import Layout from "./component/layout/Layout";
import User from "./container/User";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <Container>
                <Layout>
                    <User />
                </Layout>
            </Container>
        </Router>
    );
}

export default App;
