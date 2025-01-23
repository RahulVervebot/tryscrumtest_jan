import React from 'react'

const ReferIcon = () => {

    
    
   const my_float = {
        marginTop:"16px"
    }


    return (
        <div className='referrer_main'>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                <a href="/refer-a-friend" className="whatsappshare" target="_blank">
                    <i className="fa fa-whatsapp" style={my_float}></i>
                </a>
        </div>
    
    )
}

export default ReferIcon