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


// // src/Login.js
// import React, { useState } from 'react';
// import logo from "./assets/logo.png";

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Login Submitted', { email, password });
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="bg-[#AFB3FF] w-[50%] flex items-center justify-center">
//         <img src={logo} alt="Logo" className="max-w-full max-h-full object-contain" />
//       </div>

//       <div className="flex items-center justify-center bg-[#E5E5E5] w-[50%]">
//         <div className="w-full p-8 sm:p-16 md:p-32">
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
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import logo from './assets/logo.png';

// Global styles to ensure the entire layout uses border-box and no extra scroll
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const LeftSide = styled.div`
  background-color: #AFB3FF;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E5E5E5;
  width: 50%;
  height: 100%;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  @media (min-width: 640px) {
    padding: 2rem;
  }
  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #1F2937; // gray-900
  font-size: 1.25rem;
`;

const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem; // text-sm
  font-weight: medium;
  color: #4B5563; // gray-700
`;

const Input = styled.input`
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #656ED3;
  border-radius: 9999px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  &:focus {
    outline: none;
    ring: 2px solid #4F46E5; // indigo-500
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #656ED3;
  color: white;
  font-weight: 600;
  border-radius: 9999px;
  border: 1px solid #AFB3FF;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  &:hover {
    background-color: #4338CA; // indigo-700
  }
  &:focus {
    outline: none;
    ring: 2px solid #4F46E5; // indigo-500
    ring-offset: 2px;
  }
`;

const Text = styled.p`
  text-align: center;
  margin-top: 1.25rem;
`;

const LinkText = styled.p`
  text-align: right;
  margin: 0.25rem 0;
  font-size: 0.875rem;
  text-decoration: underline;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login Submitted', { email, password });
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        
        <RightSide>
          <FormContainer>
            <Title>Welcome</Title>
            <Form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="email">CNIC:</Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <Label htmlFor="password">Password:</Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <LinkText>Forgot Password</LinkText>
              <Button type="submit">Login</Button>
              <Text>Don't have an account? Register</Text>
            </Form>
          </FormContainer>
        </RightSide>

        <LeftSide>
          <Logo src={logo} alt="Logo" />
        </LeftSide>
      </Container>
    </>
  );
};

export default Login;
