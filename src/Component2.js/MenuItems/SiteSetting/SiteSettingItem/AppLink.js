import React, { useState } from 'react'
import { UseAPPLink } from '../../../../Hooks/UseData'


// android  ios
const AppLink = () => {
    const { mutate } = UseAPPLink()
    const [android, setAndroid] = useState('');
    const [ios, setIos] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(android, ios);
        const link = {
            "android": android,
            "ios": ios
        }
        mutate(link)
    }
    return (
        <>
            <div className='paper' >

                <form action="post"
                    onSubmit={handleSubmit}
                >
                    {/* Android App Link */}
                    <div className='fill '>
                        <span
                            className='py-1 lg:w-[270px]' >Android App Password</span>
                        <input
                            value={android}
                            onChange={(e) => setAndroid(e.target.value)}
                            placeholder='https://play.google.com/store/apps/details?id=com.shehnayi.matrimonial'
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-green-800  ' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    {/* Instragram */}

                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' > Ios App Link</span>
                        <input
                            value={ios}
                            onChange={(e) => setIos(e.target.value)}
                            placeholder='Ios App Link'
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] ' type="text" />
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
                </form>
            </div>
        </>
    )
}

export default AppLink