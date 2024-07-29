// src/Login.js
import React, { useState } from 'react';
import logo from "./assets/logo.png";
// import logo from "./assets/logo.png";
import bgFrame from "./assets/bgFrame.png";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login Submitted', { email, password });
  };

  return (
    <div className="flex h-screen">
    

    {/* <div className="relative flex items-start justify-center w-full h-screen">
  <div className="relative bg-[#AFB3FF] h-3/4 w-[50%] flex items-center justify-center rounded-b-3xl">
    <img src={logo} alt="Logo" className="mx-auto" />
  </div>
</div> */}


    {/* <div className="relative h-screen flex items-center justify-center w-[50%]">
      <div className="relative bg-[#AFB3FF]  h-3/4  text-center items-center w-[50%] ">
      
          <img src={logo} alt="Logo"  className='mx-auto justify-center' />
      </div>
    </div> */}

<div className="relative h-screen flex items-start justify-center w-[50%]">
  <div className="relative bg-[#AFB3FF] h-3/5 flex w-[40%] items-center justify-center rounded-br-full rounded-bl-full">
    <img src={logo} alt="Logo" className="mx-auto justify-center w-32 h-32 "    />
  </div>
</div>


   

      <div className="items-center justify-center bg-[#E5E5E5] w-[50%]">
        <div className="w-full py-8 px-32">
          <h2 className="text-xl text-center font-bold mb-6 text-gray-900">Please Fill out form to Register!</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Full name:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-[#656ED3] rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">CNIC:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-[#656ED3] rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-[#656ED3] rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-[#656ED3] rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-[#656ED3] rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            {/* <p className='text-sm text-right m-1 underline'>Forgot Password</p> */}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#656ED3] text-white font-semibold rounded-full border-[#AFB3FF] shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
           
            <p className='text-center mt-5'>Having an account? Login</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
