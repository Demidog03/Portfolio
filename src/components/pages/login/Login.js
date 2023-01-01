import React, {useEffect, useState} from 'react';
import Header from "../../blog-page/header/Header";
import Footer from "../../home-page/footer/Footer";
import './login.css'
import '../main.css';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {checkIsAuth, loginUser} from "../../../redux/features/auth/authSlice";
import {toast} from "react-toastify";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {status} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(checkIsAuth)

    useEffect(() => {
        if(status) {
            if(status==='Successful Login!'){
                toast.success(status)
            }
            else{
                toast.error(status)
            }
        }
        if (isAuth) navigate('/blog')
    }, [status, isAuth, navigate])

    const handleSubmit = () => {
        try {
            dispatch(loginUser({username, password}))
        }catch (error){
            console.log(error)
        }
    }
    return (
        <div>
            <Header/>
            <section className="login flex-center   ">
                <div className="overlay flex-center">
                    <form className='flex-center' onSubmit={e => e.preventDefault()}>
                        <h1>Login</h1>
                        <label className='username' htmlFor="">
                            Username:
                            <input
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                type="text"
                                placeholder='username'/>
                        </label>
                        <label className='password' htmlFor="">
                            Password:
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                placeholder='password'/>
                        </label>
                        <div className='buttons flex-center'>
                            <input
                                onClick={handleSubmit}
                                className='submit'
                                type="submit"
                                value='Continue'/>
                            <Link to="/blog/register"><p>Do not have any account?</p></Link>
                        </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Login;