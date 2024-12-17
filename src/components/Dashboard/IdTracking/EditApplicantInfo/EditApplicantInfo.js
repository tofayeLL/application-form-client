import React from 'react';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const EditApplicantInfo = () => {
    /* for get id then use like this
     const { id } = useParams();
     console.log(id); */

    const location = useLocation();
    const applicantData = location.state?.applicantData;
    // console.log(applicantData);



    const calculateAge = (year, month, day) => {
        if (!year || !month || !day) {
            return "Invalid date";
        }

        // Convert month name to numeric value
        const monthNames = {
            January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
            July: 7, August: 8, September: 9, October: 10, November: 11, December: 12
        };

        // Convert to numbers
        const monthNumeric = monthNames[month];

        // If month name is invalid
        if (!monthNumeric) {
            return "Invalid month name";
        }

        const today = new Date();
        const birthDate = new Date(year, monthNumeric - 1, day); // Month is 0-indexed

        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Get the number of days in the previous month
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12; // Add 12 months if months go negative
        }

        return {
            years: ageYears,
            months: ageMonths,
            days: ageDays
        };
    };




    return (
        <section className='border border-gray-300 rounded' >
            <h1>I am from editApplicant info</h1>

            {/* container applicant info header */}
            <div className='container px-14'>
                {/* Table 1 */}

                {
                    applicantData && <div className="overflow-auto p-4  ">
                        <table className="table-auto border-collapse border border-gray-300 shadow-lg w-full  ">
                            {/* <!-- Table Header --> */}
                            <thead className="">
                                <tr>
                                    <th class="border  border-gray-300 px-6 py-2  text-left space-y-4" colspan="2">

                                        {/* button 1 */}
                                        <button className="block w-40 py-1  font-normal text-white text-center bg-red-500 rounded-md hover:bg-[#42a581] transition-colors ">
                                            View Full Profile
                                        </button>
                                        {/* button 1 */}
                                        <button className="block w-40 py-1  font-normal text-white text-center bg-yellow-500 rounded-md hover:bg-[#42a581] transition-colors ">
                                            Edit Full Profile
                                        </button>
                                        {/* button 1 */}
                                        <button className="block w-40 py-1  font-normal text-white text-center bg-blue-500 rounded-md hover:bg-[#42a581] transition-colors ">
                                            Edit Picture
                                        </button>
                                        {/* button 1 */}
                                        <button className="block w-40 py-1  font-normal text-white text-center bg-green-500 rounded-md hover:bg-[#42a581] transition-colors ">
                                            Edit Signature
                                        </button>
                                        {/* button 1 */}
                                        <button className="block w-40 py-1  font-normal text-white text-center bg-orange-500 rounded-md hover:bg-[#42a581] transition-colors ">
                                            Admit Cart
                                        </button>


                                    </th>


                                    {/* right */}
                                    <th class="border border-gray-300 px-6 py-1 text-left text-gray-700" colspan="2">
                                        {/* <!-- Container for CV and Signature --> */}
                                        <div class="flex flex-col items-end space-y-4 p-4">
                                            {/* <!-- CV Picture --> */}
                                            <div class="w-40 h-40 overflow-hidden border-2 border-gray-300 rounded-md shadow-md">
                                                <img
                                                    src="https://i.ibb.co/25qTZyf/tofayel-png3.png"
                                                    alt="coming soon.."
                                                    class="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* <!-- Signature Picture --> */}
                                            <div class="w-32 h-16 overflow-hidden border-t border-gray-400">
                                                <img
                                                    src="https://i.ibb.co.com/KGXzMjJ/img.png"
                                                    alt="signature coming soon.."
                                                    class="w-full h-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    </th>


                                </tr>
                            </thead>

                            {/* <!-- Table Body --> */}
                            <tbody className='font-medium text-start '>
                                {/* <!-- Row 1 --> */}
                                <tr class="hover:bg-gray-100 "  >
                                    <td class="border border-gray-300 px-4 py-2" >Applicant Name</td>
                                    <td class="border border-gray-300 px-4 py-2" colspan="3">{applicantData?.applicantName}</td>


                                </tr>
                                {/* <!-- Repeat Rows --> */}
                                <tr class="hover:bg-gray-100">
                                    <td class="border border-gray-300 px-4 py-2">Applicant Id</td>
                                    <td class="border border-gray-300 px-4 py-2">{applicantData?.app_id}</td>

                                    <td class="border border-gray-300 px-4 py-2">Password</td>
                                    <td class="border border-gray-300 px-4 py-2">76796890708</td>
                                </tr>

                                <tr class="hover:bg-gray-100">
                                    <td class="border border-gray-300 px-4 py-2">Mobile Number</td>
                                    <td class="border border-gray-300 px-4 py-2">{applicantData?.cp_number}</td>

                                    <td class="border border-gray-300 px-4 py-2">Date of birth</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {applicantData?.b_year && applicantData?.b_month && applicantData?.b_day ? (
                                            <>
                                                {applicantData?.b_year}-{applicantData?.b_month}-{applicantData?.b_day}
                                                <br />
                                                Age:{" "}
                                                {(() => {
                                                    const { years, months, days } = calculateAge(
                                                        parseInt(applicantData?.b_year),
                                                        applicantData?.b_month,
                                                        parseInt(applicantData?.b_day)
                                                    );
                                                    return `${years} years, ${months} months, ${days} days`;
                                                })()}
                                            </>
                                        ) : (
                                            <span>Birthdate not available</span>
                                        )}
                                    </td>
                                </tr>

                                <tr class="hover:bg-gray-100">
                                    <td class="border border-gray-300 px-4 py-2">Job status</td>
                                    <td class="border border-gray-300 px-4 py-2">Private</td>

                                    <td class="border border-gray-300 px-4 py-2">BMRC Reg. N.</td>
                                    <td class="border border-gray-300 px-4 py-2">100043</td>
                                </tr>
                                <tr class="hover:bg-gray-100">
                                    <td class="border border-gray-300 px-4 py-2">payment status</td>
                                    <td class="border border-gray-300 px-4 py-2 flex items-center gap-2">Paid  <button className="block px-2 py-1 text-start bg-red-500 text-white font-normal rounded-md hover:bg-[#42a581]  transition-colors ">
                                        update payment
                                    </button></td>

                                    <td class="border border-gray-300 px-4 py-2">Application Date</td>
                                    <td class="border border-gray-300 px-4 py-2">{applicantData?.date.slice(0, 10)}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                }



                {/* Table 2 */}

                <div className='container px-4 mt-5'>
                    <table className="table-auto border-collapse border border-gray-300 shadow-lg w-full  ">

                        {/* <!-- Table Body --> */}
                        <tbody className='font-medium text-start '>
                            {/* <!-- Row 1 --> */}
                            <tr class="hover:bg-gray-100 "  >

                                <td class="border border-gray-300 px-4 py-2" colspan="4">Payment Summery</td>


                            </tr>
                            {/* <!-- Repeat Rows --> */}
                            <tr class="hover:bg-gray-100">
                                <td class="border border-gray-300 px-4 py-2">Payment Id</td>
                                <td class="border border-gray-300 px-4 py-2">jhkhgsDTYEHQ</td>

                                <td class="border border-gray-300 px-4 py-2">Trx ID</td>
                                <td class="border border-gray-300 px-4 py-2">BESFDHFJK (bekash) </td>
                            </tr>

                            <tr class="hover:bg-gray-100">
                                <td class="border border-gray-300 px-4 py-2">Amount</td>
                                <td class="border border-gray-300 px-4 py-2">500</td>

                                <td class="border border-gray-300 px-4 py-2">Payment Date</td>
                                <td class="border border-gray-300 px-4 py-2">2024-12-09T10:38:04.306Z
                                </td>
                            </tr>



                        </tbody>
                    </table>
                </div>



                {/* Table 3 */}

                <div className='container px-4 mt-8 mb-6'>
                    <table className="table-auto border-collapse border border-gray-300 shadow-lg w-full  ">

                        {/* <!-- Table Body --> */}
                        <tbody className='font-medium text-start '>
                            {/* <!-- Row 1 --> */}
                            <tr class="hover:bg-gray-100 "  >

                                <td class="border border-gray-300 px-4 py-2" colspan="4">Payment Attempt Summery</td>


                            </tr>
                            {/* <!-- Repeat Rows --> */}
                            <tr class="hover:bg-gray-100">
                                <td class="border border-gray-300 px-4 py-2">Payment Id</td>
                                <td class="border border-gray-300 px-4 py-2">Trx ID</td>

                                <td class="border border-gray-300 px-4 py-2">Amount</td>
                                <td class="border border-gray-300 px-4 py-2">Payment Date </td>
                            </tr>

                            <tr class="hover:bg-gray-100">
                                <td class="border border-gray-300 px-4 py-2">jgksGDKGsfkjSGF0987CCC</td>
                                <td class="border border-gray-300 px-4 py-2">DFDHGJKKKFHJHHK</td>

                                <td class="border border-gray-300 px-4 py-2">500</td>
                                <td class="border border-gray-300 px-4 py-2">2024-12-09T10:38:04.306Z
                                </td>
                            </tr>



                        </tbody>
                    </table>
                </div>







            </div>





        </section >
    );
};

export default EditApplicantInfo;