import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";

const MemberMenu = ({ data }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => setOpen(!open)}
                className='flex justify-between items-center text-gray-400 hover:text-[#ffffff]  hover:bg-[#3F485A] cursor-pointer text-sm  ' >

                <div className={`flex items-center gap-4 p-2  ml-5`}>
                    <BsFillPersonFill className={`${!data && "scale-1.25" && "text-white"} transform`} />
                    <span
                        className={`${data ? 'lg:block' : "lg:hidden"}`} >
                        Member
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
                    <Link
                        to="all_member"
                        className='hover:text-white pt-2 ' >
                        <a href="#">All Member</a>
                    </Link>
                    <Link
                        to="unapproved"
                        className='hover:text-white pt-2 ' >
                        <a href="#">UnApproved Member</a>
                    </Link>
                    <Link
                        to="approved_paid"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Approved to Paid Member</a>
                    </Link>
                    <Link
                        to="paid_spot"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Paid To spot Lite</a>
                    </Link>
                    <Link
                        to="suspended"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Suspended Member</a>
                    </Link>


                </ul>
            </div>
        </>
    )
}

export default MemberMenu