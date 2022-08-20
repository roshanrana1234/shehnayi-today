import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const Three = () => {
    return (
        <>
            <div className='grid gap-5 lg:grid-cols-4  text-gray-500  pt-5' >

                <div
                    className="bg-[#ffffff] p-2 shadow-md"
                >
                    <div className='flex gap-4 items-center ' >

                        <div className='h-12 w-12 ' >
                            <GiHamburgerMenu className='h-full w-full rounded-full bg-green-600 text-white p-3' />
                        </div>

                        <div className='flex 
                               flex-col ' >
                            <div className='text-xl' >
                                0
                            </div>
                            <div className='text-sm' >
                                Total Vendors
                            </div>
                        </div>

                    </div>
                </div>



                <div
                    className="bg-[#ffffff] p-2 shadow-md"
                >
                    <div className='flex gap-4 items-center ' >

                        <div className='h-12 w-12 ' >
                            <GiHamburgerMenu className='h-full w-full rounded-full bg-green-600 text-white p-3' />
                        </div>

                        <div className='flex 
                               flex-col ' >
                            <div className='text-xl' >
                                5
                            </div>
                            <div className='text-sm' >
                                Success Plans
                            </div>
                        </div>

                    </div>
                </div>




                <div
                    className="bg-[#ffffff] p-2 shadow-md"
                >
                    <div className='flex gap-4 items-center ' >

                        <div className='h-12 w-12 ' >
                            <GiHamburgerMenu className='h-full w-full rounded-full bg-green-600 text-white p-3' />
                        </div>

                        <div className='flex 
                               flex-col ' >
                            <div className='text-xl' >
                                2
                            </div>
                            <div className='text-sm' >
                                MemberShip Plans
                            </div>
                        </div>

                    </div>
                </div>




                <div
                    className="bg-[#ffffff] p-2 shadow-md"
                >
                    <div className='flex gap-4 items-center ' >
                        <div className='h-12 w-12 ' >
                            <GiHamburgerMenu className='h-full w-full rounded-full bg-green-600 text-white p-3' />
                        </div>

                        <div className='flex 
                               flex-col ' >
                            <div className='text-xl' >
                                0
                            </div>
                            <div className='text-sm' >
                                Advertisement
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Three