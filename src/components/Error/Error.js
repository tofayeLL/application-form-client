import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {  toast } from 'react-hot-toast';

const Error = () => {
    const history = useHistory();
    const searchData = new URLSearchParams(window.location.search)
    const message = searchData.get('message');

    useEffect(() => {
        // Display an error toast when the component mounts
        toast.error(`Payment failed: ${message || "Unknown error"}`);
    }, [message]); 
 
    return (
        <div className="">
            <h2 className="text-red-600 text-xl font-bold">Payment Failed</h2>
            <p className="text-gray-700">Reason: {message || "Unknown error"}</p>
            <button
                onClick={() => history.push("/")} // Use history.push instead of navigate("/")
                className="mt-4 px-4 py-2 bg-[#088658] text-white rounded-lg shadow hover:bg-[#025c3b]"
            >
                Go Home
            </button>
        </div>
    );
};

export default Error;