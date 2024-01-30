import React from 'react';

function Post({ post, selectedPost, setSelectedPost }) {

    const selected = selectedPost === post ? ' selected' : '';

    return (
        <div className={'post' + selected} onClick={() => setSelectedPost(post)}>
            <div>Id: {post.id}</div>
            <div>Title: {post.title}</div>
            <div>Author: {post.author}</div>
        </div>
    );
}

export default Post;