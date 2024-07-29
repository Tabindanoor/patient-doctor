// // src/Login.js
// import React, { useState } from 'react';
// import logo from "./assets/logo.png";

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Login Submitted', { email, password });
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="items-center justify-center bg-[#E5E5E5] w-[50%]">
//         <div className="w-full p-32">
//           <h2 className="text-xl text-center font-bold mb-6 text-gray-900">Welcome</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">CNIC:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-[#656ED3] rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-[#656ED3] rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <p className='text-sm text-right m-1 underline'>Forgot Password</p>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 bg-[#656ED3] text-white font-semibold rounded-full border-[#AFB3FF] shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Login
//             </button>
           
//             <p className='text-center mt-5'>Don't have an account? Register</p>
//           </form>
//         </div>
//       </div>

//       <div className="bg-[#AFB3FF] w-[50%] flex items-center justify-center">
//         <img src={logo} alt="Logo" className="" />
//       </div>
//     </div>
//   );
// };

// export default Login;


// src/Login.js
import React, { useState } from 'react';
import logo from "./assets/logo.png";

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
      <div className="bg-[#AFB3FF] w-[50%] flex items-center justify-center">
        <img src={logo} alt="Logo" className="max-w-full max-h-full object-contain" />
      </div>

      <div className="flex items-center justify-center bg-[#E5E5E5] w-[50%]">
        <div className="w-full p-8 sm:p-16 md:p-32">
          <h2 className="text-xl text-center font-bold mb-6 text-gray-900">Welcome</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">CNIC:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-[#656ED3] rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-6">
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
            <p className='text-sm text-right m-1 underline'>Forgot Password</p>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#656ED3] text-white font-semibold rounded-full border-[#AFB3FF] shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
            <p className='text-center mt-5'>Don't have an account? Register</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
