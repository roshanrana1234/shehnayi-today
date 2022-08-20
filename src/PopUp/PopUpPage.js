import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../../src/images/shehnayilogo.svg'
import { useNavigate } from "react-router-dom";
var qs = require('qs');

const PopUpPage = ({ visible, onClose }) => {
    const [username, setUsename] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose();
    };
    if (!visible) return null;



    var data = qs.stringify({
        'username': username,
        'password': password
    });

    const submitHandler = (e) => {
        e.preventDefault();
        var config = {
            method: 'post',
            url: 'https://server.shehnayi.in/api/v2/admin/signup',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQ1MDliNDBlMDZmYmI1ZGRhZjlmYzkiLCJpYXQiOjE2NjA0MDU0ODl9.BrGAgiZK2_mUF6HEeU8x8QFrPNVuOEqcOcYZAnhpMKk',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': 'connect.sid=s%3AEyN0zUMg5QtWxNWoDWk8fb5OhaUnGdYB.vO3%2FF64r%2B6CQl2Q7KJivWclv4UmCcxVRdKo4KTcIl7o'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                if (response.status === 200) {
                    toast.success("Sucessful Login", { position: "top-center" })

                    setTimeout(() => {
                        navigate("/login")
                    }, 3000);
                }
            })
            .catch(function (error) {
                console.log(error);
                if (error) {
                    toast.error(error.response.data, {
                        position: "top-right"
                    })
                }
            });

    }

    return (
        <>
            <div
                id='container'
                className='fixed inset-0 bg-opacity-30 backdrop-blur-sm text-white z-20 h-screen
            flex justify-center items-center 
          '
                onClick={handleOnClose}
            >
                <div className="bg-white text-black p-2 rounded-lg border shadow-2xl lg:w-5/12 w-7/12"
                >

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
                                SignUp
                            </button>

                        </div>
                    </form>


                    <button
                        className='bg-red-500 p-2 rounded-lg my-4'
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    )
}

export default PopUpPage