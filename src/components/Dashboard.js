import React, {useContext, useEffect, useState} from 'react';
import Posts from './Posts';
import PostDetails from './PostDetails';
import axios from "axios";
import AddPost from "./AddPost";
import SelectedPostIdContext from './SelectedPostIdContext';

function Dashboard() {

    console.log('Dashboard rendered');

    const [refreshPosts, setRefreshPosts] = useState(false);
    const [postsState, setPostsState] = useState([])
    const {selectedPostId, setSelectedPostId} = useContext(SelectedPostIdContext);

    const fetchData = () => {
        axios.get('http://localhost:8080/api/v1/posts')
            .then(response => {
                setPostsState(response.data);
                setRefreshPosts(false);
                setSelectedPostId(null);
            })
            .catch(error => console.log(error.message));
    };
    useEffect(() => fetchData(), [refreshPosts]);

    const handleDelete = () => setRefreshPosts(true);

    return (
        <div className={'dashboard'}>
            <h1>Dashboard</h1>

            <h2>Posts</h2>
            <Posts posts={postsState} selectedPostId={selectedPostId} setSelectedPostId={setSelectedPostId}/>

            <div>
                <AddPost setRefreshPosts={setRefreshPosts}/>
                {selectedPostId && <PostDetails selectedPostId={selectedPostId} handleDelete={handleDelete}/>}
            </div>
        </div>
    );
}

export default Dashboard;