import React from 'react';
import PropTypes from 'prop-types';

import Pusher from 'pusher-js';
import slugify from 'slugify';
import randomAnimal from 'random-animal-name-generator';
import { StaticQuery, graphql } from "gatsby";

import MessageList from './MessageList';
import './style.css';

class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      message: '',
      messages: []
    }

    this.user = randomAnimal();

  }


  componentWillMount() {
    // this.pusher = new Pusher('1218341', {
    //   authEndpoint: 'http://localhost:5000/',
    //   cluster: 'ap2',
    //   encrypted: false
    // });

    // {this.pusher.logToConsole = true;}
    // var channel = 'private-' + slugify(this.props.title);
    // this.post_channel = this.pusher.subscribe(channel);

  }

  componentDidMount() {
    
    // this.post_channel.bind('client-on-message', (message) => {
    //   message.time = new Date(message.time);
    //   this.setState({
    //     messages: this.state.messages.concat(message)
    //   });
    // });

  }

  handleChange(e) {
    var message = e.target.value;
    this.setState({
      message: message
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let text = this.state.message;
    let message = {
      by: this.user,
      body: text,
      time: new Date()
    };
    
    // this.post_channel.trigger('client-on-message', message);
    this.setState({
      message: '',
      messages: this.state.messages.concat(message)
    });
  }

  render() {
      console.log("data from post");
      console.log(this.props.title);  

    return (

      <StaticQuery
      query={graphql`
        query MyQuery {
          allWpAlltable {
            nodes {
              tabledata {
                tableDescription {
                  date
                  description
                  fieldGroupName
                  keywords
                  location
                  regularPrice
                  salePrice
                  time
                  trainer
                  url
                }
              }
            }
          }
        }
      `}
      
    
      render={data => (

        <div className="chatbox">
          <div className="post-single">
            <div className="post-single__inner">
              <h1>Search Courses Timings</h1>
              <h1>
              {data.allWpAlltable.nodes.tabledata.map(
                value =>{
                  console.log("value is")
                  console.log(value);
                  return (
                      <h1>hii</h1>
                  )}
              )}
              </h1>

              <form onSubmit={this.onSubmit}>
                <input type="text" className="text-input" placeholder="Type name of course here.." 
                  value={this.state.message} 
                  onChange={this.handleChange} />  
              </form>
                {
                  this.state.messages 
                  &&
                  <MessageList messages={this.state.messages} />
                }
            </div>
          </div>
        </div>

      )}
    />
    
    );

  }

}

// Chat.propTypes = {
//   title: PropTypes.string.isRequired
// };

export default Chat;