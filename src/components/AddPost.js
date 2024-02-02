import React, {useRef} from "react";
import FetchService from "../service/FetchService";

function AddPost({ setRefreshPosts }) {

    const titleInputRef = useRef();
    const authorInputRef = useRef();
    const contentInputRef = useRef();

    const createPost = () => {
        FetchService.addPost(
            titleInputRef.current.value,
            authorInputRef.current.value,
            contentInputRef.current.value
        ).then(response => setRefreshPosts(true));
    }

    return (
        <div>
            <h1>Add Post</h1>
            <div>Title <input type="text" ref={titleInputRef}/></div>
            <div>Author <input type="text" ref={authorInputRef}/></div>
            <div>Content <input type="text" ref={contentInputRef}/></div>
            <button onClick={createPost}>Add</button>
        </div>
    );
}

export default AddPost;