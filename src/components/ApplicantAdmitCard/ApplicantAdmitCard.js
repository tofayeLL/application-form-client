import React, { useState } from 'react';
import useIndividualUserData from '../../hooks/useIndividualUserData';
import useAxiosPublic from '../../hooks/useAxiosPublic';

import Barcode from 'react-barcode';

import govt_logo from '../../assets/images/govt_logo.png';

import html2pdf from 'html2pdf.js';
import "./ApplicantAdmitCard.css"

const ApplicantAdmitCard = () => {
    const { userData } = useIndividualUserData();

    const axiosPublic = useAxiosPublic();

    /* const [applicantData, setApplicantData] = useState(null);
    const [loading, setLoading] = useState(true); */

    // const [isPdfGenerated, setIsPdfGenerated] = useState(false);

    // Fetch applicant data when component mounts or on id change
    /*  useEffect(() => {
         const fetchApplicantData = async () => {
             try {
                 const response = await axiosPublic.get(`/singleApplicant/${id}`);
                 setApplicantData(response.data);
                 setLoading(false);
             } catch (error) {
                 console.error("Error fetching applicant data:", error);
                 setLoading(false);
             }
         };
 
         fetchApplicantData();
     }, [id, axiosPublic]); */




    const generatePDF = () => {
        const element = document.getElementById('admit-card');

        const opt = {
            margin: 0,  // Adjust margins to fit the content
            filename: 'admit_card.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 4, // Increase scale for better resolution
                logging: false,
                useCORS: true,
                width: element.scrollWidth,
                height: element.scrollHeight,
                x: 0,
                y: 0,
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait',
                compress: true,
                pageSize: 'A4',
                maxWidth: 210,  // Max width of A4
                maxHeight: 297, // Max height of A4
                auto: true, // Ensures content scales to fit the page
            },
        };

        // Trigger the PDF download
        // Generate the PDF and then call updateDownloadCount
        html2pdf().set(opt).from(element).save()
            .then(() => {
                // After PDF saved successfully, increment global download count
                axiosPublic.post('/downloadAdmitCard/incrementCount')
                    .then(() => {
                        console.log("Global download count incremented successfully");
                    })
                    .catch((err) => {
                        console.error("Failed to increment download count:", err);
                    });
            })
            .catch((err) => {
                console.error("PDF generation failed:", err);
            });

        // setIsPdfGenerated(true);
    };






    /*   if (loading) return <div className="flex flex-col justify-center min-h-screen items-center spinner-container "><div className="spinner"></div></div>;
  
      if (!applicantData) {
          return <div className="text-center text-red-500 py-10">Applicant data not available</div>;
      } */


    const placeholderData = {
        applicantName: "Applicant Name",
        roll: "123456789",
        postName: "Staff Nurse",
        email: "example@example.com",
        cp_number: "01700000000",
        app_id: "AB12345",
        date: "2024-12-25",
        imageUrl: "https://via.placeholder.com/150",
    };

    const data = userData || placeholderData;


    return (


        <section className="min-h-screen flex flex-col justify-center items-center  pb-4 " >

            {/* !isPdfGenerated && */ (
                <div className='py-4 '>
                    <button
                        className="px-4 py-2 font-bold text-[#088658] bg-white rounded-lg shadow hover:bg-[#cbf3e4] "
                        onClick={generatePDF}
                    >
                        Download Admit Card
                    </button>
                </div>
            )}



            {/* container */}

            <div className=''>


                {/* container */}
                <div className="bg-white shadow-lg w-[800px] mx-auto border-[1px] border-gray-100" id="admit-card">
                    {/* content container */}
                    <div className='border-[2px] border-black p-4' >
                        <div className='flex justify-end'>
                            <div className="flex justify-center mb-4 gap-10">
                                {/* Header Section */}
                                <div className="text-center mt-2">
                                    <div className="flex flex-col justify-center items-center">
                                        <img src={govt_logo} alt="Logo" className='w-28 h-28' />
                                    </div>
                                    <h2 className="text-xl font-bold mt-4">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h2>
                                    <h3 className="text-xl font-semibold">নার্সিং ও মিডওয়াইফারি অধিদপ্তর</h3>
                                    <p className="font-semibold">মহাখালী, ঢাকা</p>
                                    <p>
                                        <a
                                            href="http://www.dgnm.gov.bd"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cursor-pointer font-semibold"
                                        >
                                            www.dgnm.gov.bd
                                        </a>
                                    </p>
                                </div>

                                {/* Applicant Image Section and barcode */}
                                <div className="w-1/3 text-center mt-28">
                                    <img
                                        src={data?.images?.image1}
                                        alt="Applicant"
                                        className="w-32 h-32 rounded-md mx-auto border-[1px] border-gray-400 "
                                    />
                                    <div className="mx-auto w-full flex flex-col justify-center items-center">
                                        <Barcode
                                            value={data?.app_id}
                                            format="CODE128"
                                            width={2}
                                            height={20}
                                            displayValue={false}
                                            background="#ffffff"
                                            lineColor="#000000"
                                        />
                                        <p className="text-sm ">Date: {data.date.slice(0, 10)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content table */}
                        <h1 className='font-bold text-lg text-center'>ADMISSION TEST FOR BSC IN POST BASIC NURSING</h1>
                        <p className='text-2xl font-semibold pt-1  pb-3 text-center'>প্রবেশ পত্র (Admit Card)</p>

                        {/* Right Section: Applicant Info Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border border-black text-sm bg-white text-left">

                                <tbody className='font-semibold text-base '>
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

                        <p className='text-xl font-bold  pt-2'>পরীক্ষার তারিখ ও সময়: ২৪মে ২০২৪, সকাল ১০.০০-১১:০০ ঘটিকা পর্যন্ত</p>

                        {/* Rules and Regulations */}
                        <h3 className="text-lg font-semibold mb-2 text-center underline mt-2 mr-32">পরীক্ষার্থীদের জন্য আবশ্যকীয় শর্তাবলী এবং নির্দেশাবলী:</h3>
                        <div className="mt-3 mb-2 flex flex-col justify-center items-center">
                            <ul className="list-disc pl-6 text-sm  space-y-2 text-start">
                                <li>পরীক্ষার্থীদের উত্তরপত্র পূরণের জন্য কালোকালির বলপয়েন্ট কলম ব্যবহার করতে হবে।</li>
                                <li>পরীক্ষার্থীদের অবশ্যই পরীক্ষা কেন্দ্রের সকল নিয়ম মেনে চলতে হবে।</li>
                                <li>পরীক্ষার হলে মোবাইল ফোন, ক্যালকুলেটর, ঘড়ি এবং কোন ধরণের ইলেকট্রনিক্স ডিভাইস আনা যাবে না।</li>
                                <li>পরীক্ষা শুরু হবার কমপক্ষে ৩০ মিনিট আগে পরীক্ষা কেন্দ্রে উপস্থিত হতে হবে।</li>
                                <li>পরীক্ষা শুরু হবার পরে কোন পরীক্ষার্থীকে হলে বা কক্ষে প্রবেশ করতে দেয়া হবে না।</li>
                                <li>পরীক্ষা শেষ না হওয়া পর্যন্ত কোন পরীক্ষার্থী হল বা কক্ষ ত্যাগ করতে পারবে না।</li>
                                <li>উত্তরপত্র কাঁটা ছেড়া, ঘষামাজা ও ভাঁজ করা যাবে না।</li>
                                <li>পরীক্ষা শেষে পরীক্ষার্থীগণ প্রশ্নপত্র ও উত্তরপত্র একসঙ্গে জমা দিবেন।</li>
                                <li>পরীক্ষায় কোন প্রকার অসদ উপায় অবলম্বন করলে পরীক্ষা বাতিল বলে গণ্য হবে।</li>
                            </ul>
                        </div>

                        {/* Signature Section */}
                        <div className="flex justify-between items-end  px-6">
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    src={data?.images?.image2 || "https://via.placeholder.com/150"}
                                    alt="Applicant's Signature"
                                    className="w-64 h-24 object-contain"
                                />
                                <p className="text-base font-medium ">(Signature of Applicant)</p>
                                <p className="font-semibold">Print Date: {data?.date.slice(0, 10)}</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    src={data?.images?.image2 || "https://via.placeholder.com/150"}
                                    alt="Chairman's Signature"
                                    className="w-64 h-24 object-contain"
                                />
                                <p className="text-base font-medium ">
                                    মহাপরিচালক <br />
                                    নার্সিং ও মিডওয়াইফারি অধিদপ্তর
                                </p>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
        </section>










    );
};

export default ApplicantAdmitCard;