import React, { useState } from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";



const SideBarMenu = ({ data }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => setOpen(!open)}
                className='flex justify-between items-center text-gray-400 hover:text-[#ffffff]  hover:bg-[#3F485A] cursor-pointer text-sm lg:hidden ' >

                <div className={`flex items-center gap-4 p-2  ml-5`}>
                    <BsFillPersonFill className={`${!data && "m-3" && "text-white"} transfrom`} />
                    <span
                        className={`${data ? 'lg:block' : "lg:hidden"}`} >
                        Admin
                    </span>
                </div>

                <div className={`p-2 mr-6 ${open && "rotate-90"} ${!data ? 'lg:scale-0' : "lg:block"}`} >
                    <IoIosArrowForward />
                </div>
            </div>
            {/* ON Click */}

            <div
                className={`${!open ? "hidden" : "block"}  text-gray-400 pl-10 bg-[#434D60] text-sm
                ${!data ? 'lg:hidden' : "lg:hidden"}
                 `}>
                <ul className='flex flex-col ' >
                    <li className='hover:text-white pt-2 ' >
                        <a href="#">Setting</a>
                    </li>
                    <li className='hover:text-white pt-2 ' >
                        <a href="#">Change Password</a>
                    </li>
                    <li className='hover:text-white pt-2 ' >
                        <a href="#">Front End</a>
                    </li>
                    <li className='hover:text-white pt-2 ' >
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideBarMenu