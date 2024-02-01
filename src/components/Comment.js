import React from 'react';

const Comment = React.memo(({ comment }) => {

    console.log('Comment rendered ' + comment.id);

    return (
        <div className={'comment'}>{comment.name}</div>
    );
});

export default Comment;