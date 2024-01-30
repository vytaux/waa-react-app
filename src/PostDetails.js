import React from 'react';

function PostDetails({ post }) {

    return (
        <div className={'postDetails'}>
            <h2 className={'title'}>{post.title}</h2>
            <div className={'author'}>{post.author}</div>
            <p>Some content 😏</p>
            <div className={'buttons'}>
                <a href="#">edit</a>
                <a href="#">delete</a>
            </div>
        </div>
    );
}

export default PostDetails;