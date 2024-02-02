import React, {useEffect, useState} from 'react';
import Post from './Post';
import {Outlet} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import FetchService from "../service/FetchService";

function Posts({ refreshPosts, setRefreshPosts }) {

    console.log('Posts rendered')

    const [selectedPostId, setSelectedPostId] = React.useState();
    const [postsState, setPostsState] = useState([])

    const fetchData = () => {
        const posts = FetchService.getPosts();
        posts.then(posts => {
            setPostsState(posts);
            setRefreshPosts(false);
        });
    };
    useEffect(() => fetchData(), [refreshPosts]);

    return (
        <React.Fragment>
            <div className='posts'>
                {postsState.map(post => (
                    <Post key={post.id} post={post} selectedPostId={selectedPostId}
                          setSelectedPostId={setSelectedPostId}/>
                ))}
            </div>
            <Outlet />
        </React.Fragment>
    );
}

export default Posts;