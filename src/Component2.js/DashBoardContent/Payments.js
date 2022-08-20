import React from 'react'
import data from '../../Data/db1.json'

const Payments = () => {
    return (
        <>
            <h3
                className='text-3xl text-gray-500 font-semibold py-5' >
                Payments:-
            </h3>
            <div className='grid gap-5 lg:grid-cols-4  text-gray-500 ' >
                <div className='flex justify-between bg-[#ffffff] p-3 items-center shadow-md' >
                    <div className='text-bold text-xl' >
                        TOTAL
                    </div>
                    <div
                        className='bg-[#4cc3d9]
                                text-white text-sm px-2 font-bold'>
                        191,720.50
                    </div>
                </div>

                <div className='flex justify-between bg-[#ffffff] p-3 items-center shadow-md' >
                    <div className='text-bold text-xl' >
                        YEARLY
                    </div>
                    <div
                        className='bg-[#4cc3d9]
                                text-white text-sm px-2 font-bold'>
                        24,345.50
                    </div>
                </div>

                <div className='flex justify-between bg-[#ffffff] p-3 items-center shadow-md' >
                    <div className='text-bold text-xl' >
                        MONTHLY
                    </div>
                    <div
                        className='bg-[#4cc3d9]
                                text-white text-sm px-2 font-bold'>
                        11,720.50
                    </div>
                </div>

                <div className='flex justify-between bg-[#ffffff] p-3 items-center shadow-md' >
                    <div className='text-bold text-xl' >
                        TODATY'S
                    </div>
                    <div
                        className='bg-[#4cc3d9]
                                text-white text-sm px-2 font-bold'>
                        20,300
                    </div>
                </div>
            </div>

        </>
    )
}

export default Payments