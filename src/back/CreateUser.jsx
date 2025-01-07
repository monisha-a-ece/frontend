import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [address,setAddress]=useState();
  const navigate=useNavigate();

  const submit=(e)=>{
    e.preventDefault()
    axios.post('https://backend-250l.onrender.com/api/user/create',{name,email,address})
    .then(result=>{
      console.log(result.data)
      navigate('/')
    })
    .catch((err)=>{console.log(err)})
  }

  return (
    <div>
     <center> <h1>CreateUser</h1></center>
      <form onSubmit={submit}>
        <div>
          <label>Name : </label>
          <input type="text" onChange={(e)=>setName(e.target.value)}/><br/><br/>
          <label>Email : </label>
          <input type="text" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
          <label>Address : </label>
          <input type="text" onChange={(e)=>setAddress(e.target.value)}/><br/><br/>
           <button>Submit</button>
          
        </div>
      </form>
    </div>
  )
}
export default CreateUser