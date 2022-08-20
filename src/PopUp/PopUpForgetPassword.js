import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
var qs = require('qs');

const PopUpForgetPassword = ({ visible, onClose }) => {
    const [oldpassword, setOldpassword] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleOnClosePass = (e) => {
        if (e.target.id === "PasswordContainer") onClose();
    };
    if (!visible) return null;


    var data = qs.stringify({
        'oldpassword': oldpassword,
        'password': password
    });

    const submitHandler = (e) => {
        e.preventDefault();
        var config = {
            method: 'patch',
            url: 'https://server.shehnayi.in/api/v2/admin/changepass',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmY3ZjVlNWZmMjYyODc4MDU3MWQyYWIiLCJpYXQiOjE2NjA0ODk0MDh9.fNn-9_MWFjzhBy-Kz-53IJLp3HXDDTziJkt30mDIBso',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': 'connect.sid=s%3AjfXjgC9AeHC5_UxvUv_b4Rs9Qbmaaen4.7pyDWYi9VN%2BVLXFwB9iNnAgkWdXUBCyyAQ%2Fz4gF4Eho'
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
                id='PasswordContainer'
                className='fixed inset-0 bg-opacity-30 backdrop-blur-sm text-white z-20 h-screen
            flex justify-center items-center 
          '
                onClick={handleOnClosePass}
            >
                <div className="bg-white text-black p-2 rounded-lg border shadow-2xl lg:w-5/12 w-7/12"
                >

                    <form
                        onSubmit={submitHandler}
                        action="">
                        <div className='flex flex-col gap-4'>

                            <input
                                value={oldpassword}
                                placeholder="OldPassword"
                                onChange={(e) => setOldpassword(e.target.value)}
                                className='border p-2 border-green-400' type="password" />
                            <input
                                placeholder='NewPassword'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='border p-2 border-green-400' type="password" />

                            <button
                                className='bg-green-400 w-full p-2 text-white text-2xl' >
                                Change
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

export default PopUpForgetPassword