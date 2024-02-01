import React, {useEffect, useState} from 'react';
import Posts from './Posts';
import PostDetails from './PostDetails';
import axios from "axios";
import AddPost from "./AddPost";

function Dashboard() {

    const [refreshPosts, setRefreshPosts] = useState(false);
    const [postsState, setPostsState] = useState([])
    const [selectedPost, setSelectedPost] = useState();

    const fetchData = () => {
        axios.get('http://localhost:8080/api/v1/posts')
            .then(response => {
                setPostsState(response.data);
                setRefreshPosts(false);
                setSelectedPost(null);
            })
            .catch(error => console.log(error.message));
    };
    useEffect(() => fetchData(), [refreshPosts]);

    const handleDelete = () => setRefreshPosts(true);

    return (
        <div className={'dashboard'}>
            <h1>Dashboard</h1>

            <h2>Posts</h2>
            <Posts posts={postsState} selectedPost={selectedPost} setSelectedPost={setSelectedPost}/>

            <div>
                <AddPost setRefreshPosts={setRefreshPosts}/>
                {selectedPost && <PostDetails post={selectedPost} handleDelete={handleDelete}/>}
            </div>
        </div>
    );
}

export default Dashboard;