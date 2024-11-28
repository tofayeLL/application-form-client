import { useHistory } from 'react-router-dom';

// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserProvider/UserProvider';

const Login3 = () => {
    const axiosPublic = useAxiosPublic();
    const history = useHistory();
    const {setUserEmail} = useContext(UserContext);

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
        const userEmail = form.userEmail.value;
        const password = form.password.value;
        const number = form.number.value;
        const userInfo = { userEmail, password, number };

        try {
            const res = await axiosPublic.post('/loginUser', userInfo);

            if (res.data.success) {
                setUserEmail(userEmail)
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

    return (
        <div style={loginStyle}>
            <h2 style={{ color: '#025c3b' }}>Login</h2>
            <form onSubmit={handleLogin2}>
                <input style={fieldStyle} type="email" name='userEmail' placeholder='Enter your email' /> <br />
                <input style={fieldStyle} type="password" name='password' placeholder='Enter your password' /> <br />
                <input style={fieldStyle} type="number" name='number' placeholder='Enter your number' /> <br />
                <input style={fieldStyle} type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login3;
