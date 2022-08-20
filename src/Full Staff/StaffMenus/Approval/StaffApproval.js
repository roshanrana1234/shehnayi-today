import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const StaffApproval = ({ data }) => {
    const [open, setOpen] = useState(false)

    return (
        <>

            <div
                onClick={() => setOpen(!open)}
                className='flex justify-between items-center text-gray-400 hover:text-[#ffffff]  hover:bg-[#3F485A] cursor-pointer text-sm  ' >

                <div className={`flex items-center gap-4 p-2  ml-5`}>
                    <BsHandThumbsUpFill className={`${!data && "scale-1.25" && "text-white"} transform`} />
                    <span
                        className={`${data ? 'lg:block' : "lg:hidden"}`} >
                        Approval
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
                    <Link to="Staff_ID_Proff" >
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">ID Proof </a>
                        </li>
                    </Link>
                    <Link to="Staff_horoscope" >
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">Horoscope </a>
                        </li>
                    </Link>
                    <Link to="Staff_Photo1" >
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">Photo1 </a>
                        </li>
                    </Link>
                    <Link to="Staff_Photo2">
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">Photo2 </a>
                        </li>
                    </Link>
                    <Link to="Staff_Photo3" >
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">Photo3 </a>
                        </li>
                    </Link>

                    <Link to="Staff_Photo4" >
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">Photo4 </a>
                        </li>
                    </Link>
                    <Link to="Staff_Photo5" >
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">Photo5 </a>
                        </li>
                    </Link>
                    <Link to="Staff_Photo6" >
                        <li className='hover:text-white pt-2 ' >
                            <a href="#">Photo6 </a>
                        </li>
                    </Link>















                </ul>
            </div>
        </>
    )
}

export default StaffApproval
