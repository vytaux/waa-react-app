import React, { useRef, useState } from 'react';
import './Login.css';
// import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import FetchService from "../service/FetchService";
// import { authActions } from '../../store/index';


const Login = ({ setIsAuthenticated }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const formData = useRef();

    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await FetchService.authenticate(
                formData.current['user'].value,
                formData.current['password'].value
            );
            
            const accessToken = res.data.accessToken;
            Cookies.set('user', accessToken);
            setIsAuthenticated(true);

            navigate(from, { replace: true });

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            // errRef.current.focus();
        }


    };

    return (
        <main className="auth">
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                <form ref={formData} onSubmit={loginHandler}>
                    <div >
                        <label htmlFor='user'>User</label>
                        <input type='text' id='user' />
                    </div>
                    <div >
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
                    </div>
                    <button>Login</button>
                </form>
            </section>
        </main>
    );
};

export default Login;