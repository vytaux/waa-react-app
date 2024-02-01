import React, {useState} from 'react';
import axios from "axios";
import Comment from "./Comment";
import { useQuery } from 'react-query';

function PostDetails({ post, handleDelete }) {

    const [postDetails, setPostDetails] = useState([]);

    const fetchPost = (id) => {
        axios.get(`http://localhost:8080/api/v1/posts/${id}`)
            .then(response => setPostDetails(response.data))
            .catch(error => console.log(error.message));
    };

    useQuery(
        ['post', post],
        () => fetchPost(post.id),
        { enabled: Boolean(post.id) }
    );

    const handlePostDelete = (postId) => {
        axios.delete('http://localhost:8080/api/v1/posts/' + postId)
            .then(() => handleDelete(postId))
            .catch(error => console.log(error.message));
    }

    return (
        <div className={'postDetails'}>
            <div className={'buttons'}>
                <a href="#">edit</a>
                <a href="#" onClick={() => handlePostDelete(postDetails.id)}>delete</a>
            </div>
            <h2 className={'title'}>{postDetails.title}</h2>
            <div className={'author'}>{postDetails.author}</div>
            <p>{postDetails.content}</p>
            <h3>Comments</h3>
            <div className={'comments'}>
            {postDetails.comments && postDetails.comments.map(comment => (
                <Comment key={comment.id} comment={comment}/>
            ))}
            </div>
        </div>
    );
}

export default PostDetails;