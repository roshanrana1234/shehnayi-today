import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import img from '../../images/shehnayilogo.svg'
import { UseLoginStaff } from '../../Hooks/UseStaff';
import { storeTokenStaff } from '../localstorage'



const StaffLogin = () => {
    const navigate = useNavigate();
    const [username, setUsename] = useState("")
    const [password, setPassword] = useState("")

    const onSuccess = (data) => {
        if (data.status === 200) {
            toast.success("Sucessful Login", { position: "top-center" })
            setTimeout(() => {
                navigate("/staff_panel_page")
            }, 1000);
        }
    }


    const onError = () => {
        //alert('Login error')
    }
    const { mutate, data } = UseLoginStaff(onSuccess, onError)
    console.log(data);
    if (data) {
        if (data.data) {
            storeTokenStaff(data.data.token)
        }

    }



    const submitHandler = (e) => {
        e.preventDefault();
        const data = { username, password }
        mutate(data)
        navigate("/staff_panel_page/Staff_Dashboard")

    }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     var config = {
    //         method: 'post',
    //         url: 'https://server.shehnayi.in/api/v2/admin/staffLogin',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //             // 'Cookie': 'connect.sid=s%3AULbj9n_Q4E8dsX_AcfFrseRygCihwtP8.yFexD13J4i8A5Vw5a8OZE2JIw7KrtutE9pDVNLVCs%2FM'
    //         },
    //         data: data


    //     };

    //     axios(config)
    //         .then(function (response) {
    //             console.log(JSON.stringify(response.data));
    //             if (response.status === 200) {

    //                 console.log(response)
    //                 setRes(response)
    //                 response && response.data && response.data.foundUser && response.data.foundUser.tokens?.map((e) => {
    //                     console.log(e.token);

    //                     storeToken(e.token)


    //                 });

    //                 // storeToken(response)
    //                 toast.success("Sucessful Login", { position: "top-center" })

    //                 setTimeout(() => {
    //                     navigate("/staff_panel_page")

    //                 }, 3000);


    //             }

    //         })
    //         .catch(function (error) {
    //             if (error) {
    //                 toast.error(error.response.data, {
    //                     position: "top-right"
    //                 })
    //             }
    //         });

    // }



    // useEffect(() => {

    //     if (res) {
    //         dispactch(setResInfo({
    //             res: res.data
    //         }))
    //     }

    // }, [res]);


    return (
        <>
            <div className='max-w-sm m-auto mt-10' >
                <div className='flex flex-col items-center gap-6 my-6' >
                    <div
                        className=' flex justify-center w-full h-40'>
                        <img
                            className='h-full w-full '
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

                            className='text-sm text-gray-500 cursor-pointer'
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

export default StaffLogin