import React, { useState } from "react";
import loginImg from '../assets/login.jpg'
import axios from "axios";
import Cookies from "universal-cookie";
import logo from '../logo-arpce-vector.svg';

const cookies = new Cookies();
export default function Login() {
  // initial state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:3010/login",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        window.location.href = "/";

        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'
            onSubmit={(e) => handleSubmit(e)}
            >    
                
                <h2 className='text-4xl dark:text-white font-bold text-center'>
                  AECE Monitor</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'>
                       {/* display success message */}
                       {login ? (
                              <p className="text-success">You are logged in successfully</p>
                            ) : (
                              <p className="text-danger">You are not logged in</p>
                            )}
                    </p>           
                </div>
                <div className="flex justify-center">
                    <img src={logo} alt="Logo" className="logo" />
                </div>  
                 {/* submit button */}
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
                variant="primary"
                type="submit"
                onClick={(e) => handleSubmit(e)}
                >SIGN IN</button>
            </form>
        </div>
    </div>
  )
}
