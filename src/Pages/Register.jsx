
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
 

 function Register() {
   const [name, setName]=useState("")
   const [email, setEmail]=useState("")
   const [password, setPassword]=useState("")
   const[loading,setLoading]=useState(false);
   const handleSubmit = async (e) => {
    e.preventDefault();// prevent relaod
    await axios.post("http://localhost:8000/register",{
      name,
      email,
      password,
    })
    setLoading(true);
    alert("user register succussfully")
   }
 
const navigate=useNavigate();
  return (
    <>
<div className='flex justify-center p-15  bg-gray-300 h-screen w-screen shadow-lg'>
<div className=' h-full bg-indigo-400  w-110  gao-20 flex flex-col justify-center items-center rounded-2xl'>
  <h1 className='text-3xl text-cyan 3250 font-bold text-amber-100'><u>register form</u></h1>
  <form onSubmit={handleSubmit}>
    <div className='p-2 flex flex-col justify-center '>
  Name: <input type="text" name="name" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} className=' flex  border-2 w-80 h-8 rounded-3xl p-6  text-black font-bold'/><br /><br />
  Email: <input type="email" name="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} className=' flex border-2 w-80 h-10 rounded-2xl p-6  font-bold'/><br /><br/>
  Password:<input type="password" name="password" placeholder='Enter your password'onChange={(e)=>setPassword(e.target.value)} className=' flex border-2 w-80 h-10 rounded-2xl p-6  font-bold'/><br /><br/>
  
  <button type="submit" onClick={()=> navigate("/dashboard")} className='bg-gray-400 text-2xl text-black border hover:bg-violet-500 hover:text-amber-300 h-10 w-80 rounded-2xl  font-bold'>signup</button>
  </div>
  </form>
  <p>Alread yourhave Account </p>
  <button onClick={()=> navigate("/login")} className='bg-gray-400 text-2xl text-black border hover:bg-violet-500 hover:text-amber-300 h-10 w-80 rounded-2xl  font-bold'
    >Login here</button>

</div>
</div>


    </>
  )
}
export default Register;