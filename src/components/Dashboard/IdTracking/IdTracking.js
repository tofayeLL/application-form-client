import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const IdTracking = () => {

    const axiosPublic = useAxiosPublic();
    const [query, setQuery] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const history = useHistory();


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




    const handleUpdate = (result) => {
        ///* for send id use like this */
        // history.push(`/dashboard/admin/editApplicant/${id}`);

        /* for pass result object then use like this */
        history.push({
            pathname: `/dashboard/admin/editApplicant/${result._id}`, // assuming result._id is the unique ID
            state: { applicantData: result } // Pass result as state
        });

    };


    return (
        <section>

            <div className="min-h-screen  max-w-full text-start ">
                <form
                    onSubmit={handleSearch}
                    className="bg-white shadow-lg rounded-lg p-6 w-full  border-[1px] border-gray-300"
                >
                    <h1 className="text-xl font-semibold text-gray-800 mb-6">Applicant ID Tracking</h1>

                    <p className="mb-3 text-base font-normal">Search by Applicant ID or Phone Number:</p>
                    <div className="flex justify-start items-center mb-2">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-2/3 p-2  border-[1px] border-[#206b50] rounded-md mb-2"
                            placeholder="Enter Application ID or Phone Number"
                            required
                        />
                    </div>

                    {/* Search Button */}
                    <div className="flex justify-start pb-2">
                        <button
                            type="submit"
                            className="bg-[#278a66] text-white px-4 py-2 rounded-md shadow hover:bg-[#23684f] focus:outline-none focus:ring-2 focus:ring-[#206b50]"
                        >
                            Search
                        </button>
                    </div>
                    {error && <p className="text-red-500 mt-4">{error}</p>}






                    {/* show result in a table after get applicant */}
                    {result && (
                        <div className="bg-gray-50 p-4 mt-8 rounded-md shadow border-[1px] border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-medium text-gray-700">Search Result:</h2>
                                {/* update button */}
                                <button
                                    onClick={() => handleUpdate(result)}
                                    className="bg-[#36916f] text-white px-4 py-2 rounded-md hover:bg-[#236950]"
                                >
                                    Update
                                </button>
                            </div>
                            <table className="min-w-full table-auto border-collapse">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="p-2 text-left">Field</th>
                                        <th className="p-2 text-left">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 font-medium">Applicant Name</td>
                                        <td className="p-2">{result.applicantName}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 font-medium">Post Name</td>
                                        <td className="p-2">{result.postName}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 font-medium">Email</td>
                                        <td className="p-2">{result.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 font-medium">Phone Number</td>
                                        <td className="p-2">{result.cp_number}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 font-medium">Applicant ID</td>
                                        <td className="p-2">{result.app_id}</td>
                                    </tr>
                                    {/*  <tr>
                                        <td colSpan="2" className="p-2 text-center">
                                            <button
                                                onClick={() => handleUpdate(result._id)}  // Pass the _id to the update handler
                                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                            >
                                                Update
                                            </button>
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>

                        </div>
                    )}






                </form>
            </div>

        </section>
    );
};

export default IdTracking;