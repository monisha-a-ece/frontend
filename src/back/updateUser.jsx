import { useNavigate, useParams } from 'react-router-dom';
import React,{useState} from 'react'
import axios from 'axios';
const UpdateUser = () => {
    const {id}=useParams()
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [address,setAddress]=useState();
    const navigate=useNavigate();

  const updateUser=()=>{
     e.preventDefault()
    axios.put(`https://backend-250l.onrender.com/api/user/update/${id}`,{name,email,address})
    .then(result=>{
      console.log(result)
      navigate('/')
    })
    .catch((err)=>{console.log(err)})
  }
  return (
    <div>
          <h1>Update</h1>
      <form onSubmit={updateUser}>
        <div>
          <label>Name : </label>
          <input type="text "value={name} onChange={(e)=>setName(e.target.value)}/><br/>
          <label>Email : </label>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
          <label>Address : </label>
          <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/><br/>
          <label>submit </label>
          <button>Submit</button>
          
        </div>
      </form>
    </div>
  )
}

export default UpdateUser