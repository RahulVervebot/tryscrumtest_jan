import React from 'react';
import MessageList from './MessageList';
import './style.css';

class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      filteredData: [],
      query: ''
    }

  }



  handleChange(e) {

    //const query = event.target.value
    var message = e.target.value;
    console.log("Handled even in Chat.js");
    this.props.title.map(value =>{
        console.log(value);
    })
    
    const filteredDatalist =message.length===0?[]: this.props.title.filter(post => {
  
    return (

        //description.toLowerCase().includes(query.toLowerCase()) ||
      
        post.tabledata.tableDescription.description.toLowerCase().includes(message.toLowerCase()) ||
        post.title.toLowerCase().includes(message.toLowerCase()) 
            
        // ||
        // (tags &&
        //   tags
        //     .join("")
        //     .toLowerCase()
        //     .includes(query.toLowerCase()))
      )

    })

    this.setState({
      query: message,
      filteredData: filteredDatalist
    });
  }



  render() {

     console.log("table data received from home page");
    // console.log(this.props.title);
     console.log(this.state.title);

    return (
        <div>
        {/* <div className="chatbox"> */}
          {/* <div className="post-single"> */}
            {/* <div className="post-single__inner"> */}
            <div className="chatbox"> 
                <input type="text" className="text-input" placeholder="Type name of course here.." 
                onChange={this.handleChange} />          
            </div>      
                {this.state.filteredData.length!==0?
                  <MessageList messages={this.state.filteredData} />:null
                }
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
        </div>
    
    );

  }

}


export default Chat;