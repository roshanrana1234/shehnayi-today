
import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Staff = ({ data }) => {
    const [open, setOpen] = useState(false)

    return (
        <>

            <div
                onClick={() => setOpen(!open)}
                className='flex justify-between items-center text-gray-400 hover:text-[#ffffff]  hover:bg-[#3F485A] cursor-pointer text-sm  ' >

                <div className={`flex items-center gap-4 p-2  ml-5`}>
                    <BsFillPersonFill className={`${!data && "scale-1.25" && "text-white"} transform`} />
                    <span
                        className={`${data ? 'lg:block' : "lg:hidden"}`}>
                        Staff
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
                    <Link to="staff_page" >
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">Staff </a>
                        </li>
                    </Link>
                    <Link to="staff_Roles"  >
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">Staff Roles </a>
                        </li>
                    </Link>
                    <Link to="staff_Status" >
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">Staff Status </a>
                        </li>
                    </Link>






                </ul>
            </div>
        </>
    )
}

export default Staff