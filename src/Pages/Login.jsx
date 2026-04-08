import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/login", { email, password });
            alert("User login successful");
            navigate("/dashboard"); // Redirects after success
        } catch (error) {
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex justify-center p-15 bg-gray-300 h-screen w-screen shadow-lg'>
                <div className='h-full bg-indigo-400 w-110 flex flex-col justify-center items-center rounded-2xl'>
                    <h1 className='text-xl font-bold text-amber-100 p-3'><u>Login here</u></h1>
                    
                    Email: 
                    <input 
                        type="email" 
                        placeholder='Enter your email' 
                        onChange={(e) => setEmail(e.target.value)} 
                        className='flex border-2 w-80 h-10 rounded-2xl p-6 font-bold'
                        required
                    /><br />

                    Password:
                    <input 
                        type="password" 
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)} 
                        className='flex border-2 w-80 h-10 rounded-2xl p-6 font-bold'
                        required
                    /><br />

                    <button 
                        type="submit" 
                        className='bg-gray-400 text-2xl flex flex-col justify-center items-center text-black border hover:bg-violet-500 hover:text-amber-300 h-10 w-50 rounded-2xl font-bold animate-bounce'
                    >
                        Login
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Login;
