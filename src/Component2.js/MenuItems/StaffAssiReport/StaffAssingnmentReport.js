import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';

const StaffAssingnmentReport = ({ data }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => setOpen(!open)}
                className='flex justify-between items-center text-gray-400 hover:text-[#ffffff]  hover:bg-[#3F485A] cursor-pointer text-sm  ' >

                <div className={`flex items-center gap-4 p-2  ml-5`}>
                    <BiMessageDetail className={`${!data && "scale-1.25" && "text-white"} transform`} />
                    <span
                        className={`${data ? 'lg:block' : "lg:hidden"}`} >
                        Staff Assignment Report
                    </span>
                </div>

                <div className={`p-2 mr-6 ${open && "rotate-90"} ${!data ? 'lg:scale-0' : "lg:block"}`} >
                    <IoIosArrowForward />
                </div>


            </div>


            <div
                className={`${!open ? "hidden" : "block"} text-gray-400 pl-10 bg-[#434D60] text-sm
                ${!data ? 'lg:hidden' : "block"}
                 `}>
                <ul className='flex flex-col ' >
                    <Link to="assignment_members" >
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">Assigned Members</a>
                        </li>
                    </Link>
                    <Link to="unassignment_members">
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">Unassigned Members</a>
                        </li>
                    </Link>
                    <Link to="assinged_lead_generation" >
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">Assigned Lead Generation</a>
                        </li>
                    </Link>
                    <Link to="unassinged_lead_generation" >
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">Unassigned Lead Generation</a>
                        </li>
                    </Link>



                </ul>
            </div>
        </>
    )
}

export default StaffAssingnmentReport