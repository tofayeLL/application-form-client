// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";


const imgbbAPIKey = process.env.REACT_APP_IMAGE_HOSTING_API_KEY; // Replace with your ImageBB API key
const imgbbURL = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;


// console.log(imgbbAPIKey);
// console.log(imgbbURL);


// console.log(process.env.REACT_APP_IMAGE_HOSTING_API_KEY);

const Login2 = () => {
    const axiosPublic = useAxiosPublic();
    // const history = useHistory();
    const [image, setImage] = useState(null);

    const loginStyle = {
        backgroundColor: '#ddd',
        padding: '20px 60px',
        borderBottom: '5px solid #025c3b'
    };
    const fieldStyle2 = {
        padding: '8px',
        margin: '10px',
        borderRadius: '10px',
        border: '2px solid #025c3b',
        width: 'calc(100% - 60%)', // Adjusted width for consistency
        boxSizing: 'border-box',
        backgroundColor: '#f0f8ff', // Ensures padding and border are included in width
    };
    const fieldStyle = {
        padding: '8px',
        margin: '10px',
        borderRadius: '10px',
        border: '2px solid #025c3b'
    };

   


    // handle image
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

    }

    // console.log("get image", image);




    // handle login
    const handleLogin2 = async (e) => {
        e.preventDefault();

        const form = e.target;
        const userEmail = form.userEmail.value;
        const password = form.password.value;
        const number = form.number.value;

        // validation if image not have get error
        if (!image) {
            Swal.fire({
                title: 'Error!',
                text: 'Please upload an image.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }


        // Upload image to ImageBB
        const formData = new FormData();
        formData.append('image', image);


        const res = await axiosPublic.post(imgbbURL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        // console.log("get image url",res.data);

        
        if (!res.data.success) {
            throw new Error('Image upload failed');
        }

        const imageUrl = res.data.data.display_url;
        // console.log(imageUrl);



        const userInfo = { userEmail, password, number, image: imageUrl };

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
                        // history.push('/userDashboard');
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
            <form  onSubmit={handleLogin2}>
                <input style={fieldStyle2} type="email" name='userEmail' placeholder='Enter your email' /> <br />
                <input style={fieldStyle2} type="password" name='password' placeholder='Enter your password' /> <br />
                <input style={fieldStyle2} type="number" name='number' placeholder='Enter your number' /> <br />
                <input style={fieldStyle2} type="file" name="image" id="image" onChange={handleImageChange} accept="image/*" required />  <br />
                <input style={fieldStyle2} type="file" name="image" id="image" onChange={handleImageChange} accept="image/*" required />  <br />
              
                <input  style={fieldStyle} type="submit" value="Submit" />
                {/* <button type='submit'>Login</button> */}
            </form>


        </div>
    );
};

export default Login2;