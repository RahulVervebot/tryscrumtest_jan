import React from 'react'

const WhatsAppShare = () => {

    
    
   const my_float = {
        marginTop:"16px"
    }


    return (
        <div className='whatsapp_main'>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                <a href="https://wa.me/919789490848" className="whatsappshare" target="_blank">
                    <i className="fa fa-whatsapp" style={my_float}></i>
                </a>
                <a href="/refer-a-friend" className="referer-icon" target="_blank">
                    <img src="https://tryscrumtest.vervebot.io/wp-content/uploads/2024/05/referer-friend.png" style={{width:"70px"}}/>
                </a>
        </div>
    )
}

export default WhatsAppShare