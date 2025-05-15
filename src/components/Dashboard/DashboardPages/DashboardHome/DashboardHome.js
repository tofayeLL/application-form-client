import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import usePaidApplicantData from '../../../../hooks/usePaidApplicantData';
import useAdmitCount from '../../../../hooks/useAdmitCount';


const DashboardHome = () => {

    const axiosPublic = useAxiosPublic();
    const [applicantsData, setApplicantsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // all payments collection applicant
    const { paidUsers } = usePaidApplicantData();
    // console.log(paidUsers);


    // get all admit card download count
    const { admitCardCount } = useAdmitCount();
    console.log("admitcard count", admitCardCount);
    // Safely extract the download count from the first item
    const downloadCount = admitCardCount?.[0]?.downloadCount || 0;

    // Calculate total amount from paid users
    const totalPaidAmount = paidUsers?.reduce((sum, user) => sum + (user.amount || 0), 0);




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


    // all applicant in payment 



    if (error) return <p>Error: {error}</p>;


    // console.log("allapplicants data", applicantsData);






    return (
        <section className='px-4'>
            <div className='border-[#025c3b] border-2 '>
                {/* Header Section */}
                <h1 className='bg-[#206b50] text-gray-200 p-1 text-start text-lg font-semibold'>
                    Merchant Real-Time Portal (MRP) Dashboard
                </h1>

                <div className='p-4 text-start '>
                    <p className='bg-[#a8d5ba] p-4 rounded-md text-sm'><span className='font-semibold'>Active Login:</span> ANZA Admin</p>
                </div>



                {/* Card Container */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  p-4'>
                    {/* Card 1 */}
                    <div className='bg-white shadow-md rounded-lg p-3 border border-gray-200'>
                        <h2 className='text-lg font-semibold text-gray-700'>Total Application</h2>
                        <p className='text-2xl font-bold text-blue-500 mt-2'>{applicantsData?.length}</p>

                    </div>

                    {/* Card 2 */}
                    <div className='bg-white shadow-md rounded-lg p-3 border border-gray-200'>
                        <h2 className='text-lg font-semibold text-gray-700'>Application (paid)</h2>
                        <p className='text-2xl font-bold text-green-500 mt-2'>{paidUsers?.length}</p>

                    </div>

                    {/* Card 3 */}
                    <div className='bg-white shadow-md rounded-lg p-3 border border-gray-200'>
                        <h2 className='text-lg font-semibold text-gray-700'>Admit Print</h2>
                        <p className='text-2xl font-bold text-purple-500 mt-2'>{downloadCount?.toLocaleString()}</p>

                    </div>

                    {/* Card 4 */}
                    <div className='bg-white shadow-md rounded-lg p-3 border border-gray-200'>
                        <h2 className='text-lg font-semibold text-gray-700'>Total Amount</h2>
                        <p className='text-2xl font-bold text-red-500 mt-2'>{totalPaidAmount}</p>

                    </div>
                </div>

            </div>




            {/* table */}
            <div class="container mx-auto mt-14">
                <table class="table-auto border-collapse border border-gray-400 w-full text-center">
                    {/* row 1 */}
                    <tr class="border text-start font-semibold text-lg">
                        <td class="border border-gray-400 px-4 py-2" colspan="3">Payment Mode Wise Application Summery</td>
                    </tr>

                    {/* row 2 */}
                    <tr class="border text-start font-medium">
                        <td class="border border-gray-400 px-4 py-2 w-1/2">Payment Mode</td>
                        <td class="border border-gray-400 px-4 py-2 w-1/4">Total</td>
                        <td class="border border-gray-400 px-4 py-2 w-1/4">Amount</td>
                    </tr>

                    {/* row 3 */}
                    <tr class="border text-start font-medium">
                        <td class="border border-gray-400 px-4 py-2 w-1/2">BKash</td>
                        <td class="border border-gray-400 px-4 py-2 w-1/4">9958</td>
                        <td class="border border-gray-400 px-4 py-2 w-1/4">99957876</td>
                    </tr>

                    {/* 4th */}
                    <tr class="border text-start font-medium">

                        <td class="border border-gray-400 px-4 py-2" colspan="2">All PAid Applicant Data</td>

                        <td class="border border-gray-400 px-4 py-2"><button className='border-[1px] border-black rounded-md px-2 text-blue-700'>Download</button> </td>
                    </tr>
                    {/* row 5 */}
                    <tr class="border text-start font-medium">
                        <td class="border border-gray-400 px-4 py-2" colSpan={2}>All Choice Data</td>

                        <td class="border border-gray-400 px-4 py-2 w-1/4"> <button className='border-[1px] border-black rounded-md px-2 text-blue-700'>Download</button> </td>
                    </tr>
                </table>
            </div>




        </section>
    );
};

export default DashboardHome;
