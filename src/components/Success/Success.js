import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-hot-toast';

const Success = () => {
    const history = useHistory();


    useEffect(() => {
        // Show toast message when the component is mounted
        toast.success("Payment successfully");
    }, []);


    return (
        <div className="">
            <h2 className="text-green-600 text-xl font-bold">Payment Successful</h2>
            <button
                onClick={() => history.push("/")} // Use history.push instead of navigate("/")
                className="mt-4 px-4 py-2 bg-[#088658] text-white rounded-lg shadow hover:bg-[#025c3b]"
            >
                Go Home
            </button>
        </div>
    );
};

export default Success;