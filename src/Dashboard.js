import React, {useState} from 'react';
import Posts from './Posts';
import PostDetails from './PostDetails';

function Dashboard() {

    const [postsState, setPostsState] = useState(
        [
            {id: 42, title: 'Some post', author: 'Me!'},
            {id: 69, title: 'Newer post', author: 'Me!'},
            {id: 1337, title: 'Unrelated', author: 'Just Dean'},
        ]
    )
    const [inputValue, setInputValue] = useState();
    const [selectedPost, setSelectedPost] = useState();

    const handleChangeTitleInputUpdate = (event) => {
        setInputValue(event.target.value);
    }

    const handleFirstPostTitleUpdate = () => {
        const copy = [...postsState];
        copy[0].title = inputValue;
        setPostsState(copy);
    }

    return (
        <div className={'dashboard'}>
            <h1>Dashboard</h1>

            <h2>Posts</h2>
            <Posts posts={postsState} selectedPost={selectedPost} setSelectedPost={setSelectedPost}/>

            <div>
                <input type="text" value={inputValue} onChange={handleChangeTitleInputUpdate}/>
                <button className={'updateBtn'} onClick={handleFirstPostTitleUpdate}>Update</button>

                {selectedPost && <PostDetails post={selectedPost}/>}
            </div>
        </div>
    );
}

export default Dashboard;