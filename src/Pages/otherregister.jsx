import React, { useState } from 'react'
import axios from 'axios'

function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.post("http://localhost:5000/register", {
      name,
      email,
      password
    })

    alert("Registered!")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="name" onChange={(e)=>setName(e.target.value)} />
      <input placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
      <input placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit">Signup</button>
    </form>
  )
}

export default Register