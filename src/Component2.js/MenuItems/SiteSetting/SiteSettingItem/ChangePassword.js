import React from 'react'

const ChangePassword = () => {
    return (
        <>
            <div className='paper' >
                <div className='fill '>
                    <span
                        className='py-2 lg:w-[270px]' >Current Password</span>
                    <input
                        placeholder='Current Password'

                        className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="password" />
                </div>
                <br />
                <hr className=' w-full bg-black' />
                <br />

                {/* Twitter */}
                <div className='fill '>
                    <span
                        className='py-2 lg:w-[270px]' >New Password </span>
                    <input
                        placeholder='New Password'
                        className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] ' type="password" />
                </div>
                <br />
                <hr className=' w-full bg-black' />
                <br />

                {/* Linkedin Link */}
                <div className='fill '>
                    <span
                        className='py-2 lg:w-[270px]' >Confirm Password</span>
                    <input
                        placeholder='Confirm Password'
                        className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="password" />
                </div>
                <br />
                <hr className=' w-full bg-black' />
                <br />

                {/* Instragram */}

                <div className='fill '>
                    <span
                        className='py-2 lg:w-[270px]' > Instagram</span>
                    <input
                        placeholder='https://www.instagram.com/shehnayi.com_/'
                        className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] ' type="email" />
                </div>
                <br />
                <hr className=' w-full bg-black' />
                <br />

                <div className='flex gap-6 w-full' >
                    <div
                        className='text-white p-2 bg-[#0099CC] hover:bg-blue-600' >
                        <button>Submit</button>
                    </div>
                    <div
                        className=' p-2 border hover:bg-slate-500 hover:text-white'
                    >
                        <button>Back</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword