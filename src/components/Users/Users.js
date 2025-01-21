import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/userCollection')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    const handleDeleteUser = id => {
        const procced = window.confirm(`Are you sure? Delete that user ${users.map(user => user.name)}`);
        if (procced) {
            const url = `http://localhost:5000/userCollection/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUser = users.filter(user => user._id !== id);
                        setUsers(remainingUser);

                    }
                })
        }
    }
    return (
        <div>
            <h2>Available Users: {users.length}</h2>
            <div>
                
                <div>
                    {
                        users.map(user => <h3 key={user._id}>({users.indexOf(user) + 1}) {user.name}
                            <Link to={`/userCollection/update/${user._id}`}><button>Update</button></Link> <button onClick={() => handleDeleteUser(user._id)}>X</button>

                        </h3>)

                    }
                </div>

            </div>
        </div>

    );
};


export default Users;