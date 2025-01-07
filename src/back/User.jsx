import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import './User.css'

const User = () => {

const[user,setUser]=useState([])
    useEffect(()=>{
  axios.get("https://backend-250l.onrender.com/api/user/fetch")
  .then(result =>{
    setUser(result.data.users)
  })
  .catch(err=>{console.log(err)})
})
const deleteUser=(id)=>{
  axios.delete(`https://backend-250l.onrender.com/api/user/delete/${id}`)
  .then(result=>{console.log("user deleted")})
  .catch(err=>{console.log(err)})
}


  return (
    <div id="full">
        <center><h1>User</h1>
        <Link to="/create">Create User</Link></center>
        <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    {user.map((users) => (
      <tr>
        <td>{users.name}</td>
        <td>{users.email}</td>
        <td>{users.address}</td>
        <td>
        <Link to={`/update/${users._id}`}>Update</Link>
        <button onClick={()=>deleteUser(users._id)}>Delete</button>
        </td>
      </tr>
    ))}
   </tbody>
</table>

    </div>
  )
}

export default User