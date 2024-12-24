import React from 'react';
import Barcode from 'react-barcode';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const AdmitCard = () => {

    const { id } = useParams();
    const location = useLocation();
    const applicantData = location?.state?.applicantData;
    console.log("from Admit Card", id, applicantData);

    // Placeholder data if no applicant data is passed
    const placeholderData = {
        applicantName: "Applicant Name",
        roll: "123456789", // Example Roll Number
        postName: "Staff Nurse",
        email: "example@example.com",
        cp_number: "01700000000",
        app_id: "AB12345",
        date: "2024-12-25",
        imageUrl: "https://via.placeholder.com/150", // Placeholder Image
    };

    const data = applicantData || placeholderData;


    return (
        <section>
            <h1>Admit Card page</h1>

            <section className="min-h-screen flex justify-center items-center bg-gray-100 py-8">
            <div className="bg-white shadow-lg rounded-lg p-6 w-[800px] border-[1px] border-gray-300">
                {/* Header Section */}
                <div className="text-center mb-6">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Bangladesh_govt_logo.svg"
                        alt="Bangladesh Govt Logo"
                        className="h-24 mx-auto"
                    />
                    <h2 className="text-xl font-bold mt-4">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h2>
                    <h3 className="text-lg font-semibold">নার্সিং ও মিডওয়াইফারি অধিদপ্তর</h3>
                    <p className="text-gray-600">মহাখালী, ঢাকা</p>
                    <p className="text-gray-600">www.dgnm.gov.bd</p>
                </div>

                {/* Main Content */}
                <div className="flex mb-6">
                    {/* Left Section: Applicant Image and Barcode */}
                    <div className="w-1/3 text-center">
                        <img
                            src={data?.images?.image1}
                            alt="Applicant"
                            className="w-32 h-32 rounded-md mx-auto border-[1px] border-gray-400"
                        />
                    
                            <div className="mx-auto w-full flex flex-col justify-center items-center my-2 ">
                                <Barcode
                                    value={data?.app_id} // app_id Number for the Barcode
                                    format="CODE128"
                                    width={2.5}
                                    height={35}
                                    displayValue={false}  // This hides the barcode value text below the barcode
                                    background="#ffffff"
                                    lineColor="#000000"
                                />
                          
                            <p className="mt-2 text-sm text-gray-600">Date: {data.date.slice(0,10)}</p>
                        </div>
                    </div>

                    {/* Right Section: Applicant Info Table */}
                    <div className="w-2/3">
                        <table className="w-full border-collapse">
                            <tbody>
                                <tr>
                                    <td className="p-2 font-medium border border-gray-300">Applicant Name:</td>
                                    <td className="p-2 border border-gray-300">{data.applicantName}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium border border-gray-300">Roll:</td>
                                    <td className="p-2 border border-gray-300">{data.roll}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium border border-gray-300">Post Name:</td>
                                    <td className="p-2 border border-gray-300">{data.postName}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium border border-gray-300">Email:</td>
                                    <td className="p-2 border border-gray-300">{data.email}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium border border-gray-300">Phone Number:</td>
                                    <td className="p-2 border border-gray-300">{data.cp_number}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium border border-gray-300">Applicant ID:</td>
                                    <td className="p-2 border border-gray-300">{data.app_id}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Rules and Regulations */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">নিয়মাবলী:</h3>
                    <ul className="list-disc pl-6 text-sm text-gray-600 space-y-2">
                        <li>পরীক্ষার হলে অবশ্যই প্রবেশ পত্র সঙ্গে আনতে হবে।</li>
                        <li>পরীক্ষার সময় সঠিকভাবে উপস্থিত থাকুন।</li>
                        <li>মোবাইল ফোন, ইলেকট্রনিক ডিভাইস ব্যবহার নিষিদ্ধ।</li>
                        <li>পরীক্ষার হলে নিয়ম-শৃঙ্খলা বজায় রাখুন।</li>
                        <li>প্রয়োজনীয় উপকরণ (কলম, পেন্সিল, রাবার) সঙ্গে আনুন।</li>
                    </ul>
                </div>
            </div>
        </section>

        </section>
    );
};

export default AdmitCard;
