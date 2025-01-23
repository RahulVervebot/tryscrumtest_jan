import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const ModalExamplePage = ({location}) => (

  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
    
    <div>
        
        {modal ? (
            <Link to={closeTo}>
                Close
            </Link>
            ) : (
                <header>
                    <h1>
                    Website Title
                    </h1>
                    {/* <h2>Modal Page {location.state.username}</h2> */}
                     <Link to="/">Go back to the homepage</Link> 
                </header>
            )}

            {/* <iframe
                id="ts-iframe"
                src={location.state.username}
                frameborder="0"
                height="700"
                width="100%"        
            ></iframe> */}
            
            {/* <h2>Modal Page {location.state.username}</h2>
            <Link to="/">Go back to the homepage</Link> */}
    
    </div> 
               
    )}

  </ModalRoutingContext.Consumer>
)

export default ModalExamplePage