import React, {useState} from 'react';
import './header.css'
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
const lineIcon = require('../../../assets/images/line1.png')

function Header() {
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(prevState => !prevState)
    }
    return (
        <header className={"flex-center"}>
            <div className={"container flex-space-btw"}>
                <nav className={"flex-center"}>
                    <img src={lineIcon} alt="lineIcon"/>
                        <p className='dropdown' onClick={handleClick} href="">About <i className='bx bx-chevron-down'></i>
                        <ul style={
                            isActive ? {
                                opacity: 1,
                                pointerEvents: 'all'
                            }
                            : {
                                opacity: 0,
                                pointerEvents: 'none'
                            }
                        }>
                            <HashLink to="/#education"><li>Education</li></HashLink>
                            <HashLink to="/#work"><li>Work</li></HashLink>
                            <HashLink to="/#skills"><li>Skills</li></HashLink>
                        </ul>
                        </p>

                    <Link to="/blog">My Art</Link>
                <HashLink to="/#contact">
                    <a href="">Contact</a>
                </HashLink>
                </nav>
                <h3>Demi || Otep Olzhas</h3>
            </div>
        </header>
    );
}

export default Header;