'use client'
import React from 'react';
import Link from 'next/link'; 
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation';
const Login = () => {
    const router = useRouter();
    async function handleLogin(userInfo) {
      const newUserinfo = {
        email: userInfo.get('email'),
        password: userInfo.get('password')
      };
    
      const res = await signIn('credentials', {
        redirect: false,
        ...newUserinfo
      });
    
      // Check for specific error property returned by NextAuth 
      if (res.error) { 
        console.error("Login error:", res.error);
        // Set error state to display an error message
      } else {
        // Successful login
        router.push('/todo-list'); 
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
              <form className="space-y-6" action={handleLogin}>
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
                    Log in
                  </button>
                </div>
              </form>
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  {/* Use Link to navigate to the register page */}
                  <Link href="/register" className="text-indigo-500 hover:text-indigo-600">
                      Register here
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

export default Login;
