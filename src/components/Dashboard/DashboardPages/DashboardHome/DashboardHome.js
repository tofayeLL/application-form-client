import React from 'react';

const DashboardHome = () => {
    return (
        <section className='px-4'>
            <div className='border-blue-500 border-2 '>
                {/* Header Section */}
                <h1 className='bg-blue-500 text-gray-200 p-1 text-start text-lg font-semibold'>
                    Merchant Real-Time Portal (MRP) Dashboard
                </h1>

                <div className='p-4 text-start '>
                    <p className='bg-yellow-100 p-4 rounded-md text-sm'><span className='font-semibold'>Active Login:</span> ANZA Admin</p>
                </div>



                {/* Card Container */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  p-4'>
                    {/* Card 1 */}
                    <div className='bg-white shadow-md rounded-lg p-3 border border-gray-200'>
                        <h2 className='text-lg font-semibold text-gray-700'>Total Application</h2>
                        <p className='text-2xl font-bold text-blue-500 mt-2'>1139</p>

                    </div>

                    {/* Card 2 */}
                    <div className='bg-white shadow-md rounded-lg p-3 border border-gray-200'>
                        <h2 className='text-lg font-semibold text-gray-700'>Application (paid)</h2>
                        <p className='text-2xl font-bold text-green-500 mt-2'>9998</p>

                    </div>

                    {/* Card 3 */}
                    <div className='bg-white shadow-md rounded-lg p-3 border border-gray-200'>
                        <h2 className='text-lg font-semibold text-gray-700'>Admit Print</h2>
                        <p className='text-2xl font-bold text-purple-500 mt-2'>9654(904)</p>

                    </div>

                    {/* Card 4 */}
                    <div className='bg-white shadow-md rounded-lg p-3 border border-gray-200'>
                        <h2 className='text-lg font-semibold text-gray-700'>Total Amount</h2>
                        <p className='text-2xl font-bold text-red-500 mt-2'>4979000</p>

                    </div>
                </div>

            </div>




            {/* table */}
            <div class="container mx-auto mt-14">
                <table class="table-auto border-collapse border border-gray-400 w-full text-center">
                    {/* row 1 */}
                    <tr class="border text-start font-semibold text-lg">
                        <td class="border border-gray-400 px-4 py-2" colspan="3">1st Row - 1 Column</td>
                    </tr>

                    {/* row 2 */}
                    <tr class="border text-start font-medium">
                        <td class="border border-gray-400 px-4 py-2 w-1/2">2nd Row - 1st Column (Bigger)</td>
                        <td class="border border-gray-400 px-4 py-2 w-1/4">2nd Row - 2nd Column</td>
                        <td class="border border-gray-400 px-4 py-2 w-1/4">2nd Row - 3rd Column</td>
                    </tr>

                    {/* row 3 */}
                    <tr class="border text-start font-medium">
                        <td class="border border-gray-400 px-4 py-2 w-1/2">3rd Row - 1st Column (Bigger)</td>
                        <td class="border border-gray-400 px-4 py-2 w-1/4">3rd Row - 2nd Column</td>
                        <td class="border border-gray-400 px-4 py-2 w-1/4">3rd Row - 3rd Column</td>
                    </tr>

                    {/* 4th */}
                    <tr class="border text-start font-medium">

                        <td class="border border-gray-400 px-4 py-2" colspan="2">4th Row - 1st Column (Colspan 2)</td>

                        <td class="border border-gray-400 px-4 py-2">4th Row - </td>
                    </tr>
                    {/* row 5 */}
                    <tr class="border text-start font-medium">
                        <td class="border border-gray-400 px-4 py-2" colSpan={2}>5th Row - 1st Column</td>

                        <td class="border border-gray-400 px-4 py-2 w-1/4">5th Row - 2nd Column</td>
                    </tr>
                </table>
            </div>




        </section>
    );
};

export default DashboardHome;
