import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserProvider/UserProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const UserDashboard = () => {
    const { userEmail } = useContext(UserContext); // Retrieve userEmail from context
    const [userData, setUserData] = useState(null); // Store fetched user data
    const axiosPublic = useAxiosPublic(); // Axios instance for API calls

    useEffect(() => {
        // Fetch user data when the component mounts
        const fetchUserData = async () => {
            if (userEmail) { // Ensure userEmail is available
                try {
                    const res = await axiosPublic.get(`/user/${userEmail}`);
                    setUserData(res.data); // Store user data in state
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        };

        fetchUserData();
    }, [axiosPublic, userEmail]);// Re-run effect if userEmail changes

    console.log(userData);

    return (
        <div>
            <h2>User Dashboard</h2>
            <p>Welcome, {userEmail}</p>

        </div>
    );
};

export default UserDashboard;
