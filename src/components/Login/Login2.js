import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";


const Login2 = () => {
    const axiosPublic = useAxiosPublic();
    const history = useHistory();
    const [image, setImage] = useState(null);

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

    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        color: '#025c3b',
        fontWeight: 'bold',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#025c3b',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

    }
    console.log("from local folder get image",image);




    const handleLogin2 = async (e) => {
        e.preventDefault();

        const form = e.target;
        const userEmail = form.userEmail.value;
        const password = form.password.value;
        const number = form.number.value;

        if (!image) {
            Swal.fire({
                title: 'Error!',
                text: 'Please upload an image.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }












        const userInfo = { userEmail, password, number };




        try {
            const res = await axiosPublic.post('/userInfo', userInfo);

            if (res.data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                })
                    .then(() => {
                        // Redirect to userDashboard after success
                        history.push('/userDashboard');
                    });
                form.reset();
            } else if (res.data.message) {
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
                <input style={fieldStyle} type="file" name="image" id="image" onChange={handleImageChange} accept="image/*" required />
                <br />
                <input style={fieldStyle} type="submit" value="Submit" />
                {/* <button type='submit'>Login</button> */}
            </form>


        </div>
    );
};

export default Login2;