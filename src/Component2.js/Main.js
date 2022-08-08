import React from 'react'
import { useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import SideBarMenu from './SideBarMenu';
import SiteSetting from './MenuItems/SiteSetting/SiteSetting';
import AddNewDetail from './MenuItems/AddNewDetail/AddNewDetail';
import MatchMaking from './MenuItems/MatchMaking/MatchMaking';
import LeadGeneration from './MenuItems/LeadGeneration/LeadGeneration';
import StaffAssingnmentReport from './MenuItems/StaffAssiReport/StaffAssingnmentReport';
import FollowUpSystem from './MenuItems/FollowUpSystem/FollowUpSystem';
import MemberPlan from './MenuItems/MemberPlan/MemberPlan';
import Staff from './MenuItems/Staff/Staff';
import CuponCode from './MenuItems/CuponCode/CuponCode';
import Approval from './MenuItems/Approval/Approval';
import instance from '../Axio';
import { GrUserAdmin } from "react-icons/gr";
import DashBoardContent from './MenuItems/DashBoard/DashBoardContent';
import DashMenu from './MenuItems/DashBoard/DashMenu';
import { Link, Outlet } from 'react-router-dom';
import BasicSiteSetting from './MenuItems/SiteSetting/SiteSettingItem/BasicSiteSetting';
import MemberMenu from './MenuItems/Member/MemberMenu';
import UserActivity from './MenuItems/UserActivity/UserActivity';
import PaymentMethod from './MenuItems/Payment Option/PaymentMethod';
import SalesReport from './MenuItems/SalesReport/SalesReport';
import EventManagement from './MenuItems/Event Management/EventManagement';
import WeddingVendors from './MenuItems/Wedding Vendors/WeddingVendors';
import CmsPages from './MenuItems/Content Managenent/CmsPages';
import DeveloperTools from './MenuItems/Developer Tools/DeveloperTools';
import BlogManagement from './MenuItems/Blog Management/BlogManagement';
import EmailTemplates from './MenuItems/Email Templates/EmailTemplates';
import SMSTemplates from './MenuItems/SMS Templates/SMSTemplates';
import SendBulkEmailandSMS from './MenuItems/Send Bulk Email and SMS/SendBulkEmailandSMS';
import SendBulkNotification from './MenuItems/SendBulkNotification/SendBulkNotification';
import Advertisement from './MenuItems/Advertisement/Advertisement';
import UserAnalysis from './MenuItems/User Analysis/UserAnalysis';
import DataBaseBackup from './MenuItems/Database Backup/DataBaseBackup';



const Main = () => {
    const [Active, setActive] = useState(false)
    const [open, setOpen] = useState(true)
    const [response, setResponse] = useState({})
    const [Admin, setAdmin] = useState(true)
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                // console.log('Fetched');
                const res = await instance("/api/v2/admin/dashboard")
                // console.log(res.data);
                setResponse(res.data)
                // console.log(response);

            } catch (error) {

            }
        }
        fetchMyAPI()
    }, [])




    return (
        <>
            <div className='  h-screen overflow-hidden ' >

                <div className='w-full h-screen bg-[#f0f0f0] relative lg:flex box-border  ' >

                    {/* SideBar */}
                    <nav className={`absolute lg:relative 
                 z-10 w-4/5 h-screen bg-[#495469]
                  ${!Active && "-translate-x-full"}  duration-300 ease-linear lg:translate-x-0 
                ${open ? "lg:w-56" : "lg:w-16"} `} >

                        <div className='flex items-center justify-between' >
                            <span
                                className={`text-sm font-bold p-2 ${!open ? "lg:scale-0" : "lg:block"} text-white`} >
                                Shehnayi
                            </span>
                            <span className='p-1 text-xl hover:bg-[#3f485a] mr-3 lg:hidden text-white rounded-md hover:scale-125' >
                                <MdOutlineKeyboardArrowLeft
                                    onClick={() => setActive(false)}
                                />
                            </span>

                            {/* New Button */}
                            <BsArrowLeftShort
                                onClick={() => setOpen(!open)}
                                className={
                                    `bg-white text-purple-500 rounded-full text-3xl absolute -right-3 top-9 border cursor-pointer 
                            ${!open && "rotate-180"} lg:block hidden`
                                } />
                        </div>

                        {/* ========================== */}
                        {/* Links */}
                        <div
                            className={`h-full flex-col overflow-auto flex ${!open && "lg:gap-3"}  bg-[#495469] pb-10`} >
                            <SideBarMenu data={open} />
                            <Link to='dashitem' >
                                <DashMenu data={open} />
                            </Link>
                            <Link to="setting" >
                                <SiteSetting data={open} />
                            </Link>
                            <Link to="new_detail">
                                <AddNewDetail data={open} />
                            </Link>

                            <MemberMenu data={open} />

                            <MatchMaking data={open} />
                            <LeadGeneration data={open} />
                            <StaffAssingnmentReport data={open} />
                            <FollowUpSystem data={open} />
                            <MemberPlan data={open} />
                            <Staff data={open} />
                            <CuponCode data={open} />
                            <Approval data={open} />
                            <UserActivity data={open} />
                            <PaymentMethod data={open} />
                            <SalesReport data={open} />
                            <EventManagement data={open} />
                            <WeddingVendors data={open} />
                            <CmsPages data={open} />
                            <DeveloperTools data={open} />
                            <BlogManagement data={open} />
                            <EmailTemplates data={open} />
                            <SMSTemplates data={open} />
                            <SendBulkEmailandSMS data={open} />
                            <SendBulkNotification data={open} />
                            <Advertisement data={open} />
                            <UserAnalysis data={open} />
                            <DataBaseBackup data={open} />
                        </div>
                        {/* ============================ */}

                    </nav>


                    {/* Right Side Header  */}
                    <div className='relative z-0 lg:grow' >


                        <header className='flex bg-[#ffffff] p-4 lg:p-6 items-center gap-3 relative' >
                            <span
                                className='text-lg hover:scale-125 hover:bg-white
                             duration-300' >
                                <GiHamburgerMenu
                                    className='lg:hidden'
                                    onClick={() => setActive(true)}
                                />
                            </span>
                            <span
                                className='text-sm lg:block absolute left-1/2 -translate-x-full'>
                                Shehnayi
                            </span>


                            {/* Admin  */}
                            <div
                                onClick={() => setAdmin(!Admin)}
                                className='absolute left-[100%] -translate-x-[100%] text-xl hidden lg:block'>
                                <div className='flex items-center gap-3 text-[#474747] hover:bg-[#f8f8f8] p-4 rounded-sm cursor-pointer' >

                                    <span
                                        className='text-sm'
                                    >Admin
                                    </span>
                                    <GrUserAdmin />
                                </div>

                                {/* Onclick Page */}
                                <div className={`absolute left-full -translate-x-[198px] top-full w-44 h-22 bg-[#ffffff]  items-center  text-[#747474] text-sm p-2
                                 border ${Admin ? "hidden" : 'lg:flex'}`}>
                                    <ul className='flex flex-col' >
                                        <Link
                                            to="setting" className='hover:bg-[#f8f8f8] p-1' >
                                            <a href="#">Setting</a>
                                        </Link>
                                        <Link
                                            to="changepassword"
                                            className='hover:bg-[#f8f8f8] p-1'>
                                            <a href="#">Change Password</a>
                                        </Link>

                                        <a
                                            target="_blank"
                                            className='hover:bg-[#f8f8f8] p-1'
                                            href="https://shehnayi.in">Front End</a>

                                        <li className='hover:bg-[#f8f8f8] p-1'>
                                            <a href="#">LogOut</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>


                        </header>


                        {/* Main Content */}
                        <div className='bg-[#F0F0F0] 
                        h-screen overflow-auto p-5' >
                            <Outlet />
                        </div>

                    </div>


                </div>


            </div>

        </>
    )
}

export default Main