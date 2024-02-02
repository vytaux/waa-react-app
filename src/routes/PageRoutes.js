
import { Routes, Route } from "react-router-dom";
import React, {useState} from 'react';
import {Navigate} from "react-router-dom";
import Posts from "../components/Posts";
import PostDetails from "../components/PostDetails";
import AddPost from "../components/AddPost";
import Login from "../components/Login";
import Missing from "../components/Missing";
import RequireAuth from "../components/RequireAuth";

export default function PageRoutes({ isAuthenticated, setIsAuthenticated }) {

    const [refreshPosts, setRefreshPosts] = useState(false);

    return (
        <Routes>
            <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />

            <Route element={<RequireAuth isAuthenticated={isAuthenticated} />}>
                <Route path="/" element={<Navigate replace to="/posts" />} />
                <Route path="posts" element={<Posts refreshPosts={refreshPosts} setRefreshPosts={setRefreshPosts} />}>
                    <Route path=":id" element={<PostDetails setRefreshPosts={setRefreshPosts} />} />
                </Route>
                <Route path="create-post" element={<AddPost setRefreshPosts={setRefreshPosts} />} />
            </Route>

            <Route path="*" element={<Missing />} />
        </Routes>
    )
}