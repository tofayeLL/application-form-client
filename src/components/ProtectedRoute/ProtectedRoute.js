import React, { useContext, useEffect, useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { UserContext } from '../../contexts/UserProvider/UserProvider';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


const ProtectedRoute = ({ children, ...rest }) => {
    const { userEmail } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUserStatus = async () => {
            // Simulate an API call or authentication check
            // You can replace this logic with your actual authentication check
            setTimeout(() => {
                setLoading(false);  // Set loading to false after the check is done
            }, 1000);  // Simulating a 1-second delay for the authentication check
        };

        checkUserStatus();
    }, []);


    if (loading) {
        return (
            <div className="flex flex-col justify-center min-h-screen items-center">
                <CirclesWithBar
                    height="200"
                    width="300"
                    color="#4f4d5d"
                    outerCircleColor="#4f4d5d"
                    innerCircleColor="#4f4d5d"
                    barColor="#f88207"
                    ariaLabel="circles-with-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }

    // If the user is authenticated, render the children
    if (userEmail) {
        return children;
    }


    // If not authenticated, redirect to login page
    return (
        <Redirect
            to={{
                pathname: '/login3',
                state: { from: rest.location },
            }}
        />
    );
};

export default ProtectedRoute;