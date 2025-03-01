import { useHistory } from 'react-router-dom';

// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserProvider/UserProvider';
import { GoEye, GoEyeClosed } from 'react-icons/go';

const Login3 = () => {
    const axiosPublic = useAxiosPublic();
    const history = useHistory();
    const { setUserEmail } = useContext(UserContext);
    const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

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
    };

    const handleLogin2 = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const cp_number = form.cp_number.value;
        const userInfo = { email, password, cp_number };

        try {
            const res = await axiosPublic.post('/loginUser', userInfo);

            if (res.data.success) {
                setUserEmail(email)
                Swal.fire({
                    title: 'Success!',
                    text: res.data.message,
                    icon: 'success',
                    confirmButtonText: 'Cool',
                }).then(() => {

                    history.push('/userDashboard');

                });
            } else {
                Swal.fire({
                    title: 'Warning!',
                    text: res.data.message,
                    icon: 'warning',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error('Error:', error.message);
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };



    // Toggle password visibility
    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div style={loginStyle} className='w-[58%] mx-auto'>
            <h2 style={{ color: '#025c3b' }}>Login</h2>
            <form onSubmit={handleLogin2}>
                <input style={fieldStyle} type="email" name='email' placeholder='Enter your email' /> <br />

                <div style={{
                    position: 'relative'
                }}>
                    <input
                        style={fieldStyle}
                        type={passwordVisible ? 'text' : 'password'}
                        name='password'
                        placeholder='Enter your password'

                    />
                    <span
                        onClick={togglePassword}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '10px',
                            transform: 'translate(-1170%,-45%)',
                            cursor: 'pointer',
                            fontSize: '20px',
                        }}
                    >
                        {passwordVisible ? <GoEye /> : <GoEyeClosed />}
                    </span>
                </div>


                <input style={fieldStyle} type="number" name='cp_number' placeholder='Enter your number' /> <br />
                <input style={fieldStyle} type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default Login3;
