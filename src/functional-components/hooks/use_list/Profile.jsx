import React, { useContext } from 'react'
import { AiFillBank } from "react-icons/ai";
import { UserContext } from './UserContext';

const Profile = () => {
    const{users,setUsers} = useContext(UserContext);

const changeName =() => {
    setUsers((prev) => ({...prev, name:"Shilpa"}));
}


  return (
    <div>
      <h2><AiFillBank />Profile</h2>
      <p>Name :{users.name}</p>
      <p>Age :{users.age}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default Profile
