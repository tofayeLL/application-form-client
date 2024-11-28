import React, { createContext, useState } from 'react';


export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState(null);
    return (
        <div>
            <UserContext.Provider value={{ userEmail, setUserEmail }}>
                {
                    children
                }

            </UserContext.Provider>

        </div>
    );
};

export default UserProvider;