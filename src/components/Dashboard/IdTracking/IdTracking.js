import React from 'react';

const IdTracking = () => {



    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const applicantId = form.applicantId.value;
        console.log(applicantId)

    };


    return (
        <section>

            <div className="min-h-screen bg-gray-100  ">
                <form
                    onSubmit={handleSearch}
                    className="bg-white shadow-lg rounded-lg p-6 w-full max-w-full border-[1px] border-gray-300"
                >
                    <h1 className="text-xl text-start font-semibold text-gray-800 mb-6">Applicant ID Tracking</h1>

                    <p className="mb-3 text-start text-base font-normal">Search any applicant ID:</p>
                    <div className="flex justify-start items-center mb-4">
                        <input
                            type="text"
                            id="applicantId"
                            name="applicantId"
                            className="w-2/3 p-2 border-[1px] border-[#206b50] rounded-md"
                            placeholder="Enter Application ID"
                            required
                        />
                    </div>

                    {/* Search Button */}
                    <div className="flex justify-start">
                        <button
                            type="submit"
                            className="bg-[#206b50] text-white px-4 py-2 rounded-md shadow hover:bg-[#1d4e3c] focus:outline-none focus:ring-2 focus:ring-[#206b50]"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default IdTracking;