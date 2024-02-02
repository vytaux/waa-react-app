import React from 'react';
import {Link} from "react-router-dom";

function Post({ post, selectedPostId, setSelectedPostId }) {

    const selected = selectedPostId === post.id ? ' selected' : '';

    return (
        <Link to={`/posts/${post.id}`} className={'post' + selected} onClick={() => setSelectedPostId(post.id)}>
            <div>Id: {post.id}</div>
            <div>Title: {post.title}</div>
            <div>Author: {post.author}</div>
        </Link>
    );
}

export default Post;