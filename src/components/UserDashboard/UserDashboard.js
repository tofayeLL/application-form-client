import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider/UserProvider";
import "./UserDashboard.css"; // Import custom CSS file
import useIndividualUserData from "../../hooks/useIndividualUserData";

const UserDashboard = () => {
    const { userEmail } = useContext(UserContext); // Retrieve userEmail from context
    /* const [userData, setUserData] = useState(null); */ // Store fetched user data
   /*  const axiosPublic = useAxiosPublic();  */// Axios instance for API calls

   /*  useEffect(() => {
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
    }, [axiosPublic, userEmail]); */ // Re-run effect if userEmail changes

    const { userData } = useIndividualUserData();

    const {_id, userEmail: email, number, password} = userData || {};

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h2 className="dashboard-title">User Dashboard</h2>
                <p className="welcome-text">Welcome, {userEmail}</p>

                {userData ? (
                    <div className="user-details">
                        {/* <h3 className="details-title">User Details</h3> */}
                        <div className="detail">
                            <span className="label">User ID:</span>
                            <span className="value">{_id}</span>
                        </div>
                        <div className="detail">
                            <span className="label">Email:</span>
                            <span className="value">{email}</span>
                        </div>
                        <div className="detail">
                            <span className="label">Number:</span>
                            <span className="value">{number}</span>
                        </div>
                        <div className="detail">
                            <span className="label">Password:</span>
                            <span className="value">{password}</span>
                        </div>
                    </div>
                ) : (
                    <p className="loading-text">Loading user data...</p>
                )}
            </div>
        </div>
    );
};

export default UserDashboard;
