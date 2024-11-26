import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import Swal from "sweetalert2";

const Login = () => {
 
    const [loginData, setLoginData] = useState({});
    const { user, loginUser } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnblur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newObj = { ...loginData };
        newObj[field] = value;
        setLoginData(newObj);
    }
    const handleLogin =async(e) => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
        console.log(loginData);


      




        
    }
    const loginStyle = {
        backgroundColor: '#ddd',
        padding: '20px 60px',
        borderBottom: '5px solid #025c3b'
    };
    const fieldStyle = {
        padding: '8px',
        margin: '10px',
        borderRadius: '10px',
        border: '2px solid #025c3b'

    }
    return (
        <div style={loginStyle}>
            <h2 style={{ color: '#025c3b' }}>Login</h2>
            <form onSubmit={handleLogin}>
                <input onBlur={handleOnblur} style={fieldStyle} type="email" name='email' placeholder='Enter your email' /> <br />
                <input onBlur={handleOnblur} style={fieldStyle} type="password" name='password' placeholder='Enter your password' /> <br />
                <input style={fieldStyle} type="submit" value="Submit" />
                {/* <button type='submit'>Login</button> */}
            </form>

        </div>
    );
};

export default Login;