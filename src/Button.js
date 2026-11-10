import React, { Component } from 'react';

function Button(props){
  function handleClick(e) {
    e.preventDefault();
    props.fun();
  }
  let className = "button ";
  className += props.class;
  return(
    <div className={className}>
      <p>{props.text}</p>
    </div>
  );
}
export default Button;
