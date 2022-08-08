import React from 'react'
import data from '../../Data/db.3.json'
const Three = () => {
    return (
        <>
            <div className='grid gap-5 lg:grid-cols-4  text-gray-500  pt-5' >
                {
                    data.map((value, index) => {
                        return <div key={index}
                            className="bg-[#ffffff] p-2 shadow-md"
                        >
                            <div className='flex gap-4 items-center ' >

                                <div className='h-12 w-12 ' >
                                    <img
                                        className='h-full w-full rounded-full'
                                        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                                </div>

                                <div className='flex 
                               flex-col ' >
                                    <div className='text-xl' >
                                        {value.num}
                                    </div>
                                    <div className='text-sm' >
                                        {value.text}
                                    </div>
                                </div>

                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Three