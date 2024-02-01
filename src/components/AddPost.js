import React, {useRef} from "react";
import axios from "axios";

function AddPost({ setRefreshPosts }) {

    const titleInputRef = useRef();
    const authorInputRef = useRef();
    const contentInputRef = useRef();

    const createPost = () => {
        axios.post('http://localhost:8080/api/v1/posts', {
            title: titleInputRef.current.value,
            author: authorInputRef.current.value,
            content: contentInputRef.current.value,
        })
            .then(response => setRefreshPosts(true))
            .catch(error => console.log(error.message))
        ;
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