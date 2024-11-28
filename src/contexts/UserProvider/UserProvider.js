import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState(() => {
        // Retrieve email from localStorage if it exists
        return localStorage.getItem("userEmail") || null;
    });

    useEffect(() => {
        if (userEmail) {
            // Save email to localStorage when it changes
            localStorage.setItem("userEmail", userEmail);
        } else {
            localStorage.removeItem("userEmail"); // Clear it if email is null
        }
    }, [userEmail]);

    return (
        <UserContext.Provider value={{ userEmail, setUserEmail }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
