'use client'
import React, { useState } from 'react';
import Link from 'next/link'; 
import { useRouter } from 'next/navigation';
const Register = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  async function handleRegister(event) { // Correct
    const userInfo = new FormData(event.target);
    const newUserinfo = {
      firstname: userInfo.get('firstname'),
      lastname: userInfo.get('lastname'),
      gender: userInfo.get('gender'),
      email: userInfo.get('email'),
      password: userInfo.get('password')
    };

    try {
      const response = await fetch('http://110.74.194.123:8989/api/todo/v1/auth/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUserinfo)     
      });

      if (response.ok) {
        // Successful registration
        router.push('/todo-list'); // Redirect to todo-list or other relevant page
      } else {
        const errorData = await response.json(); 
        setError(errorData.error || 'Registration failed'); 
      }
    } catch (error) {
      setError('An error occurred during registration'); // Handle network errors
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              className="w-32 mx-auto"
              alt="Logo"
            />
          </div>
          <div className="mt-12">
            <h1 className="text-2xl xl:text-3xl font-extrabold text-center">
              Log in
            </h1>
            <div className="mt-8">
              <form className="space-y-6" action={handleRegister}>

                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    required
                    className="w-full px-4 py-2 mt-1 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    required
                    className="w-full px-4 py-2 mt-1 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    placeholder="Enter your last name"
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <select 
                    id="gender" 
                    name="gender"
                    className="w-full px-4 py-2 mt-1 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                    <option value="">Select Gender</option>  
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 mt-1 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full px-4 py-2 mt-1 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    placeholder="Enter your password"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  >
                    Sign Up
                  </button>
                </div>
                
              </form>

              <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/login" className="text-indigo-500 hover:text-indigo-600">
                      Log In 
                    </Link>
                  </p>
                </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-600 text-center">Or log in with:</p>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-slate-500 text-white rounded-lg shadow-md hover:bg-indigo-200 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                >
                google
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')`
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
