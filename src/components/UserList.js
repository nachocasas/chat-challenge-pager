import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
  
 
  renderChatHistory(userlist){
    let styleClass = '';
    return userlist.map((item, i) => {
      styleClass = i%2 ? 'even' : ''
      styleClass = item==this.props.username ? styleClass + ' current-user' : styleClass;
      return <li className={styleClass} key={ i }>{item}</li>
    })
  }
  
  render(){
    const userList = this.renderChatHistory(this.props.userlist);

    return(
      <div className="userlist">
        <h3>userlist</h3>
        <ul>{ userList }</ul>
      </div>
    )
  }
}

function mapStateToProps({ chat }){
  if(!chat.userlist) {
      return { userlist: [] };
  }
  return { userlist: chat.userlist, username: chat.username };
}

export default connect(mapStateToProps)(UserList);