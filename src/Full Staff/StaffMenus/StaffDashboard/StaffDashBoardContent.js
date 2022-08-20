import React, { useState, useEffect } from 'react'
import instance from '../../../Axio'
import DataTable from 'react-data-table-component'
import { getValue } from '@testing-library/user-event/dist/utils'
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { UseGetStaff } from '../../../Hooks/UseStaff';


const StaffDashBoardContent = () => {
    const [response, setResponse] = useState({})
    console.log(response);

    const { isLoading, isError, data, error } = UseGetStaff()

    useEffect(() => {
        if (data) {
            setResponse(data.data)
        }
    }, [])


    if (isLoading) {
        return <div>Loading..</div>
    }
    if (isError) {
        return <div>{error.message}</div>
    }


    const colunms = [
        {
            name: "Materi Id",
            selector: row => row._id
        },
        {
            name: "Name",
            selector: row => row.firstname + row.lastname
        },
        {
            name: "Email",
            selector: row => row.username
        },
        {
            name: "Gender",
            selector: row => row.gender
        },
        {
            name: "Marital Status",
            selector: row => row.martial
        },
        {
            name: "Location",
            selector: row => row.city
        },
        {
            name: "Registered On",
            selector: row => row.registeredDate
        },
    ]

    return (
        <>
            <div>Roshan Rana</div>

            <div className='grid gap-5 lg:grid-cols-4  text-gray-500  ' >
                <div className="bg-[#ffffff] p-3 shadow-md" >
                    <div className='flex gap-4 items-center ' >

                        <div className='h-12 w-12 ' >
                            <MdGroups className='h-full w-full rounded-full bg-blue-600 text-white p-3' />
                        </div>

                        <div className='flex 
                               flex-col ' >
                            <div className='text-xl' >
                                {response?.foundTodaysUsers}
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
                                {response.foundLastWeekUsers}
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

                                {/* {Array.isArray(response.foundLastMonthUsers) ? 0 : response.foundLastMonthUsers} */}
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
                                {response.foundTodaysUsers}
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
                                {Array.isArray(response.foundMaleUsers) ? 0 : response.foundMaleUsers}
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
                                {response.foundFemaleUsers}
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
                                {response.foundActiveUsers}
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
                                {response.foundPaidUsers}
                            </div>
                            <div className='text-sm' >
                                Paid Member
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='mt-5' >
                <DataTable columns={colunms} data={response && response.foundUsers} />
            </div>
        </>
    )
}

export default StaffDashBoardContent