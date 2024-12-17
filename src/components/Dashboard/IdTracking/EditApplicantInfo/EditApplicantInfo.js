import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const EditApplicantInfo = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <section >
            <h1>I am from editApplicant info{id}</h1>

            {/* container applicant info header */}
            <div className='container px-14'>


                {/* <!-- Table --> */}
                <div class="overflow-auto p-4  ">
                    <table class="table-auto border-collapse border border-gray-300 shadow-lg w-full  ">
                        {/* <!-- Table Header --> */}
                        <thead class="">
                            <tr>
                                <th class="border border-gray-300 px-6 py-2 text-left text-gray-700 space-y-3" colspan="2">

                                    {/* button 1 */}
                                    <button className="block px-6 py-1 text-start bg-red-500 text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors ">
                                        View Full Profile
                                    </button>
                                    {/* button 1 */}
                                    <button className="block px-6 py-1 text-start bg-red-500 text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors ">
                                        View profile
                                    </button>
                                    {/* button 1 */}
                                    <button className="block px-6 py-1 text-start bg-red-500 text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors ">
                                        View profile
                                    </button>
                                    {/* button 1 */}
                                    <button className="block px-6 py-1 text-start bg-red-500 text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors ">
                                        View profile
                                    </button>
                                    {/* button 1 */}
                                    <button className="block px-6 py-1 text-start bg-red-500 text-gray-900 rounded-md hover:bg-[#73dfb7]  transition-colors ">
                                        View profile
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
                        <tbody>
                            {/* <!-- Row 1 --> */}
                            <tr class="hover:bg-gray-100 "  >
                                <td class="border border-gray-300 px-4 py-2" >Row 1, Col 1</td>
                                <td class="border border-gray-300 px-4 py-2" colspan="3">Row 1, Col 2</td>
                               

                            </tr>
                            {/* <!-- Repeat Rows --> */}
                            <tr class="hover:bg-gray-100">
                                <td class="border border-gray-300 px-4 py-2">Row 2, Col 1</td>
                                <td class="border border-gray-300 px-4 py-2">Row 2, Col 2</td>
                                <td class="border border-gray-300 px-4 py-2">Row 2, Col 3</td>
                                <td class="border border-gray-300 px-4 py-2">Row 2, Col 4</td>
                            </tr>
                            <tr class="hover:bg-gray-100">
                                <td class="border border-gray-300 px-4 py-2">Row 3, Col 1</td>
                                <td class="border border-gray-300 px-4 py-2">Row 3, Col 2</td>
                                <td class="border border-gray-300 px-4 py-2">Row 3, Col 3</td>
                                <td class="border border-gray-300 px-4 py-2">Row 3, Col 4</td>
                            </tr>
                            <tr class="hover:bg-gray-100">
                                <td class="border border-gray-300 px-4 py-2">Row 4, Col 1</td>
                                <td class="border border-gray-300 px-4 py-2">Row 4, Col 2</td>
                                <td class="border border-gray-300 px-4 py-2">Row 4, Col 3</td>
                                <td class="border border-gray-300 px-4 py-2">Row 4, Col 4</td>
                            </tr>
                            <tr class="hover:bg-gray-100">
                                <td class="border border-gray-300 px-4 py-2">Row 5, Col 1</td>
                                <td class="border border-gray-300 px-4 py-2">Row 5, Col 2</td>
                                <td class="border border-gray-300 px-4 py-2">Row 5, Col 3</td>
                                <td class="border border-gray-300 px-4 py-2">Row 5, Col 4</td>
                            </tr>
                            <tr class="hover:bg-gray-100">
                                <td class="border border-gray-300 px-4 py-2">Row 6, Col 1</td>
                                <td class="border border-gray-300 px-4 py-2">Row 6, Col 2</td>
                                <td class="border border-gray-300 px-4 py-2">Row 6, Col 3</td>
                                <td class="border border-gray-300 px-4 py-2">Row 6, Col 4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </section >
    );
};

export default EditApplicantInfo;