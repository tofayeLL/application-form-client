import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { GoEye, GoEyeClosed } from 'react-icons/go';
import { AdminContext } from '../../contexts/AdminProvider/AdminProvider';

const AdminLogin = () => {

    const axiosPublic = useAxiosPublic();
    const history = useHistory();
    const [passwordVisible, setPasswordVisible] = useState(false);
    // State to toggle password visibility
    const { setAdminEmail } = useContext(AdminContext);

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
        const adminEmail = form.adminEmail.value;
        const password = form.password.value;
        const adminInfo = { adminEmail, password };
        // console.log(adminInfo);

        try {
            const res = await axiosPublic.post('/adminLogin', adminInfo);
            console.log(res.data)

            if (res.data.success) {
                setAdminEmail(adminEmail);
                Swal.fire({
                    title: 'Success!',
                    text: res.data.message,
                    icon: 'success',
                    confirmButtonText: 'Cool',
                }).then(() => {

                    history.push('/dashboard/admin');

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
            <h2 style={{ color: '#025c3b' }}>Admin Login</h2>
            <form onSubmit={handleLogin2}>
                <input style={fieldStyle} type="email" name='adminEmail' placeholder='Enter admin email' required /> <br />

                <div style={{
                    position: 'relative'
                }}>
                    <input
                        style={fieldStyle}
                        type={passwordVisible ? 'text' : 'password'}
                        name='password'
                        placeholder='Enter admin password'
                        required

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

                <input style={fieldStyle} type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default AdminLogin;