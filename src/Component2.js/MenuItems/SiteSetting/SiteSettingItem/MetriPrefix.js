import React from 'react'

const MetriPrefix = () => {
    return (
        <>
            <div className='paper' >
                <div className='fill '>
                    <span
                        className='py-2 lg:w-[270px]' >Matri Prefix</span>
                    <input
                        placeholder='SH'
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

export default MetriPrefix