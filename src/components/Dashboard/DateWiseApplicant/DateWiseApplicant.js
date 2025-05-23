import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import * as XLSX from 'xlsx';


const DateWiseApplicant = () => {
    const axiosPublic = useAxiosPublic();
    const [applicantsData, setApplicantsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosPublic.get("/dateWiseApplicants");
                setApplicantsData(res.data); // This will be the aggregated data from the backend
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [axiosPublic]);




    const downloadExcel = () => {
        // Format data for Excel
        const data = applicantsData.map((item, index) => ({
            SL: index + 1,
            Date: item._id,
            Total: item.dateCount || 'N/A',
            TotalPaid: 'Total paid', // Replace with actual data if available
            Amount: 'Amount', // Replace with actual data if available
        }));

        // Create a worksheet and workbook
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Applicants");

        // Trigger download
        XLSX.writeFile(workbook, "DateWiseApplicants.xlsx");
    };






    if (loading) return <div className="flex flex-col justify-center min-h-screen items-center spinner-container ">
        <div className="spinner">
            {/* loading spinner */}
        </div>
    </div>

    if (error) return <p>Error: {error}</p>;
    console.log(applicantsData)


    // Calculate total dateCount
    const totalDateCount = applicantsData.reduce((total, item) => total + item.dateCount, 0);

    return (
        <section className="px-6 bg-gray-50 min-h-screen">
            {/* <h1 className="text-2xl font-semibold mb-6 text-gray-800">Date-wise Applicant Summary</h1> */}

            <div className="flex justify-between items-center mb-4">
              {/*   <h1 className="text-2xl font-semibold text-gray-800">Date-wise Applicant Summary</h1> */}
                <button
                    onClick={downloadExcel}
                    className="px-4 py-2 bg-[#088658] text-white rounded-lg shadow hover:bg-[#025c3b]"
                >
                    Download Excel Data
                </button>
            </div>



            <div className="overflow-x-auto border border-gray-300 rounded-lg bg-white shadow-md">
                <table className="table-auto w-full text-sm text-gray-600 border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <td colSpan="5" className="px-6 py-2 text-lg text-left font-semibold text-gray-800 border border-gray-300">
                                Date Wise Applicant Summary
                            </td>
                        </tr>
                    </thead>

                    <thead>
                        <tr className=" text-gray-800 text-left">
                            <th className="px-6 py-3 text-center border border-gray-300">SL</th>
                            <th className="px-6 py-3 text-center border border-gray-300">Date</th>
                            <th className="px-6 py-3 text-center border border-gray-300">Total</th>
                            <th className="px-6 py-3 text-center border border-gray-300">Total (Paid)</th>
                            <th className="px-6 py-3 text-right border border-gray-300">Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {applicantsData.map((item, index) => (
                            <tr key={item._id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <td className="px-6 py-4 font-medium text-gray-800 border border-gray-300">{index + 1}</td>
                                <td className="px-6 py-4 border border-gray-300">{item._id}</td> {/* Display date */}
                                <td className="px-6 py-4 text-center border border-gray-300">{item.dateCount || 'N/A'}</td> {/* Display date count */}
                                <td className="px-6 py-4 text-center border border-gray-300">Total paid</td>
                                <td className="px-6 py-4 text-right border border-gray-300">Amount</td>
                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <tr className="bg-gray-200">
                            <td colSpan="2" className="px-6 py-2 text-left font-semibold text-gray-800 border border-gray-300 text-lg">Total</td>
                            <td colSpan="1" className="px-6 py-4 text-center font-semibold text-gray-800 border border-gray-300">
                                {totalDateCount}
                            </td>
                            <td colSpan="1" className="px-6 py-4 text-center font-semibold text-gray-800 border border-gray-300">
                                7896
                            </td>
                            <td colSpan="1" className="px-6 py-4 text-right font-semibold text-gray-800 border border-gray-300">
                                6876
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    );
};

export default DateWiseApplicant;
