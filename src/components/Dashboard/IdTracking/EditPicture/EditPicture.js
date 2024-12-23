import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const EditPicture = () => {

    const { id } = useParams();
    console.log("from edit picture ", id)
    const axiosPublic = useAxiosPublic();



    const [applicantData, setApplicantData] = useState(null);

    const imgbbAPIKey = process.env.REACT_APP_IMAGE_HOSTING_API_KEY; // Replace with your ImageBB API key
    const imgbbURL = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    // console.log(imgbbAPIKey);
    // console.log(imgbbURL);


    const [images, setImages] = useState({ image1: null, image2: null });
    const [previews, setPreviews] = useState({ image1: null, image2: null });


    // Fetch applicant data when component mounts or on id change
    useEffect(() => {
        const fetchApplicantData = async () => {
            try {
                // Replace with the correct API endpoint
                const response = await axiosPublic.get(`/singleApplicant/${id}`);
                setApplicantData(response.data);  // Set fetched data
            } catch (error) {
                console.error("Error fetching applicant data:", error);
            }
        };

        fetchApplicantData();
    }, [id, axiosPublic]); // Re-fetch data when id changes

    if (!applicantData) {
        return <div className="text-center text-red-500 py-10">Applicant data not available</div>;
    }

    console.log("from edit picture page ", applicantData)




    // Handle image change
    const handleImageChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];
        if (file) {
            // Update the images state
            setImages((prevImages) => ({
                ...prevImages,
                [name]: file,
            }));

            // Generate a preview URL
            const reader = new FileReader();
            reader.onload = () => {
                setPreviews((prevPreviews) => ({
                    ...prevPreviews,
                    [name]: reader.result, // Update the preview URL
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    console.log("get up images", images);






    const handleUpdateUser = async (e) => {
        e.preventDefault();

        // Validation to check if at least one image is selected
        if (!images?.image1 && !images?.image2) {
            Swal.fire({
                title: 'Error!',
                text: 'Please upload at least one image.',
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

            // Variables to hold image URLs
            let image1Url = applicantData?.images.image1;
            let image2Url = applicantData?.images.image2;

            // Upload the selected images (if any)
            if (images.image1) {
                image1Url = await uploadImage(images.image1);
            }
            if (images.image2) {
                image2Url = await uploadImage(images.image2);
            }

           

            const updatedFields = {

                images: { image1: image1Url, image2: image2Url },
               
            };

            // Make PATCH request to update the applicant data
            const res = await axiosPublic.patch(`/updateApplicantImage/${applicantData?._id}`, updatedFields);

            if (res.data.message === 'Update successful') {

                // Update the applicant data in the state to reflect the new image links
                setApplicantData({
                    ...applicantData,
                    images: {
                        image1: image1Url,
                        image2: image2Url
                    }
                });


                Swal.fire({
                    title: 'Success!',
                    text: 'Your application image was successfully updated.',
                    icon: 'success',
                    confirmButtonText: 'OK',
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
            Swal.fire({
                title: 'Error!',
                text: 'An unexpected error occurred. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            console.error('Error:', error);
        }
    };







    return (


        <section className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Update Profile Picture and Signature
            </h2>
            <div class="flex flex-col items-center space-y-4 p-4">
                {/* <!-- CV Picture --> */}
                <div class="w-40 h-40 overflow-hidden rounded-md shadow-md">
                    <img
                        src={applicantData?.images?.image1}
                        alt="coming soon.."
                        class="w-full h-full object-contain"
                    />
                </div>

                {/* <!-- Signature Picture --> */}
                <div class="w-32 h-16 overflow-hidden border-t border-gray-400">
                    <img
                        src={applicantData?.images?.image2}
                        alt="signature coming soon.."
                        class="w-full h-full object-contain"
                    />
                </div>
            </div>
            <form onSubmit={handleUpdateUser} className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Profile Picture Upload */}
                    <div className="flex flex-col items-start border border-gray-300 p-4 rounded-lg">
                        <label className="text-lg font-medium text-gray-700 mb-2">
                            Upload Photo
                            <small className="text-red-500"> {/* *(300 x 300 Pixel JPG/PNG) */}</small>
                        </label>
                        <input
                            type="file"
                            name="image1"
                            id="image1"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="block w-full text-sm text-gray-500 
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-[#36916f] file:text-white
                   hover:file:bg-[#236950]"
                        />
                        {previews.image1 && (
                            <div className="mt-4 w-36 h-36 overflow-hidden border border-gray-300 rounded-full">
                                <img
                                    id="preview1"
                                    src={previews.image1}
                                    alt="Preview"
                                    className="w-full h-full object-cover "
                                />
                            </div>
                        )}
                    </div>

                    {/* Signature Upload */}
                    <div className="flex flex-col items-start border border-gray-300 p-4 rounded-lg">
                        <label className="text-lg font-medium text-gray-700 mb-2">
                            Upload Signature
                            <small className="text-red-500"> {/* *(120 x 80 Pixel JPG/PNG) */}</small>
                        </label>
                        <input
                            type="file"
                            name="image2"
                            id="image2"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="block w-full text-sm text-gray-500 
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-[#36916f] file:text-white
                   hover:file:bg-[#236950]"
                        />
                        {previews.image2 && (
                            <div className="mt-4 w-36 h-24 overflow-hidden border border-gray-300 rounded">
                                <img
                                    id="preview2"
                                    src={previews.image2}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button
                        type="submit"
                        className="bg-[#36916f] text-white px-4 py-2 rounded-md hover:bg-[#236950]"
                    >
                        Save Changes
                    </button>
                </div>
            </form>


        </section>


    );
};

export default EditPicture;