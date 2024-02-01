import React from 'react';
import Post from './Post';

function Posts({ posts, selectedPostId, setSelectedPostId }) {

    return (
        <div className={'posts'}>
            {posts.map(post => (
                <Post key={post.id} post={post} selectedPostId={selectedPostId} setSelectedPostId={setSelectedPostId}/>
            ))}
        </div>
    );
}

export default Posts;