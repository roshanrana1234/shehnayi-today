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
                {
                    data.map((value, index) => {
                        return <div key={index} >
                            <div className='flex justify-between bg-[#ffffff] p-3 items-center shadow-md' >
                                <div className='text-bold text-xl' >
                                    {value.day}
                                </div>
                                <div
                                    className='bg-[#4cc3d9]
                                text-white text-sm px-2 font-bold'>
                                    {value.income}
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        </>
    )
}

export default Payments