import React from 'react';
import logo from './images/box_45.jpg';

function Header(props){

    return (
    <header className="App-header">
        {/* this is a comment. A comment cannot be the first line after a return */}
        {console.log('hello from Header.js')}
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{props.title}</h1>
    </header>
    );
}

export default Header;

