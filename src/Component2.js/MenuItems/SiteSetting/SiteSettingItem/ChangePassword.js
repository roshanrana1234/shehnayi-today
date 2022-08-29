import React, { useState } from 'react'
import { UseChangeAdminPassword } from '../../../../Hooks/UseData';
import { useNavigate } from 'react-router';

const ChangePassword = () => {
    const navigate = useNavigate()
    const [oldpassword, setOldpassword] = useState('')
    const [password, setPassword] = useState('');

    console.log(oldpassword, password);
    const onSuccess = () => {
        alert("Changed succesfully")
        navigate("/login")
    }

    const { mutate } = UseChangeAdminPassword(onSuccess)

    const handleSubmit = (e) => {
        e.preventDefalut()
        let data = { oldpassword, password }
        // console.log(data);
        mutate(data)
    }
    return (
        <>


            <div className='paper' >
                <form
                    onSubmit={handleSubmit}
                    action="">

                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' >Current Password</span>
                        <input
                            value={oldpassword}
                            onChange={(e) => setOldpassword(e.target.value)}
                            placeholder='Current Password'
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  '
                            type="password" />
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    {/* Twitter */}
                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' >New Password </span>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='New Password'
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] ' type="password" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex gap-6 w-full' >
                        <div
                            className='text-white p-2 bg-[#0099CC] hover:bg-blue-600' >
                            <button>Change</button>
                        </div>
                        <div
                            className=' p-2 border hover:bg-slate-500 hover:text-white'
                        >
                            <button
                            // onClick={() => navigate(-1)}
                            >Back</button>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default ChangePassword