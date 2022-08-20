import React, { useState } from 'react'
import { UsePostEmail } from '../../../../Hooks/UseData'


const Email = () => {
    const [emailFrom, setEmailFrom] = useState('');
    const [emailTo, setEmailTo] = useState('');
    const { mutate } = UsePostEmail()
    // const { data } = UsegetEmail()
    // console.log(data);
    // console.log(data.data);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(emailFrom, emailTo);
        const mail = {
            "emailFrom": emailFrom,
            "emailTo": emailTo
        }
        mutate(mail)
    }

    return (
        <>
            <div className='paper' >
                <form action="post"
                    onSubmit={handleSubmit}
                >
                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' >From Email
                        </span>
                        <input
                            value={emailFrom}
                            onChange={(e) => setEmailFrom(e.target.value)}
                            placeholder='@shehnayi.com'
                            className='p-2 border flex-grow' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    {/* To */}
                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' >To Email</span>
                        <input
                            value={emailTo}
                            onChange={(e) => setEmailTo(e.target.value)}
                            placeholder='contact@shehnayi.com'
                            className='p-2 border flex-grow' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex gap-6 w-full' >
                        <div
                            className='text-white p-2 bg-[#0099CC] hover:bg-blue-600' >
                            <button>Submit</button>
                        </div>

                    </div>

                </form>

            </div>
        </>
    )
}

export default Email