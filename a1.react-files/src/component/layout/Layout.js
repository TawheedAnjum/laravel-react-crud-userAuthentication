import React from 'react';
import "./layout.css";
import Navbar from '../navbar/Navbar';

const Layout = (props) => {
    return (
        <React.Fragment>
            <div><Navbar /></div>
            <div className="layoutChildren">
                <div>{props.children}</div>
            </div>
        </React.Fragment>
    )
}

export default Layout;
