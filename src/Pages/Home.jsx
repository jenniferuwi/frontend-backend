import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  return (
    <>
<h2  className='text-2xl font-bold pt-3 bg-gray-200'><span className='text-amber-400 mb-4' >Auth</span>App</h2>
     <div className='flex flex-col justify-center items-center p-15  bg-gray-200 h-screen w-screen '>
                          


<h1 className='text-black font-bold p-6 text-4xl'> <span className='text-amber-400'>Welcome </span>to our website</h1>
<p className='text-indigo-900 font-bold'>Lorem ipsum dolor sit amet consectetur,<span ><br />adipisicing elit. Eum deserunt ut dolor laborum exercitationem, </span> 
<br />quod dolores, non aliquid iure nobis architecto, <br /><span>quos eveniet similique quae quas sint pariatur dicta atque!</span></p>
<div className='flex flex-row p-15 gap-7'>
<Link to="register" className='bg-gray-400 text-2xl flex flex-col justify-center items-center text-black border hover:bg-violet-500  hover:text-amber-300 h-10 w-50 rounded-2xl  font-bold animate-bounce'>signup</Link>
<Link to="login" className='bg-gray-400 text-2xl flex flex-col justify-center items-center text-black border hover:bg-violet-500 hover:text-amber-300 h-10 w-50 rounded-2xl  font-bold animate-bounce'>Login</Link>
</div>
  </div>
 
 </>
  )
}

export default Home