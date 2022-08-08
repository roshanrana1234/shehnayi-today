import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { GrSettingsOption } from "react-icons/gr";
import { Link } from 'react-router-dom'

const SiteSetting = ({ data }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => setOpen(!open)}
                className='flex justify-between items-center text-gray-400 hover:text-[#ffffff]  hover:bg-[#3F485A] cursor-pointer text-sm  ' >

                <div className={`flex items-center gap-4 p-2  ml-5`}>
                    <GrSettingsOption className={`${!data && "scale-0" && "text-white"} transform`} />
                    <span
                        className={`${data ? 'lg:block' : "lg:hidden"}`} >
                        Site Setting
                    </span>
                </div>

                <div className={`p-2 mr-6 ${open && "rotate-90"} ${!data ? 'lg:hidden' : "lg:block"}`} >
                    <IoIosArrowForward />
                </div>


            </div>
            {/* ON Click */}

            <div
                className={`${!open ? "hidden" : "block"} text-gray-400 pl-10 bg-[#434D60] text-sm
                ${!data ? 'lg:hidden' : "block"}
                 `}>
                <ul className='flex flex-col ' >
                    <Link
                        to="logofavicon"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Logo & Favicon</a>
                    </Link>
                    <Link
                        to="metriprefix"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Matri Perfix</a>
                    </Link>
                    <Link
                        to="email"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Email</a>
                    </Link>
                    <Link
                        to="setting"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Basic Site Setting</a>
                    </Link>
                    <Link
                        to="seopage"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Seo Page Data</a>
                    </Link>
                    <Link
                        to="socialmedia"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Social Media Link</a>
                    </Link>
                    <li className='hover:text-white pt-2 ' >
                        <a href="#">Google Analytics Code</a>
                    </li>
                    <Link
                        to="changepassword"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Change Password</a>
                    </Link>
                    <Link
                        to="currency_management"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Currency Management</a>
                    </Link>
                    <Link
                        to="site_color"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Site Color</a>
                    </Link>
                    <Link
                        to="app_link"
                        className='hover:text-white pt-2 ' >
                        <a href="#">App Link</a>
                    </Link>
                    <Link
                        to="home_page_text"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Home Page Text</a>
                    </Link>
                    <Link
                        to="home_page_banner_text"
                        className='hover:text-white pt-2 ' >
                        <a href="#">HomePage Banner & Text</a>
                    </Link>
                    <Link
                        to="reason_why_choose"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Reason Why Choose</a>
                    </Link>
                    <Link
                        to="genetate_site_map"
                        className='hover:text-white pt-2 ' >
                        <a href="#">Generate Sitemap</a>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default SiteSetting