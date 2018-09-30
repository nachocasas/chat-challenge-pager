import React from 'react';

export function WhoIsTyping (props){
  let typing = '';
  if(props.names != '') {
    typing = `${props.names} is typing...`;
  }
  
  return (
    <div className="whoistyping">
      {typing}
    </div>
  )
  
}