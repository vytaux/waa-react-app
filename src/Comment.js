import React from 'react';

function Comment({ comment }) {
    return (
        <div className={'comment'}>{comment.name}</div>
    );
}

export default Comment;