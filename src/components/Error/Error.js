import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Error = () => {
    const history = useHistory();
    const searchData = new URLSearchParams(window.location.search)
    const message = searchData.get('message')

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