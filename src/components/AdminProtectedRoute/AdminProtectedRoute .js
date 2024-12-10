import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { AdminContext } from "../../contexts/AdminProvider/AdminProvider";
import { InfinitySpin } from "react-loader-spinner"; // Optional loader
import "../Spinner/LoadingSpinner.css"; // Include your spinner styling

const AdminProtectedRoute = ({ children, ...rest }) => {
    const { adminEmail } = useContext(AdminContext); // Retrieve admin email from AdminContext
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        const checkAdminStatus = async () => {
            // Simulate an authentication check, replace with actual logic if needed
            setTimeout(() => {
                setLoading(false); // Mark loading as complete
            }, 1000); // Simulate a 1-second delay
        };

        checkAdminStatus();
    }, []);

    // Show loading spinner during the authentication check
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <InfinitySpin width="200" color="#025c3b" />
            </div>
        );
    }

    // If admin is authenticated, render the children components
    if (adminEmail) {
        return children;
    }

    // Redirect to admin login if not authenticated
    return (
        <Redirect
            to={{
                pathname: "/login/admin", // Path to admin login page
                state: { from: rest.location }, // Optional: Store the current location for redirecting back
            }}
        />
    );
};

export default AdminProtectedRoute ;