import React from 'react';

const PaymentStatus = () => {
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
    return (
        <div className='w-[58%] mx-auto'>
            <h4>Payment Status Page is not available</h4>
            <span>Input 1</span><input type="checkbox" id="1" name="chk" value="input1" onClick={myfun} onChange={e => console.log(e.target.value)} />
            <span>Input 2</span><input type="checkbox" id="2" name="chk" value="input2" onClick={myfun} onChange={e => console.log(e.target.value)} />
            <span>Input 3</span><input type="checkbox" id="3" name="chk" value="input2" onClick={myfun} onChange={e => console.log(e.target.value)} />
            {/* <span>Input 4</span><input type="checkbox" id="4" name="chk" onClick={myfun} />
            <span>Input 5</span><input type="checkbox" id="5" name="chk" onClick={myfun} /> */}
            {/* <span>Input 6</span><input type="checkbox" id="6" name="chk" onClick={myfun} /> */}


            
        </div>
    );
};

export default PaymentStatus;