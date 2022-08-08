import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';

const AddNewDetail = ({ data }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => setOpen(!open)}
                className='flex justify-between items-center text-gray-400 hover:text-[#ffffff]  hover:bg-[#3F485A] cursor-pointer text-sm  ' >

                <div className={`flex items-center gap-4 p-2  ml-5`}>
                    <AiOutlinePlus className={`${!data && "scale-1.25" && "text-white"} transform`} />
                    <span
                        className={`${data ? 'lg:block' : "lg:hidden"}`} >
                        Add New Detail
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
                        to="religion"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Religion</a>
                    </Link>
                    <Link
                        to="caste"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Caste</a>
                    </Link>
                    <Link
                        to="state"
                        className='hover:text-white pt-2 ' >
                        <a href="#">State</a>
                    </Link>
                    <Link
                        to="city"
                        className='hover:text-white pt-2 ' >
                        <a href="#">city</a>
                    </Link>
                    <Link
                        to="occupation"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Occupation</a>
                    </Link>
                    <Link
                        to="education"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Education</a>
                    </Link>
                    <Link
                        to="mother_tongue"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Mother Tongue</a>
                    </Link>
                    <Link
                        to="designation"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Designation</a>
                    </Link>
                    <Link
                        to="star"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Star</a>
                    </Link>
                    <Link
                        to="moonsing"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Moonsing</a>
                    </Link>
                    <Link
                        to="faqs"
                        className='hover:text-white pt-2 ' >
                        <a href="#">FAQs</a>
                    </Link>
                    <Link
                        to="home_page_banner"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Home Page Banner</a>
                    </Link>
                    <Link
                        to="matrinony_data"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Matrimony Data</a>
                    </Link>

                </ul>
            </div>
        </>
    )
}

export default AddNewDetail