import React from "react";

import {Link, useNavigate} from 'react-router-dom';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {

    const navigate = useNavigate();

    const logoutHandler = () => {
        setIsAuthenticated(false);
        navigate('/login');
    }

    return (
        <header className='header'>
            <nav className='w-full flex'>
                <h1 className='title'>React Auth Demo</h1>
                {isAuthenticated ?
                    <ul className='w-full'>
                        <li><Link to="/posts"> Posts</Link></li>
                        <li><Link to="/create-post"> Add Post</Link></li>
                        <li className='login-link' onClick={logoutHandler}>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
                    : null}
            </nav>
        </header>
    );
}


export default Header;