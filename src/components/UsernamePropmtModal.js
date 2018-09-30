import React, { Component } from 'react';

export default class UsernamePropmtModal extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleEnter(e){
    const code = (e.keyCode ? e.keyCode : e.which)
    if(code == 13){
      this.handleSubmit();
    }
  }

  handleSubmit(){
    this.props.onUsernameEnter(this.state.text);
    this.setState({ text: '' });
  }

  render(){
    return(
      <div className="username-modal">
        <div className='prompt'>
          <h3>Please enter your username:</h3>
          <input onChange={ this.handleChange } onKeyPress={ this.handleEnter }></input>
          <button onClick={ this.handleSubmit }>Chat!</button>
        </div>
      </div>
    )
  }
}