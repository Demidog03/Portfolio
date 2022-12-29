import React from 'react';

const Header = () => {
    return (
        <header className='flex-space-btw'>
            <a href="">Go Main</a>
            <nav>
                <a href=""><p>Home</p></a>
                <a href=""><h3>Art Blog</h3></a>
                <a href=""><p>Post</p></a>
            </nav>
            <a href="">Login</a>
        </header>
    );
};

export default Header;