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
    

// <div className="relative h-screen flex items-start justify-center w-[50%]">
//   <div className="relative bg-[#AFB3FF] h-3/5 flex w-[40%] items-center justify-center rounded-b-3xl">
//     <img src={logo} alt="Logo" className="mx-auto justify-center w-32 h-32 "    />
//   </div>
// </div>


   

//       <div className="items-center justify-center bg-[#E5E5E5] w-[50%]">
//         <div className="w-full py-8 px-32">
//           <h2 className="text-xl text-center font-bold mb-6 text-gray-900">Please Fill out form to Register!</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Full name:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-[#656ED3] rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">CNIC:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-[#656ED3] rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Email:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-[#656ED3] rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 required
//               />
//             </div>

//             <div className="mb-3">
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

//             <div className="mb-6">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-[#656ED3] rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 required
//               />
//             </div>
//             {/* <p className='text-sm text-right m-1 underline'>Forgot Password</p> */}
//             <button
//               type="submit"
//               className="w-full px-4 py-2 bg-[#656ED3] text-white font-semibold rounded-full border-[#AFB3FF] shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Register
//             </button>
           
//             <p className='text-center mt-5'>Having an account? Login</p>
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
  overflow: hidden; // Prevents scrolling
`;

const LeftSide = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  position: relative;
  height: 100%;
`;

const LogoContainer = styled.div`
  background-color: #AFB3FF;
  height: 60%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
`;

const Logo = styled.img`
  width: 8rem;
  height: 8rem;
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
  padding: 2rem 8rem;
  box-sizing: border-box; // Ensures padding doesn't affect total width/height
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

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Submitted', { email, password });
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <LeftSide>
          <LogoContainer>
            <Logo src={logo} alt="Logo" />
          </LogoContainer>
        </LeftSide>
        <RightSide>
          <FormContainer>
            <Title>Please Fill out form to Register!</Title>
            <Form onSubmit={handleSubmit}>
              <div className="mb-3">
                <Label htmlFor="email">Full name:</Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="password">CNIC:</Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="password">Email:</Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="password">Password:</Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <Label htmlFor="password">Confirm Password:</Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit">Register</Button>
              <Text>Having an account? Login</Text>
            </Form>
          </FormContainer>
        </RightSide>
      </Container>
    </>
  );
};

export default SignUp;
