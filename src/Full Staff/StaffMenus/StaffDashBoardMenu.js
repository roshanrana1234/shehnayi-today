import React, { useState } from 'react'
import { AiOutlineDashboard } from "react-icons/ai";
import { Link } from 'react-router-dom';

const StaffDashBoardMenu = ({ data }) => {
    const [open, setOpen] = useState(false)

    return (
        <>



            <div
                onClick={() => setOpen(!open)}
                className='flex justify-between items-center text-gray-400 hover:text-[#ffffff]  hover:bg-[#3F485A] cursor-pointer text-sm  ' >

                <div className={`flex items-center gap-4 p-2  ml-5`}>
                    <AiOutlineDashboard className={`${!data && "scale-1.25" && "text-white"} transform`} />


                    <Link to="Staff_Dashboard"
                        className={`${data ? 'lg:block' : "lg:hidden"}`} >
                        <a href="#">
                            DashBoard
                        </a>
                    </Link>



                </div>

            </div>





        </>
    )
}

export default StaffDashBoardMenu