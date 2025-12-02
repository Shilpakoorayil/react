import axios from 'axios';
import React, { useState } from 'react'

const AxiosDelete = () => {


const[userId,setUserId] = useState('');
const[message,setMessage]=useState('');

const handleDelete = async(e) => {
    e.preventDefault();


    try{
         const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
            console.log(response);
            setMessage(`User Id ${userId} deleted successfully`);

    }catch(error){
        console.log(error);
        setMessage(' Please Select the fied')

    }
}





  return (
    <div>
        <h2>Delete User</h2>
        <form onSubmit={handleDelete}>
            <input
            type="text"
            placeholder='Enter Id'
            value ={ userId}
            onChange={(e) => setUserId(e.target.value)}
            /> <br/> <br/>
            <button type='submit'>Delete</button>



        </form>
        <p>{message}</p>
      
    </div>
  )
}


export default AxiosDelete
