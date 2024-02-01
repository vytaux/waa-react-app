import React from 'react';
import Post from './Post';

function Posts({ posts, selectedPost, setSelectedPost }) {

    return (
        <div className={'posts'}>
            {posts.map(post => (
                <Post key={post.id} post={post} selectedPost={selectedPost} setSelectedPost={setSelectedPost}/>
            ))}
        </div>
    );
}

export default Posts;