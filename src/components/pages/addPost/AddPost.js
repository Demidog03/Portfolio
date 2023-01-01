import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {checkIsAuth} from "../../../redux/features/auth/authSlice";
import Header from "../../blog-page/header/Header";
import Footer from "../../home-page/footer/Footer";
import './addPost.css'
import {toast} from "react-toastify";
import {createPost} from "../../../redux/features/post/postSlice";
import {useNavigate} from "react-router-dom";

const AddPost = () => {
    const isAuth = useSelector(checkIsAuth)
    const {user} = useSelector(state => state.auth)

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = () => {
        try {
            const data = new FormData()
            data.append('title', title)
            data.append('text', text)
            data.append('image', image)
            dispatch(createPost(data))
            navigate('/blog')
        }catch (error){
            toast.error(error)
        }
    }
    const clearFormHandler = () => {
        setText('')
        setTitle('')
    }

    return (
        !isAuth || user?.username !== 'demi' ?
            <div>
                <Header/>
                <div className="denied container flex-center">
                    <button><h1>Only admin can add new posts!</h1></button>
                </div>
                <Footer/>
            </div>
            :
            <div>
                <Header/>
                <div className="addPost container flex-center">
                    <form className='flex-center' onSubmit={e => e.preventDefault()}>
                        <label className='addImg'>
                            Add image
                            <input type="file"
                                   onChange={e => setImage(e.target.files[0])}/>
                        </label>
                        <div className="image">
                            {image && (<img src={URL.createObjectURL(image)} alt={image.name}/>)}
                        </div>

                        <label className='title'>
                            Title:
                            <input
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                type="text"
                                placeholder='title of post'/>
                        </label>

                        <label className='desc'>
                            Description:
                            <textarea
                                value={text}
                                onChange={e => setText(e.target.value)}
                                type="text"
                                placeholder='description'/>
                        </label>
                        <div className="buttons flex">
                            <button
                                onClick={submitHandler}
                                className="submitPost"><p>Submit</p></button>
                            <button
                                onClick={clearFormHandler}
                                className="clearPost"><p>Clear</p></button>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
    );
};

export default AddPost;