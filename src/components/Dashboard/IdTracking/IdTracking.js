import React from 'react';

const IdTracking = () => {

    const handleSearch = () => {
        const applicantId = document.getElementById('applicant-id').value;
        alert(`Searching for Applicant ID: ${applicantId}`);
        // Add your search logic here
    };


    return (
        <section className="">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-full  border-[1px] border-gray-300 ">
                <h1 className="text-xl text-start font-semibold text-gray-800 mb-6">Applicant ID Tracking</h1>
          
                <div className="flex justify-start items-center mb-4">
                  
                    <input
                        type="text"
                        id="applicant-id"
                        className="w-2/3 p-2 border-[1px] border-[#206b50] rounded-md focus:outline-none "
                        placeholder="Enter Application ID"
                    />
                </div>
                {/* Search Button */}
                <div className="flex justify-start">
                    <button
                        className="bg-[#206b50] text-white px-4 py-2 rounded-md shadow hover:bg-[#1d4e3c] focus:outline-none focus:ring-2 focus:ring-[#206b50]"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
};

export default IdTracking;