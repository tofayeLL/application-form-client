import React from 'react';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ViewProfile = () => {
    const { id } = useParams();
    const location = useLocation();
    const applicantData = location?.state?.applicantData;
    console.log("from view profile page", id, applicantData);

    if (!applicantData) {
        return <div className="text-center text-red-500 py-10">Applicant data not available</div>;
    }

    return (
        <section className="container mx-auto px-6 py-10">
            <h1 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
                Applicant Full Profile
            </h1>



            {/* Profile Section */}
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">

                {/* Profile Image Section */}
                <div className="flex flex-col items-center mb-8">
                    {applicantData.images?.image1 ? (
                        <img
                            src={applicantData?.images?.image1}
                            alt="Profile"
                            className="w-32 h-32 rounded-full shadow-lg object-cover"
                        />
                    ) : (
                        <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg">
                            No Image
                        </div>
                    )}
                    <h2 className="text-2xl font-bold text-gray-800 mt-4">{applicantData.applicantName}</h2>
                    <p className="text-gray-500">{applicantData.postName}</p>
                </div>


                {/* Basic Information */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Basic Information</h2>
                    <table className="table-auto w-full text-left text-gray-700">
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 font-medium">Applicant Name:</td>
                                <td className="py-2 px-4">{applicantData?.applicantName || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium">Post Name:</td>
                                <td className="py-2 px-4">{applicantData?.postName || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium">Gender:</td>
                                <td className="py-2 px-4">{applicantData?.gender || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium">Date of Birth:</td>
                                <td className="py-2 px-4">
                                    {`${applicantData?.b_day || "N/A"} ${applicantData?.b_month || "N/A"
                                        } ${applicantData?.b_year || "N/A"}`}
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium">Religion:</td>
                                <td className="py-2 px-4">{applicantData?.religion || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium">NID:</td>
                                <td className="py-2 px-4">{applicantData?.NID || "N/A"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-300 pt-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Contact Information</h2>
                    <table className="table-auto w-full text-left text-gray-700">
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 font-medium">Phone Number:</td>
                                <td className="py-2 px-4">{applicantData?.p_number || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 font-medium">Email Address:</td>
                                <td className="py-2 px-4">{applicantData?.email || "N/A"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Address Information */}
                <div className="border-t border-gray-300 pt-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Address Information</h2>
                    <h3 className="text-lg font-semibold text-gray-700">Permanent Address:</h3>
                    <p className="text-gray-700 mb-4">
                        {`${applicantData?.P_CareOf}, ${applicantData?.P_Village}, ${applicantData?.P_Upzilla}, ${applicantData?.P_District}, Postal Code: ${applicantData?.P_PCode}`}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-700">Mailing Address:</h3>
                    <p className="text-gray-700">
                        {`${applicantData?.M_CareOf}, ${applicantData?.M_Village}, ${applicantData?.M_Upzilla}, ${applicantData?.M_District}, Postal Code: ${applicantData?.M_PCode}`}
                    </p>
                </div>

                {/* Educational Details */}
                <div className="border-t border-gray-300 pt-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Educational Information</h2>
                    <table className="table-auto w-full text-left text-gray-700">
                        <thead>
                            <tr>
                                <th className="py-2 px-4">Exam</th>
                                <th className="py-2 px-4">Board/University</th>
                                <th className="py-2 px-4">Roll</th>
                                <th className="py-2 px-4">Result</th>
                                <th className="py-2 px-4">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4">SSC</td>
                                <td className="py-2 px-4">{applicantData?.board1}</td>
                                <td className="py-2 px-4">{applicantData?.roll1}</td>
                                <td className="py-2 px-4">{applicantData?.result1}</td>
                                <td className="py-2 px-4">{applicantData?.year1}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">HSC</td>
                                <td className="py-2 px-4">{applicantData?.hsc_board}</td>
                                <td className="py-2 px-4">{applicantData?.hsc_roll}</td>
                                <td className="py-2 px-4">{applicantData?.hsc_result}</td>
                                <td className="py-2 px-4">{applicantData?.hsc_pass}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">BSC</td>
                                <td className="py-2 px-4">{applicantData?.university}</td>
                                <td className="py-2 px-4">N/A</td>
                                <td className="py-2 px-4">{applicantData?.exam3_result}</td>
                                <td className="py-2 px-4">{applicantData?.exam3_passyr}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ViewProfile;