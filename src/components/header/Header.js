import React from 'react';
import './header.css'
const lineIcon = require('C:\\Users\\Acer\\WebstormProjects\\React\\Portfolio\\portfolio\\src\\assets\\images\\line1.png')

function Header(props) {
    return (
        <header className={"flex-center"}>
            <div className={"container flex-space-btw"}>
                <nav className={"flex-center"}>
                    <img src={lineIcon} alt="lineIcon"/>
                    <a href="index.html">About</a>
                    <a href="index.html">My Art</a>
                    <a href="index.html">Contact</a>
                </nav>
                <h3>Demi || Otep Olzhas</h3>
            </div>
        </header>
    );
}

export default Header;