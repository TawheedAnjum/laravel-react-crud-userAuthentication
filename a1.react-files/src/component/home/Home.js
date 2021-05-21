import React from 'react'
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

function Home(props) {
    let history = useHistory();
    const logoutHandeler = () => {
        localStorage.clear();
        history.push('/login');

    }
    return (
       <React.Fragment>
           Hello <br />
           {props.info.email} <br /> <br />

           <Button variant="primary" size="lg" onClick={logoutHandeler}>
                Logout
            </Button>
           
       </React.Fragment>
    )
}

export default Home
