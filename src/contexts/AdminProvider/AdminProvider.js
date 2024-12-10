import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
    const [adminEmail, setAdminEmail] = useState(() => {
        // Retrieve admin email from localStorage if it exists
        return localStorage.getItem("adminEmail") || null;
    });

    useEffect(() => {
        if (adminEmail) {
            // Save admin email to localStorage when it changes
            localStorage.setItem("adminEmail", adminEmail);
        } else {
            localStorage.removeItem("adminEmail"); // Clear it if admin email is null
        }
    }, [adminEmail]);

    return (
        <AdminContext.Provider value={{ adminEmail, setAdminEmail }}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminProvider;