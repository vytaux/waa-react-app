import React, {useEffect, useState} from 'react';
import axios from "axios";
import Comment from "./Comment";
import { useQuery } from 'react-query';
import {useParams} from "react-router-dom";
import Cookies from "js-cookie";
import FetchService, {fetchService} from "../service/FetchService";

function PostDetails({ setRefreshPosts }) {

    const { id } = useParams();

    console.log('PostDetails rendered ' + id);

    const [postDetails, setPostDetails] = useState({});

    useEffect(() => {
        FetchService.getPostDetails(id)
            .then(data => setPostDetails(data));
    }, [id]);

    // TODO maybe later
    // useQuery(
    //     ['selectedPostId', selectedPostId],
    //     () => fetchPost(selectedPostId),
    //     { enabled: Boolean(selectedPostId) }
    // );

    const handlePostDelete = (postId) => {
        FetchService.deletePost(postId)
            .then(() => setRefreshPosts(true));
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