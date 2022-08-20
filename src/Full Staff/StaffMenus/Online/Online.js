import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";

const Online = ({ data }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => setOpen(!open)}
                className='flex justify-between items-center text-gray-500 hover:text-black cursor-pointer text-sm  bg-[#ffffff]' >

                <div className={`flex items-center gap-4 p-2  ml-5`}>
                    <BsFillPersonFill className={`${!data && "scale-1.25" && "text-white"} transform`} />
                    <span
                        className={`${data ? 'lg:block' : "lg:hidden"}`} >
                        Online
                    </span>
                </div>

                <div className={`p-2 mr-6 ${open && "rotate-90"} ${!data ? 'lg:scale-0' : "lg:block"}`} >
                    <IoIosArrowForward />
                </div>


            </div>


            <div
                className={`${!open ? "hidden" : "block"} text-gray-500 pl-10 bg-gray-100 text-sm
                ${!data ? 'lg:hidden' : "block"}
                 border `}>
                <ul className='flex flex-col ' >
                    <Link
                        to="#"
                        className='hover:text-black pt-2 ' >
                        <a href="#">Offline</a>
                    </Link>
                    <hr className='  bg-black' />
                    <Link
                        to="#"
                        className='hover:text-black pt-2 ' >
                        <a href="#">Online</a>
                    </Link>
                    <Link
                        to="#"
                        className='hover:text-black pt-2 ' >
                        <a href="#">Meeting</a>
                    </Link>
                    <Link
                        to="#"
                        className='hover:text-black pt-2 ' >
                        <a href="#">Break</a>
                    </Link>


                </ul>
            </div>
        </>
    )
}

export default Online
