import React, {useEffect} from 'react';
import Post from "../post/Post";
import './posts.css'
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../../../redux/features/post/postSlice";


const Posts = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.post)
    const {loading} = useSelector(state => state.post)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])


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

    if(loading){
        return (
            <section className='posts flex-center'>
                <h2>Loading</h2>
            </section>
        )
    }
    else {
        if(!posts.length) {
            return (
                <section className='posts flex-center'>
                    <h2>No Posts!</h2>
                </section>
            )
        }
        return (
            <section className='posts flex-center'>
                <h2>My Art</h2>
                <div className="container flex-space-btw">
                    {
                        posts?.map((post, idx) => (
                            <Post key={idx} post={post}/>
                        ))
                    }

                </div>

            </section>
        );
    }
};

export default Posts;