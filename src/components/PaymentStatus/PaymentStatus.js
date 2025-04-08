import React, { useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useIndividualUserData from '../../hooks/useIndividualUserData';

const PaymentStatus = () => {
    const { userData } = useIndividualUserData();
    const { app_id } = userData || {};
    const axiosPublic = useAxiosPublic();

    const [amount, setAmount] = useState('');

    const handleClick = async () => {
        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            alert("Please enter a valid amount");
            return;
        }

        console.log("Bkash Payment Button Clicked");

        try {
            const data = await axiosPublic.post('/bkash/payment/create', {
                amount: Number(amount),
                orderId: 1,
                applicantId: app_id,
            }, {
                withCredentials: true
            });

            window.location.href = data.data.bkashURL;
        } catch (error) {
            console.log(error?.response?.data);
        }
    };

    /* function myfun() {
        let a = document.getElementById('1');
        let b = document.getElementById('2');
        let c = document.getElementById('3');

        a.disabled = false;
        b.disabled = false;
        c.disabled = false;

        if (a.checked && b.checked) {
            c.disabled = true;
        }
        if (b.checked && c.checked) {
            a.disabled = true;
        }
        if (c.checked && a.checked) {
            b.disabled = true;
        }
    } */

    return (
        <section>
            <div className='w-[58%] mx-auto'>
                <h4 className="text-lg font-semibold mb-4">Payment Status Page</h4>

                <div className="mb-6">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                        Enter Payment Amount (BDT)
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#088658]"
                        placeholder="Enter amount"
                    />
                </div>

                {/*  <div className="space-x-4 mb-10">
                    <span>Input 1</span>
                    <input type="checkbox" id="1" name="chk" value="input1" onClick={myfun} />
                    <span>Input 2</span>
                    <input type="checkbox" id="2" name="chk" value="input2" onClick={myfun} />
                    <span>Input 3</span>
                    <input type="checkbox" id="3" name="chk" value="input3" onClick={myfun} />
                </div> */}

                <button
                    onClick={handleClick}
                    className="px-4 py-2 bg-[#088658] text-white rounded-lg shadow hover:bg-[#025c3b] transition"
                >
                    Bkash Pay
                </button>
            </div>
        </section>
    );
};

export default PaymentStatus;
