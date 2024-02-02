import React, {useContext, useEffect, useState} from 'react';
import Posts from '../../components/Posts';
import PostDetails from '../../components/PostDetails';
import axios from "axios";
import AddPost from "../../components/AddPost";
import Header from "../Header/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import PageRoutes from "../../routes/PageRoutes";

function Dashboard() {

    console.log('Dashboard rendered');

    // const [refreshPosts, setRefreshPosts] = useState(false);
    // const [postsState, setPostsState] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    //
    // const fetchData = () => {
    //     axios.get('http://localhost:8080/api/v1/posts')
    //         .then(response => {
    //             setPostsState(response.data);
    //             setRefreshPosts(false);
    //         })
    //         .catch(error => console.log(error.message));
    // };
    // useEffect(() => fetchData(), [refreshPosts]);
    //
    // const handleDelete = () => setRefreshPosts(true);

    return (
        <React.Fragment>
            <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <main className='main'>
                <PageRoutes isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            </main>
        </React.Fragment>
    );
}

export default Dashboard;