import React from 'react'

function Home(props) {
    return (
       <React.Fragment>
           Hello <br />
           {props.info.email}
       </React.Fragment>
    )
}

export default Home
