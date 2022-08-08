import React from 'react'
import data from '../../Data/db.json'
// import { UseData } from '../../Hooks/UseData'

const First = () => {
    // const { isLoading, error, isError, data } = UseData()
    // console.log(data);

    // if (isLoading) {
    //     return <div> Loading...</div>
    // }
    // if (isError) {
    //     return <div>{error.message}</div>
    // }

    return (
        <>
            <div className='grid gap-5 lg:grid-cols-4  text-gray-500  ' >
                {
                    data.map((value, index) => {
                        return <div key={index}
                            className="bg-[#ffffff] p-3 shadow-md"
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
                                        {value.member}
                                    </div>
                                </div>

                            </div>
                        </div>
                    })
                }
            </div>

            <div className='grid gap-5 lg:grid-cols-4  text-gray-500 my-4 ' >
                {
                    data.map((value, index) => {
                        return <div key={index}
                            className="bg-[#ffffff] p-3 shadow-md"
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
                                        {value.member}
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

export default First