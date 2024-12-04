import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";

const imgbbAPIKey = process.env.REACT_APP_IMAGE_HOSTING_API_KEY; // Replace with your ImageBB API key
const imgbbURL = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;

const Login2 = () => {
    const axiosPublic = useAxiosPublic();
    const [images, setImages] = useState({ image1: null, image2: null });
    const [previews, setPreviews] = useState({ image1: null, image2: null }); // To store preview URLs

    const loginStyle = {
        backgroundColor: '#ddd',
        padding: '20px 60px',
        borderBottom: '5px solid #025c3b',
    };
    const fieldStyle2 = {
        padding: '8px',
        margin: '10px',
        borderRadius: '10px',
        border: '2px solid #025c3b',
        width: 'calc(100% - 60%)',
        boxSizing: 'border-box',
        backgroundColor: '#f0f8ff',
    };
    const fieldStyle = {
        padding: '8px',
        margin: '10px',
        borderRadius: '10px',
        border: '2px solid #025c3b',
    };


    // Function to check image size
    const validateImageSize = (imageFile, requiredWidth, requiredHeight) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    if (img.width !== requiredWidth || img.height !== requiredHeight) {
                        reject(`Image size must be ${requiredWidth}x${requiredHeight}`);
                    } else {
                        resolve();
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(imageFile);
        });
    };





    // Handle image change
    const handleImageChange = async (e) => {
        const { name, files } = e.target;
        const file = files[0];
        if (file) {
            // Image size validation for image1 (300x300)
            if (name === 'image1') {
                try {
                    await validateImageSize(file, 300, 300);
                    // Update the images state if validation passes
                    setImages((prevImages) => ({
                        ...prevImages,
                        [name]: file,
                    }));

                    // Generate a preview URL
                    const reader = new FileReader();
                    reader.onload = () => {
                        setPreviews((prevPreviews) => ({
                            ...prevPreviews,
                            [name]: reader.result,
                        }));
                    };
                    reader.readAsDataURL(file);
                } catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: error,
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                }
            }
            // Image size validation for image2 (300x80)
            else if (name === 'image2') {
                try {
                    await validateImageSize(file, 300, 80);
                    // Update the images state if validation passes
                    setImages((prevImages) => ({
                        ...prevImages,
                        [name]: file,
                    }));

                    // Generate a preview URL
                    const reader = new FileReader();
                    reader.onload = () => {
                        setPreviews((prevPreviews) => ({
                            ...prevPreviews,
                            [name]: reader.result,
                        }));
                    };
                    reader.readAsDataURL(file);
                } catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: error,
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                }
            }
        }
    };

    // Handle form submission
    const handleLogin2 = async (e) => {
        e.preventDefault();

        const form = e.target;
        const userEmail = form.userEmail.value;
        const password = form.password.value;
        const number = form.number.value;

        // Validation to check both images
        if (!images.image1 || !images.image2) {
            Swal.fire({
                title: 'Error!',
                text: 'Please upload both images.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }

        try {
            // Helper function to upload a single image
            const uploadImage = async (imageFile) => {
                const formData = new FormData();
                formData.append('image', imageFile);

                const res = await axiosPublic.post(imgbbURL, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });

                if (!res.data.success) {
                    throw new Error('Image upload failed');
                }

                return res.data.data.display_url;
            };

            // Upload both images
            const [image1Url, image2Url] = await Promise.all([
                uploadImage(images.image1),
                uploadImage(images.image2),
            ]);

            // Construct user information
            const userInfo = {
                userEmail,
                password,
                number,
                images: { image1: image1Url, image2: image2Url },
            };

            // Send user data to your backend
            const res = await axiosPublic.post('/userInfo', userInfo);

            if (res.data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                }).then(() => {
                    form.reset();
                    setImages({ image1: null, image2: null }); // Reset images
                    setPreviews({ image1: null, image2: null }); // Reset previews
                });
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
                <input
                    style={fieldStyle2}
                    type="email"
                    name="userEmail"
                    placeholder="Enter your email"
                />{' '}
                <br />
                <input
                    style={fieldStyle2}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                />{' '}
                <br />
                <input
                    style={fieldStyle2}
                    type="number"
                    name="number"
                    placeholder="Enter your number"
                />{' '}
                <br />
                <input
                    style={fieldStyle2}
                    type="file"
                    name="image1"
                    id="image1"
                    onChange={handleImageChange}
                    accept="image/*"
                    required
                />{' '}
                <br />
                {previews.image1 && (
                    <img
                        src={previews.image1}
                        alt="Preview 1"
                        style={{ width: '100px', marginTop: '10px' }}
                    />
                )}
                <br />
                <input
                    style={fieldStyle2}
                    type="file"
                    name="image2"
                    id="image2"
                    onChange={handleImageChange}
                    accept="image/*"
                    required
                />{' '}
                <br />
                {previews.image2 && (
                    <img
                        src={previews.image2}
                        alt="Preview 2"
                        style={{ width: '100px', marginTop: '10px' }}
                    />
                )}
                <br />
                <input style={fieldStyle} type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login2;
