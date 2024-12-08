import React from 'react';

const DashboardHome = () => {
    return (
        <section className='p-4'>
            <div className='border-blue-500 border-2 '>
                {/* Header Section */}
                <h1 className='bg-blue-400 text-white p-1 text-start'>
                    Merchant Real-Time Product
                </h1>

                <div className='p-4 text-start '>
                    <p className='bg-yellow-100 p-4 rounded-md'>Active Login: ANZA Admin</p>
                </div>

                {/* Card Container */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  p-4'>
                    {/* Card 1 */}
                    <div className='bg-white shadow-md rounded-lg p-3 border border-gray-200'>
                        <h2 className='text-lg font-semibold text-gray-700'>Total Application</h2>
                        <p className='text-2xl font-bold text-blue-500 mt-2'>₹120,000</p>
                       
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white shadow-md rounded-lg p-3 border border-gray-200'>
                        <h2 className='text-lg font-semibold text-gray-700'>Application (paid)</h2>
                        <p className='text-2xl font-bold text-green-500 mt-2'>85</p>
                       
                    </div>

                    {/* Card 3 */}
                    <div className='bg-white shadow-md rounded-lg p-3 border border-gray-200'>
                        <h2 className='text-lg font-semibold text-gray-700'>Admit Print</h2>
                        <p className='text-2xl font-bold text-purple-500 mt-2'>25</p>
                       
                    </div>

                    {/* Card 4 */}
                    <div className='bg-white shadow-md rounded-lg p-3 border border-gray-200'>
                        <h2 className='text-lg font-semibold text-gray-700'>Total Amount</h2>
                        <p className='text-2xl font-bold text-red-500 mt-2'>12</p>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardHome;
