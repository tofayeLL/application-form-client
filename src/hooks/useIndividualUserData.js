import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { UserContext } from "../contexts/UserProvider/UserProvider";


const useIndividualUserData = () => {
    const {userEmail} = useContext(UserContext);

    const [userData, setUserData] = useState(null); // To store user data
    const [loading, setLoading] = useState(true);  // To manage loading state
    const [error, setError] = useState(null);      // To handle errors
    const axiosPublic = useAxiosPublic();          // Axios instance

    useEffect(() => {
        if (!userEmail) return; // Exit if no email is provided

        const fetchUserData = async () => {
            setLoading(true);
            try {
                const res = await axiosPublic.get(`/user/${userEmail}`);
                setUserData(res.data);
                setError(null); // Clear previous errors
            } catch (err) {
                console.error("Error fetching user data:", err.message);
                setError(err.message);
                setUserData(null); // Clear previous data on error
            } finally {
                setLoading(false); // Ensure loading is set to false
            }
        };

        fetchUserData();
    }, [userEmail, axiosPublic]);


    return { userData, loading, error };
};

export default useIndividualUserData;