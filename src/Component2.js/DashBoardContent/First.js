import React from 'react'
import data from '../../Data/db.json'
// import { UseData } from '../../Hooks/UseData'
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdGroups } from "react-icons/md";



const First = ({ response }) => {
    if (response) {
        console.log(response);
    }
    return (
        <>

            <div className='grid gap-5 lg:grid-cols-4  text-gray-500  ' >
                <div className="bg-[#ffffff] p-3 shadow-md" >
                    <div className='flex gap-4 items-center ' >

                        <div className='h-12 w-12 ' >
                            <MdGroups className='h-full w-full rounded-full bg-blue-600 text-white p-3' />
                        </div>

                        <div className='flex 
                               flex-col ' >
                            <div className='text-xl' >
                                {response && response.foundUsers && response.foundUsers.length}
                            </div>
                            <div className='text-sm' >
                                Total Member(s)
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-[#ffffff] p-3 shadow-md" >
                    <div className='flex gap-4 items-center ' >

                        <div className='h-12 w-12 ' >
                            <MdGroups className='h-full w-full rounded-full bg-red-600 text-white p-3' />
                        </div>

                        <div className='flex 
                               flex-col ' >
                            <div className='text-xl' >
                                {response?.foundLastWeekUsers}
                                {/* <div>found weekuser</div> */}
                            </div>
                            <div className='text-sm' >
                                Last Week Member(s)
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-[#ffffff] p-3 shadow-md" >
                    <div className='flex gap-4 items-center ' >

                        <div className='h-12 w-12 ' >
                            <MdGroups className='h-full w-full rounded-full bg-green-600 text-white p-3' />
                        </div>
                        <div className='flex 
                               flex-col ' >
                            <div className='text-xl' >
                                {response && response.foundLastMonthUsers && response.foundLastMonthUsers.length}
                                {/* {Array.isArray(response?.foundLastMonthUsers) ? 0 : response.foundLastMonthUsers} */}
                            </div>
                            <div className='text-sm' >
                                Last Month Member(s)
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-[#ffffff] p-3 shadow-md" >
                    <div className='flex gap-4 items-center ' >

                        <div className='h-12 w-12 ' >
                            <MdGroups className='h-full w-full rounded-full bg-green-600 text-white p-3' />
                        </div>

                        <div className='flex 
                               flex-col ' >
                            <div className='text-xl' >
                                {response?.foundTodaysUsers}
                            </div>
                            <div className='text-sm' >
                                total Memeber(s)
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <br />

            <div className='grid gap-5 lg:grid-cols-4  text-gray-500  ' >
                <div className="bg-[#ffffff] p-3 shadow-md" >
                    <div className='flex gap-4 items-center ' >

                        <div className='h-12 w-12 ' >
                            <FaMale className='h-full w-full rounded-full bg-blue-600 text-white p-3' />
                        </div>

                        <div className='flex 
                   flex-col ' >
                            <div className='text-xl' >
                                {response && response.foundMaleUsers}
                            </div>
                            <div className='text-sm' >
                                Male Member(s)
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-[#ffffff] p-3 shadow-md" >
                    <div className='flex gap-4 items-center ' >

                        <div className='h-12 w-12 ' >
                            <div className='h-12 w-12 ' >
                                < FaFemale className='h-full w-full rounded-full bg-blue-600 text-white p-3' />
                            </div>

                        </div>

                        <div className='flex 
                   flex-col ' >
                            <div className='text-xl' >
                                {response?.foundFemaleUsers}
                            </div>
                            <div className='text-sm' >
                                Female Member(s)
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-[#ffffff] p-3 shadow-md" >
                    <div className='flex gap-4 items-center ' >

                        <div className='h-12 w-12 ' >
                            <TiGroup className='h-full w-full rounded-full bg-blue-600 text-white p-3' />
                        </div>


                        <div className='flex 
                   flex-col ' >
                            <div className='text-xl' >
                                {response?.foundActiveUsers}
                            </div>
                            <div className='text-sm' >
                                Active Member(s)
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-[#ffffff] p-3 shadow-md" >
                    <div className='flex gap-4 items-center ' >

                        <div className='h-12 w-12 ' >
                            <FaRegMoneyBillAlt className='h-full w-full rounded-full bg-blue-600 text-white p-3' />
                        </div>

                        <div className='flex 
                   flex-col ' >
                            <div className='text-xl' >
                                {response?.foundPaidUsers}
                            </div>
                            <div className='text-sm' >
                                Paid Member
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default First