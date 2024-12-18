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


    console.log(userEmail);

    const { userData } = useIndividualUserData();
    console.log(userData);

    const { app_id, _id, email, cp_number, password, images, applicantName, NID } = userData || {};

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
                {/* Profile Section */}
                <div className="profile-section ">
                    {images ? (
                        <div class="flex flex-col items-center space-y-4 p-4">
                            {/* <!-- CV Picture --> */}
                            <div class=" w-40 h-40 overflow-hidden rounded-md shadow-md ">
                                <img
                                    src={images?.image1}
                                    alt="coming soon.."
                                    class="w-full h-full object-contain  object-center "
                                />
                                 
                            </div>

                            {/* <!-- Signature Picture --> */}
                            <div class="w-32 h-16 overflow-hidden border-t border-gray-400">
                               
                                <img
                                    src={images?.image2}
                                    alt="signature coming soon.."
                                    class="w-full h-full object-contain object-center "
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="placeholder-large">No Image</div>
                    )}
                    <h2 className="dashboard-title">Welcome, {applicantName}</h2>
                </div>

                {/* User Information */}
                {userData ? (
                    <div className="user-details">
                        {/* <h3 className="details-title">User Information</h3> */}
                        <div className="detail">
                            <span className="label">User ID:</span>
                            <span className="value">{app_id}</span>
                        </div>
                        <div className="detail">
                            <span className="label">Email:</span>
                            <span className="value">{email}</span>
                        </div>
                        <div className="detail">
                            <span className="label">Number:</span>
                            <span className="value">{cp_number}</span>
                        </div>
                        <div className="detail">
                            <span className="label">Password:</span>
                            <span className="value">{password}</span>
                        </div>
                        <div className="detail">
                            <span className="label">NID:</span>
                            <span className="value">{NID}</span>
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
