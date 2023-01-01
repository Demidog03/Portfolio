import React, {useEffect} from 'react';
import postsData from "../../../data/postsData";
import Post from "../post/Post";
import './posts.css'
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../../../redux/features/post/postSlice";

const Posts = () => {
    const dispatch = useDispatch()
    const {posts, popularPosts} = useSelector(state => state.post)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    if(!posts.length) {
        return (
            <h2>No Posts!</h2>
        )
    }

    // const posts = postsData.map(post => {
    //     return (
    //         <Post
    //         key={post.id}
    //         title={post.title}
    //         date={post.date}
    //         desc={post.desc}
    //         img={post.img}
    //         />
    //     )
    // })

    return (
        <section className='posts flex-center'>
            <h2>My Art</h2>
            <div className="container flex-space-btw">
                {
                    posts?.map((post, idx) => (
                        <Post ket={idx} post={post}/>
                    ))
                }

            </div>

        </section>
    );
};

export default Posts;