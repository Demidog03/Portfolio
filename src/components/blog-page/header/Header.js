import React from 'react';
import './header.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {checkIsAuth, logout} from "../../../redux/features/auth/authSlice";
import {toast} from "react-toastify";

const Header = () => {
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('You are logged out')
    }
    return (
        <header className='blog-header flex-center' id="blog-header">
            <div className="container flex-space-btw">
                <Link to="/"><p classname='link'>Go Main</p></Link>
                <nav className='flex-center'>
                    <Link to="/blog"><p classname='link'>Home</p></Link>
                    <Link to="/blog"><h3 className='logo'>Art Blog</h3></Link>
                    <Link to="/blog/new"><p classname='link'>Post</p></Link>
                </nav>

                {isAuth ? <button onClick={logoutHandler}><p className='link'>Logout</p></button> :
                    <Link to="/blog/login"><button><p classname='link'>Login</p></button></Link>}
            </div>
        </header>
    );
};

export default Header;