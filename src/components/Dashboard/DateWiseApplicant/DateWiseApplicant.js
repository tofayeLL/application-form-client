import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const DateWiseApplicant = () => {



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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    console.log("allapplicants data", applicantsData);







    return (
        <section className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Date-wise Applicant Summary</h1>

            <div className="overflow-x-auto border border-gray-300 rounded-lg bg-white shadow-md">
                <table className="table-auto w-full text-sm text-gray-600">
                    <thead>
                        <tr className="bg-gray-200 text-gray-800 text-left">
                            <th className="px-6 py-3 text-center">#</th>
                            <th className="px-6 py-3 text-center">Date</th>
                            <th className="px-6 py-3 text-center">Total</th>
                            <th className="px-6 py-3 text-center">Total (Paid)</th>
                            <th className="px-6 py-3 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applicantsData.map((item, index) => (
                            <tr
                                key={item._id}
                                className={`border-b last:border-0 hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    }`}
                            >
                                <td className="px-6 py-4 font-medium text-gray-800">{index + 1}</td>
                                <td className="px-6 py-4">{item?.date || '-'}</td>
                                <td className="px-6 py-4 text-center">Total</td>
                                <td className="px-6 py-4 text-center">Total paid</td>
                                <td className="px-6 py-4 text-right">Amount</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default DateWiseApplicant;