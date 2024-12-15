import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const IdTracking = () => {

    const axiosPublic = useAxiosPublic();
    const [query, setQuery] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');


    const handleSearch = async (e) => {
        e.preventDefault();

        if (!query) {
            setError('Please enter an Applicant ID or Phone Number');
            return;
        }


        try {
            setError('');
            setResult(null);

            const response = await axiosPublic.get(`/search?q=${query}`);
            setResult(response.data);
        } catch (err) {
            if (err.response && err.response.status === 404) {
                setError('No applicant found');
            } else {
                setError('An error occurred while searching');
            }
        }
    };
    console.log("Search Query:", query, typeof query);


    return (
        <section>

            <div className="min-h-screen bg-gray-100 max-w-full text-start ">
                <form
                    onSubmit={handleSearch}
                    className="bg-white shadow-lg rounded-lg p-6 w-full  border-[1px] border-gray-300"
                >
                    <h1 className="text-xl font-semibold text-gray-800 mb-6">Applicant ID Tracking</h1>

                    <p className="mb-3 text-base font-normal">Search by Applicant ID or Phone Number:</p>
                    <div className="flex justify-start items-center mb-4">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-2/3 p-2  border-[1px] border-[#206b50] rounded-md mb-4"
                            placeholder="Enter Application ID or Phone Number"
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
                    {error && <p className="text-red-500 mt-4">{error}</p>}

                    {result && (
                        <div className="bg-gray-50 p-4 mt-4 rounded-md shadow">
                            <h2 className="text-lg font-medium text-gray-700 mb-2">Search Result:</h2>
                            <ul className="list-disc pl-5">
                                <li><strong>Applicant Name:</strong> {result.applicantName}</li>
                                <li><strong>Post Name:</strong> {result.postName}</li>
                                <li><strong>Email:</strong> {result.email}</li>
                                <li><strong>Phone Number:</strong> {result.cp_number}</li>
                                <li><strong>Applicant ID:</strong> {result.app_id}</li>
                            </ul>
                        </div>
                    )}
                </form>
            </div>

        </section>
    );
};

export default IdTracking;