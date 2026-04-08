import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-red-900 via-yellow-900 to-green-900 ">
      <div className='flex justify-between items-center hover:text-white'>
 <h2  className='text-2xl font-bold pt-3'><span className='text-amber-400 mb-4' >Auth</span>App</h2>
      <nav className=' flex gap-7 font-bold p-6 '>
        
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Contact Us</Link>
        <Link>Products</Link>
        
      </nav>
     
       </div>
      <div className=' flex flex-col justify-center items-center p-9'>
      <h1 className="text-5xl font-bold ">Welcome to our website</h1>
<p className='text-gray-300 font-bold p-6' >Lorem ipsum dolor sit amet consectetur,<span ><br />adipisicing elit. Eum deserunt ut dolor laborum exercitationem, </span> 
<br />quod dolores, non aliquid iure nobis architecto, <br /><span>quos eveniet similique quae quas sint pariatur dicta atque!</span></p>
<div className=' flex justify-between gap-120'> 
<div className='bg-blue-700 h-80 w-100 rounded-2xl animate-bounce'>
  <h1 className=' flex flex-col justify-center items-center font-bold text-2xl '>our some products</h1>
  <p className='flex justify-center items-center p-4 text-7xl'>📱🍸🎂 <br />🏬🚗🏍️ <br />🚅🚠✈️</p>
  

</div>
<div className='bg-blue-700 h-80 w-100 rounded-2xl animate-bounce'>
  <h1 className=' flex flex-col justify-center items-center font-bold text-2xl '>our some products</h1>
  <p className='flex justify-center items-center p-4 text-7xl'>📱🍸🎂 <br />🏬🚗🏍️ <br />🚅🚠✈️</p>
  
</div>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;