import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import img from '../../images/shehnayilogo.svg';
import { storeTokenAdmine } from './LocalStoarege';
import PopUpPage from '../../PopUp/PopUpPage';
import PopUpForgetPassword from '../../PopUp/PopUpForgetPassword';
import { UseLogin } from '../../Hooks/UseData'
var qs = require('qs');

const Login = () => {
    const [showMyModal, setShowMyModal] = useState(false);
    const handleOnClose = () => setShowMyModal(false)
    const [showPasswordPop, setShowPasswordPop] = useState(false);
    const handleOnClosePass = () => setShowPasswordPop(false)
    const navigate = useNavigate();

    const [username, setUsename] = useState("")
    const [password, setPassword] = useState("")


    const onSuccess = (data) => {
        if (data.status === 200) {
            toast.success("Sucessful Login", { position: "top-center" })
            setTimeout(() => {
                navigate("/dash")
            }, 1000);
        }

    }




    const onError = () => {
        alert('Login error')
        // console.log('data', data)
    }

    const { mutate, data } = UseLogin(onSuccess, onError)

    console.log(data);

    const submitHandler = (e) => {
        e.preventDefault();

        const data = { username, password }
        mutate(data)
    }

    if (data) {
        if (data.data) {
            storeTokenAdmine(data.data.token)
        }
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

                            required
                            value={username}
                            placeholder="shenhay@gmail.com"
                            onChange={(e) => setUsename(e.target.value)}
                            className='border p-2 border-green-400' type="email" />

                        <input
                            required
                            placeholder='****'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='border p-2 border-green-400' type="password" />

                        <button
                            className='bg-green-400 w-full p-2 text-white text-2xl' >
                            Login
                        </button>

                    </div>
                </form>

                <div className='flex justify-between items-center my-4 ' >
                    <div
                        onClick={() => setShowPasswordPop(true)}
                        className='text-sm text-gray-500 cursor-pointer'
                    >Change Your password?
                    </div>
                    <button
                        className='text-white bg-green-400 p-3 rounded-lg hover:bg-green-600'
                        onClick={() => setShowMyModal(true)}                    >
                        Sign Up
                    </button>
                </div>


            </div>
            <ToastContainer
                closeOnClick
                autoClose={2000}
            />
            <PopUpForgetPassword onClose={handleOnClosePass} visible={showPasswordPop} />
            <PopUpPage onClose={handleOnClose} visible={showMyModal} />
        </>
    )
}

export default Login