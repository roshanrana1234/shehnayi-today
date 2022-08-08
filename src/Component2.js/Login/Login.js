import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { PostLoginData } from '../../Hooks/UseData';
import img from '../../images/shehnayilogo.svg'
var qs = require('qs');

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsename] = useState("")
    const [password, setPassword] = useState("")

    const { mutate } = PostLoginData()

    var data = qs.stringify({
        'username': username,
        'password': password
    });



    const submitHandler = (e) => {
        e.preventDefault();
        var config = {
            method: 'post',
            url: 'https://server.shehnayi.in/api/v2/admin/login',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                if (response.status === 200) {
                    toast.success("Sucessful Login", { position: "top-center" })

                    setTimeout(() => {
                        navigate("/dash")
                    }, 3000);


                }



            })
            .catch(function (error) {
                if (error) {
                    toast.error(error.response.data, {
                        position: "top-right"
                    })
                }
            });

    }

    return (
        <>
            <div className='max-w-sm m-auto mt-20' >
                <div className='flex flex-col items-center gap-6 my-6' >
                    <div
                        className=' flex justify-center w-full h-40'>
                        <img
                            className='h-full '
                            src={img} alt="" />
                        {/* Shehnayi */}
                    </div>

                    <div className=' text-gray-400' >Welcom to Shehnayi. Please sign in to Your account</div>
                </div>

                <form
                    onSubmit={submitHandler}
                    action="">
                    <div className='flex flex-col gap-4'>

                        <input
                            value={username}
                            placeholder="shenhay@gmail.com"
                            onChange={(e) => setUsename(e.target.value)}
                            className='border p-2 border-green-400' type="email" />
                        <input
                            placeholder='****'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='border p-2 border-green-400' type="password" />

                        <button
                            className='bg-green-400 w-full p-2 text-white text-2xl' >
                            Login
                        </button>

                        <div
                            className='text-sm text-gray-500'
                        >Forget Your password?</div>
                    </div>
                </form>

            </div>
            <ToastContainer
                closeOnClick
                autoClose={2000}
            />
        </>
    )
}

export default Login