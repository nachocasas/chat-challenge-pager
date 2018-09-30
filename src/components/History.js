import React, { Component } from 'react';
import { connect } from 'react-redux';

class History extends Component {
  
  constructor(props){
    super(props);
  }
 
  componentDidUpdate(){
    this.divContainer.scrollTop = this.divContainer.scrollHeight - this.divContainer.clientHeight;
  }

  renderChatHistory(history){
    return history.map((item, i) => {
      return <li key={ i }><span>{item.username}</span>: {item.data} </li>
    })
  }

  render(){
    const chatHistory = this.renderChatHistory(this.props.history);
    
    return(
      <div ref={ (ref) => this.divContainer = ref } className="history">
        <ul>
          { chatHistory }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ chat }){
  if(!chat.history) {
      return { history: [] };
  }
  return { history: chat.history };
}

export default connect(mapStateToProps)(History);