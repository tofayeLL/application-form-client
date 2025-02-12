import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const PaymentStatus = () => {

    const axiosPublic = useAxiosPublic();

    function myfun() {
        // let a = document.getElementsByName('chk');
        // let y = document.getElementById('zx');
        let a = document.getElementById('1');
        let b = document.getElementById('2');
        let c = document.getElementById('3');

        a.disabled = false;
        b.disabled = false;
        c.disabled = false;

        if (a.checked === true && b.checked === true) {
            // b.disabled = true;
            c.disabled = true;
        }
        if (b.checked === true && c.checked === true) {
            a.disabled = true;
            // c.disabled = true;
        }
        if (c.checked === true && a.checked === true) {
            b.disabled = true;
            // a.disabled = true;
        }
    }




    const handleClick = async () => {
        console.log("Bkash Payment Button Clicked"); // Debugging log
    
        try {
            const data = await axiosPublic.post('/bkash/payment/create', { amount: 100, orderId: 1 }, { withCredentials: true });
            // console.log("Response from server:", data);
            window.location.href = data.data.bkashURL;
        } catch (error) {
            console.log(error?.response?.data)
           
       

           
        }
    };


    return (
        <section>
            <div className='w-[58%] mx-auto'>
                <h4>Payment Status Page is not available</h4>
                <span>Input 1</span><input type="checkbox" id="1" name="chk" value="input1" onClick={myfun} onChange={e => console.log(e.target.value)} />
                <span>Input 2</span><input type="checkbox" id="2" name="chk" value="input2" onClick={myfun} onChange={e => console.log(e.target.value)} />
                <span>Input 3</span><input type="checkbox" id="3" name="chk" value="input2" onClick={myfun} onChange={e => console.log(e.target.value)} />
                {/* <span>Input 4</span><input type="checkbox" id="4" name="chk" onClick={myfun} />
            <span>Input 5</span><input type="checkbox" id="5" name="chk" onClick={myfun} /> */}
                {/* <span>Input 6</span><input type="checkbox" id="6" name="chk" onClick={myfun} /> */}



            </div>



            <div className='my-20'>
                <button onClick={handleClick} className="px-4 py-2 bg-[#088658] text-white rounded-lg shadow hover:bg-[#025c3b]">
                    Bkash Pay
                </button>
            </div>
        </section>
    );
};

export default PaymentStatus;