import React, { Component } from 'react';
import Button from './Button';

function Header(props){
  return(
    <div className="Header">
      <Button class='primary' text="JL" fun=""></Button>
      {/* Placeholder buttons omitted until real pages/content are implemented */}
    </div>
  );
}
export default Header;
