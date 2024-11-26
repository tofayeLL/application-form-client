import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const UpdateUser = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    useEffect((id) => {
        const url = `http://localhost:5000/userCollection/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))

    }, []);
    return (
        <div>
            <h2>Update User  {user.name}</h2>
        </div>
    );
};

export default UpdateUser;