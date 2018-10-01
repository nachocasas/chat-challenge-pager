import React, { Component } from 'react';
export default class ChatInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
    }
    this.tipingTimeOut = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let self = this;
    this.setState({
      text: e.target.value
    })

    this.props.isTyping(true)
    if(this.tipingTimeOut){ 
      clearTimeout(this.tipingTimeOut);
    }

    this.tipingTimeOut = setTimeout(function() { self.props.isTyping(false) }, 2000);
  }

  handleEnter(e){
    const code = (e.keyCode ? e.keyCode : e.which)
    if(code == 13){
      this.handleSubmit();
    }
  }

  handleSubmit(e){
    if(this.state.text.trim() != ''){
      this.props.onEnter(this.state.text);
      this.setState({ text: '' });
    }
  }

  render(){
    return(
      <div className="chatinput">
        <input onChange={ this.handleChange } onKeyPress={ this.handleEnter } value={this.state.text} />
        <button onClick={ this.handleSubmit }>Send</button>
      </div>
    )
  }
}