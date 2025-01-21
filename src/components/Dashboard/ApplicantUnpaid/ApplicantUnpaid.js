import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const ApplicantUnpaid = () => {

    const axiosPublic = useAxiosPublic();
    const [applicantsData, setApplicantsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosPublic.get("/unpaid");
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


    console.log("allapplicants data those are Unpaid", applicantsData);




    return (
        <div>
            <h1>I am from All applicant unpaid page {applicantsData.length}</h1>
            <section>
                <div className="overflow-x-auto border border-gray-300 rounded-lg bg-white shadow-md">
                    <table className="table-auto w-full text-sm text-gray-600 border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <td colSpan="6" className="px-6 py-2 text-lg text-left font-semibold text-gray-800 border border-gray-300">
                                    All Unpaid Applicant 
                                </td>
                            </tr>
                        </thead>

                        <thead>
                            <tr className=" text-gray-800 text-left">
                                <th className="px-6 py-3 text-center border border-gray-300">SL</th>
                                <th className="px-6 py-3 text-center border border-gray-300">Applicant Id</th>
                                <th className="px-6 py-3 text-center border border-gray-300">Name</th>
                                <th className="px-6 py-3 text-center border border-gray-300">Fathers Name</th>
                                <th className="px-6 py-3 text-center border border-gray-300">Mobile</th>
                                <th className="px-6 py-3 text-right border border-gray-300">P.status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {applicantsData.map((item, index) => (
                                <tr key={item._id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 font-medium text-gray-800 border border-gray-300">{index + 1}</td>
                                    <td className="px-6 py-4 border border-gray-300">{item?.app_id}</td> {/* Display date */}
                                    <td className="px-6 py-4 text-center border border-gray-300">{item?.applicantName || 'N/A'}</td> {/* Display date count */}
                                    <td className="px-6 py-4 text-center border border-gray-300">{item?.fname}</td>
                                    <td className="px-6 py-4 text-center border border-gray-300">{item?.cp_number || "N/A"}</td>
                                    <td className="px-6 py-4 text-right border border-gray-300">{item?.status || "unpaid"}</td>
                                </tr>
                            ))}
                        </tbody>

                        <tfoot>
                            <tr className="bg-gray-200">
                                <td colSpan="3" className="px-6 py-2 text-left font-semibold text-gray-800 border border-gray-300 text-lg"></td>
                                <td colSpan="1" className="px-6 py-4 text-center font-semibold text-gray-800 border border-gray-300">

                                </td>
                                <td colSpan="1" className="px-6 py-4 text-center font-semibold text-gray-800 border border-gray-300">

                                </td>
                                <td colSpan="1" className="px-6 py-4 text-right font-semibold text-gray-800 border border-gray-300">

                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </section>

        </div>
    );
};

export default ApplicantUnpaid;