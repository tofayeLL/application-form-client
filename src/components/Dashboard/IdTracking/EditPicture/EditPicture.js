import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const EditPicture = () => {

    const { id } = useParams();
    console.log("from edit picture ", id)
    const axiosPublic = useAxiosPublic();



    const [applicantData, setApplicantData] = useState(null);

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


    return (
        <section>
            i am from edit picture page

        </section>
    );
};

export default EditPicture;