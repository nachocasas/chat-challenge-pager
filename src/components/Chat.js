import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsername,
          handleConnectionStatusEvents, 
          setIncommingHistoryEvent,
          setIncommingUserlistEvent,
          setIncommingMessageEvent,
          setIncommingIsTypingEvent } from '../actions'
import io from "socket.io-client"

import History from './History';
import UserList from './UserList';
import ChatInput from './ChatInput';
import UsernamePropmtModal from './UsernamePropmtModal';
import { WhoIsTyping } from './WhoIsTyping'

const SOCKET_URL = 'http://localhost:3000'

class Chat extends Component {
  
  constructor(props){
    super(props);
    this.socket = null;
    this.setUserAndConnect = this.setUserAndConnect.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.setTyping = this.setTyping.bind(this);
  }

  setUserAndConnect(username){
    this.socket = io.connect(SOCKET_URL, { query: 'username='+username});
    this.props.setUsername(username);
    this.fireEventListeners();
  }

  sendMessage(message){
    this.socket.emit('message', message );
  }

  setTyping(isTyping){
    this.socket.emit('isTyping', isTyping );
  }

  whoIsTyping(){
    return this.props.isTyping ? this.props.isTyping.join(', ') : null
  }

  fireEventListeners(){
    const { props, socket } = this;
    props.handleConnectionStatusEvents(socket);
    props.setIncommingHistoryEvent(socket);
    props.setIncommingUserlistEvent(socket);
    props.setIncommingMessageEvent(socket);
    props.setIncommingIsTypingEvent(socket);
  }

  render(){
    const whoIsTyping = this.whoIsTyping();
    return(
      <div className="chat-app">
        { !this.props.connected && <UsernamePropmtModal onUsernameEnter = { this.setUserAndConnect } /> }
        <div className="header">
          <h1>Pager challenge chat</h1>
        </div>
        <div className="main-content">
          <div className="left-container">
            <History />
            <WhoIsTyping names={ whoIsTyping } />
            <ChatInput isTyping={ this.setTyping } onEnter={ this.sendMessage } />
          </div>
          <div className="right-container">
            <UserList onUserClick={ this.handleUserSelect } />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ chat }) {
  const { username, connected, isTyping } = chat;
  return { username, connected, isTyping }
}


export default connect(mapStateToProps, {
  setUsername,
  handleConnectionStatusEvents, 
  setIncommingHistoryEvent,
  setIncommingUserlistEvent,
  setIncommingMessageEvent, 
  setIncommingIsTypingEvent })(Chat)