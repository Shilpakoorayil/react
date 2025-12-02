import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosGet = () => {
  const [users, setUsers]  = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
        try{
          const response =await axios.get('https://jsonplaceholder.typicode.com/users');
          setUsers(response.data)

        }catch(error){
                console.error('error',error);
        }
    }
   fetchUsers()
  },[])




  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((users) => (
            <li key={users.id}>{users.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default AxiosGet
