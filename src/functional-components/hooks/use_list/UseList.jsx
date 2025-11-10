import React, { useEffect, useState } from 'react'
import { FaUsersCog } from "react-icons/fa";

const UseList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))


    }, []);

return (
    <div>
        <h2> <FaUsersCog />User List</h2>
        <ul>
            {users.map(usr => (//key help us  to identify 
                <li key={usr.id}>{usr.name}</li>
            ))}
        </ul>
    </div>
)
}

export default UseList
