import React, {useEffect, useState} from 'react';
import {AiFillEye, AiOutlineMessage, AiTwotoneEdit, AiFillDelete} from "react-icons/ai";
import Moment from 'react-moment'
import './post.css'
import Modal from "../../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {removePost} from "../../../redux/features/post/postSlice";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const Post = ({post}) => {
    const [modalActive, setModalActive] = useState(false)
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        setModalActive(true)
    }

    const removePostHandler = () => {
        try {
            toast.success('Post was deleted!')
            dispatch(removePost(post._id))
            navigate(0)
        }catch (error){
            console.log(error)
        }
    }

    return (
        <>
        <div className='post flex' onClick={handleClick }>
            <div className="post-img">
                <img src={`https://demi-portfolio-backend.onrender.com/${post?.imgUrl}`} alt=""/>
            </div>
            <h3 className='title'>{post.title}</h3>
            <p className='author'>@{post.username}</p>
            <p className='date'>
                <Moment date={post.createdAt} format='D MMM YYYY'/>
            </p>
            <p className='desc'>{post.text}</p>
            <div className="icons flex">
                <div className="eyeIcon flex">
                    <AiFillEye/><span>{post.views}</span>
                </div>

                <div className="commentsIcon flex">
                    <AiOutlineMessage/><span>{post.comments?.length}</span>
                </div>
            </div>
            {
                user?._id === post.author &&
                <div className="iconsUser flex">
                    <div className="deleteIcon flex">
                        <AiTwotoneEdit/>
                    </div>

                    <div onClick={removePostHandler} className="editIcon flex">
                       <AiFillDelete/>
                    </div>
                </div>

            }
        </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <img src={`https://demi-portfolio-backend.onrender.com/${post?.imgUrl}`} alt=""/>
            </Modal>
        </>
    );
};

export default Post;