import React, {useState, useEffect} from 'react';
import Header from "../../blog-page/header/Header";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../../home-page/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {checkIsAuth, registerUser} from "../../../redux/features/auth/authSlice";
import {toast} from "react-toastify";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {status} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)
    const navigate = useNavigate()

    useEffect(() => {
        if(status){
            if(status=='Success Registration!'){
                toast.success(status)
            }
            else {
                toast.error(status)
            }
        }
        if (isAuth) navigate('/blog')
    }, [status, isAuth, navigate])

    const handleSubmit = () => {
        try {
            dispatch(registerUser({username, password}))
            setUsername('')
            setPassword('')
        }catch (error){
            console.log(error)
        }
    }

    return (
        <div>
            <div>
                <Header/>
                <section className="login flex-center   ">
                    <div className="overlay flex-center">
                        <form className='flex-center' onSubmit={(e) => e.preventDefault()}>
                            <h1>Register</h1>
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
                                <Link to="/blog/login"><p>Already have an account?</p></Link>
                            </div>
                        </form>
                    </div>
                </section>
                <Footer/>
            </div>
        </div>
    );
};

export default Register;