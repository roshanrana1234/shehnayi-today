import React, { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { GrUserAdmin } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsArrowLeftShort } from "react-icons/bs";
import StaffDashboard from "../StaffDashboard/StaffDashboard";
import StaffDashBoardMenu from "../StaffMenus/StaffDashBoardMenu";
import StaffMember from "../StaffMenus/Member/StaffMember";
import StaffMatchMaking from "../StaffMenus/MatchMaking/StaffMatchMaking";
import StaffLeadGeneration from "../StaffMenus/LeadGeneration.js/StaffLeadGeneration";
import StaffAssignmentReport from "../StaffMenus/AssgnmentReport.js/StaffAssignmentReport";
import StaffFollowupSystme from "../StaffMenus/FollowUpSystme/StaffFollowupSystme";
import StaffApproval from "../StaffMenus/Approval/StaffApproval";
import StaffBulkEmailandSms from "../StaffMenus/SendBulkEmail And SMS/StaffBulkEmailandSms";
import SraffSideBarMenu from "../../Component2.js/StaffSideBarMenu";
import Online from "../StaffMenus/Online/Online";
import { UsegetStaffData, UseLogOutStaff } from "../../Hooks/UseStaff";
import { useSelector } from "react-redux/es/exports";
import freshStaffSlice from "../../features/freshStaffSlice";
import { useNavigate } from "react-router-dom";
import { removeTokenStaff } from "../localstorage";

const StaffPanel = () => {

    let navigate = useNavigate()
    const [Active, setActive] = useState(false)
    const [open, setOpen] = useState(true)
    const [response, setResponse] = useState("")
    const [Admin, setAdmin] = useState(false)

    const { data } = UsegetStaffData()

    const staff = useSelector((state) => state.staff)



    const { mutate } = UseLogOutStaff()

    const handleLogOut = () => {
        mutate(data)
        navigate("/staff_panel")
        removeTokenStaff()
    }



    return (
        <>
            <div
                className='  h-screen overflow-hidden ' >

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
                            ${!open && "rotate-180"} lg:block hidden border-gray-600`
                                } />
                        </div>





                        {/* Links */}
                        <div
                            className={`h-full flex-col overflow-auto flex ${!open && "lg:gap-3"}  bg-[#495469] pb-10`} >
                            <Online data={open} />
                            <SraffSideBarMenu data={open} />
                            <Link to="/staff_panel_page/Staff_Dashboard" >


                                <StaffDashBoardMenu data={open} />
                            </Link>

                            <StaffMember data={open} />
                            <StaffMatchMaking data={open} />
                            <StaffLeadGeneration data={open} />
                            <StaffAssignmentReport data={open} />
                            <StaffFollowupSystme data={open} />
                            <StaffApproval data={open} />
                            <StaffBulkEmailandSms data={open} />
                        </div>

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
                                className='absolute left-[100%] -translate-x-[100%] text-xl hidden lg:block z-20'>
                                <div className='flex items-center gap-3 text-[#474747] hover:bg-[#f8f8f8] p-4 rounded-sm cursor-pointer' >

                                    <span
                                        className='text-sm'
                                    >Khushboo
                                    </span>
                                    <GrUserAdmin />
                                </div>



                                {/* Onclick Page */}
                                <div

                                >
                                    <div className={`absolute left-full -translate-x-[198px] top-full w-44 h-22 bg-[#ffffff]  items-center  text-[#747474] text-sm p-2
                                 border ${!Admin ? "hidden" : 'lg:flex'} z-50`}>
                                        <ul className='flex flex-col' >
                                            <Link
                                                to="changepassword"
                                                className='hover:bg-[#f8f8f8] p-1'>
                                                <a href="#">Change Password</a>
                                            </Link>

                                            <a
                                                target="_blank"
                                                className='hover:bg-[#f8f8f8] p-1'
                                                href="https://shehnayi.in">Front End</a>

                                            <li
                                                onClick={handleLogOut}
                                                className='hover:bg-[#f8f8f8] p-1'>
                                                <a href="#">LogOut</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </header>


                        {/* Outlet */}
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

export default StaffPanel