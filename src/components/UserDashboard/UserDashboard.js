import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider/UserProvider";


const UserDashboard = () => {

    const {userEmail} = useContext(UserContext);
    return (
        <div>
            <p>user see after login</p>
            <p>{userEmail}</p>

        </div>
    );
};

export default UserDashboard;