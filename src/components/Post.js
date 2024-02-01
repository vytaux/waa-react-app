import React from 'react';

function Post({ post, selectedPostId, setSelectedPostId }) {

    const selected = selectedPostId === post.id ? ' selected' : '';

    return (
        <div className={'post' + selected} onClick={() => setSelectedPostId(post.id)}>
            <div>Id: {post.id}</div>
            <div>Title: {post.title}</div>
            <div>Author: {post.author}</div>
        </div>
    );
}

export default Post;