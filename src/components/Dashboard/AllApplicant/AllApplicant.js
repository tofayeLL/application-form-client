import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const AllApplicant = () => {


    const axiosPublic = useAxiosPublic();
    const [applicantsData, setApplicantsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosPublic.get("/applicants");
                setApplicantsData(res.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [axiosPublic]);

    if (loading) return <div className="flex flex-col justify-center min-h-screen items-center spinner-container ">
        <div className="spinner">
            {/* loading spinner */}
        </div>
    </div>
    if (error) return <p>Error: {error}</p>;


    console.log("allapplicants data", applicantsData);

    return (
        <div>
            <h1>applicants data in database Total {applicantsData.length}</h1>

        </div>
    );
};

export default AllApplicant;