import React from 'react';
import Barcode from 'react-barcode';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import govt_logo from '../../../../assets/images/govt_logo.png'

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
                {/* container */}
                <div className="bg-white shadow-lg p-3 w-[800px] border-[1px] border-gray-100">


                    {/* content container */}
                    <div className='border-[2px] border-black p-6'>


                        {/* Parent container for both sections */}
                        <div className='flex justify-end'>


                            <div className="flex justify-center mb-6 gap-10 ">
                                {/* Header Section  logo and all the text*/}
                                <div className="text-center mt-10">
                                    <div className="flex flex-col justify-center items-center">
                                        <img src={govt_logo} alt="Logo" className='w-28 h-28' />

                                    </div>
                                    <h2 className="text-xl font-bold mt-4">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h2>
                                    <h3 className="text-xl font-semibold">নার্সিং ও মিডওয়াইফারি অধিদপ্তর</h3>
                                    <p className="font-semibold">মহাখালী, ঢাকা</p>
                                    <p className="">www.dgnm.gov.bd</p>
                                </div>

                                {/* Applicant Image Section and barcode */}
                                <div className="w-1/3 text-center mt-40 ">
                                    <img
                                        src={data?.images?.image1}
                                        alt="Applicant"
                                        className="w-32 h-32 rounded-md mx-auto border-[1px] border-gray-400 "
                                    />

                                    <div className="mx-auto w-full flex flex-col justify-center items-center  ">
                                        <Barcode
                                            value={data?.app_id} // app_id Number for the Barcode
                                            format="CODE128"
                                            width={2}
                                            height={20}
                                            displayValue={false}  // This hides the barcode value text below the barcode
                                            background="#ffffff"
                                            lineColor="#000000"
                                        />

                                        <p className="text-sm ">Date: {data.date.slice(0, 10)}</p>
                                    </div>
                                </div>
                            </div>



                        </div>




                        {/* Main Content table */}
                        <div className="">
                            <h1 className='font-bold text-lg'>ADMISSION TEST FOR BSC IN POST BASIC NURSING/ BSC IN POST BASIC PUBLIC HEALTH

                                NURSING - SESSION: 2024-2025</h1>
                            <p className='text-2xl font-semibold pt-7 pb-5'>প্রবেশ পত্র (Admit Card)</p>


                            {/* Right Section: Applicant Info Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full border border-black text-sm bg-white text-left">
                                    {/*   <thead>
                <tr className=" border-b">
                    <th className="p-2 font-medium border border-black">Field 1</th>
                    <th className="p-2 font-medium border border-black">Field 2</th>
                    <th className="p-2 font-medium border border-black">Field 3</th>
                    <th className="p-2 font-medium border border-black">Field 4</th>
                </tr>
            </thead> */}
                                    <tbody className='font-semibold text-base'>
                                        <tr className="border-b">
                                            <td className="px-2 py-1 border border-black" >Roll</td>
                                            <td className="px-2 py-1 border border-black">10037</td>
                                            <td className="px-2 py-1 border border-black">Applicant ID </td>
                                            <td className="px-2 py-1 border border-black">{data?.app_id}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-2 py-1 border border-black" colSpan="1" >Applicant Name</td>
                                            <td className="px-2 py-1 border border-black" colSpan="3">{data?.applicantName}</td>

                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-2 py-1 border border-black">Father’s Name</td>
                                            <td className="px-2 py-1 border border-black" colSpan="3">{data?.fname}</td>


                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-2 py-1 border border-black">Mother’s Name</td>
                                            <td className="px-2 py-1 border border-black" colSpan="3">{data?.mname}</td>


                                        </tr>
                                        <tr className="border-b">

                                            <td className="px-2 py-1 border border-black">Exam Centre</td>
                                            <td className="px-2 py-1 border border-black" colSpan="3">
                                                Government Titumir College, Mohakhali, Dhaka
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-2 py-1 border border-black">Course Name</td>
                                            <td className="px-2 py-1 border border-black" colSpan="3">
                                                BSC IN POST BASIC NURSING / BSC IN POST BASIC PUBLIC HEALTH NURSING
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <p className='text-xl font-bold pb-6 pt-6'>পরীক্ষার তারিখ ও সময়: ২৪মে ২০২৪, সকাল ১০.০০-১১:০০ ঘটিকা পর্যন্তর্য ।</p>


                        {/* Rules and Regulations */}
                        <h3 className="text-lg font-semibold mb-4 text-center underline pt-16 mr-24">পরীক্ষার্থীদের জন্য আবশ্যকীয় শর্তাবলী এবং নির্দেশাবলী:</h3>
                        <div className="mt-4 flex flex-col justify-center items-center">

                            <ul className="list-disc pl-6 text-sm  space-y-2 text-start">
                                <li>পরীক্ষার্থীদের উত্তরপত্র পূরণের জন্য কালোকালির বলপয়েন্ট কলম ব্যবহার করতে হবে।</li>
                                <li>পরীক্ষার্থীদের অবশ্যই পরীক্ষা কেন্দ্রের সকল নিয়ম মেনে চলতে হবে।</li>
                                <li>পরীক্ষার হলে মোবাইল ফোন, ক্যালকুলেটর, ঘড়ি এবং কোন ধরণের ইলেকট্রনিক্স ডিভাইস আনা যাবে না।</li>
                                <li>পরীক্ষা শুরু হবার কমপক্ষে ৩০ মিনিট আগে পরীক্ষা কেন্দ্রে উপস্থিত হতে হবে।</li>
                                <li>পরীক্ষা শুরু হবার পরে কোন পরীক্ষার্থীকে হলে বা কক্ষে প্রবেশ করতে দেয়া হবে না।</li>
                                <li>পরীক্ষা শেষ না হওয়া পর্যন্ত কোন পরীক্ষার্থী হল বা কক্ষ ত্যাগ করতে পারবে না।</li>
                                <li>উত্তরপত্র কাঁটা কাঁ ছেড়া, ঘষামাজা ও ভাঁজভাঁ করা যাবে না।</li>
                                <li>পরীক্ষা শেষে পরীক্ষার্থীগণ প্রশ্নপত্র ও উত্তরপত্র একসঙ্গে জমা দিবেন।</li>
                                <li>পরীক্ষায় কোন প্রকার অসদুপায় অবলম্বন করলে পরীক্ষা বাতিল বলে গণ্য হবে।</li>
                            </ul>
                        </div>



                        {/* Signature Section */}
                        <div className="flex justify-between items-center mt-10 px-6">
                            {/* Left: Applicant's Signature */}
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    src={data?.images?.image2 || "https://via.placeholder.com/150"} // Replace with applicant signature image URL
                                    alt="Applicant's Signature"
                                    className="w-64 h-28 object-contain"
                                />
                                <p className="text-base font-medium mt-2 mb-2">(Signature of Applicant)</p>
                                <p className="font-semibold">Print Date: {data?.date.slice(0, 10)}</p>
                            </div>

                            {/* Right: Chairman's Signature */}
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    src={data?.images?.image2 || "https://via.placeholder.com/150"} // Replace with chairman signature image URL
                                    alt="Chairman's Signature"
                                    className="w-64 h-28 object-contain"
                                />
                                <p className="text-base font-medium mt-2">
                                    মহাপরিচালক <br />
                                    নার্সিং ও মিডওয়াইফারি অধিদপ্তর
                                </p>
                            </div>
                        </div>





                    </div>


                </div>
            </section>

        </section>
    );
};

export default AdmitCard;
