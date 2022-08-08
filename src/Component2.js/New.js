import React, { useState } from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const New = () => {
    const [open, setOpen] = useState(true)
    const [active, setactive] = useState('')

    return (
        <>
            <div className='flex  ' >

                {/* NavigationSection */}
                <div
                    className={`bg-purple-500 h-screen p-5 
${open ? "w-72" : "w-20"} duration-300 ease-linear  relative 

 `} >

                    <HiOutlineMenuAlt2
                        onClick={() => setOpen(!open)}
                        className={
                            `bg-white text-purple-500  text-3xl absolute right-1/2 translate-x-1/2 top-6 border cursor-pointer duration-300
            ${open && "right-5"} `
                        } />

                    <div className={`text-white font-bold text-2xl absolute right-1/2 translate-x-1/2 ${!open && "-translate-x-full"} duration-300`} >
                        shehnayi
                    </div>
                </div>

                {/* MainBodoy */}
                <div className=' bg-red-400 lg:flex-1 grow w-screen'>

                    {/* Header */}
                    <header className='bg-green-500' >

                        <div className='p-3 flex justify-between items-center text-xl' >

                            <span className='lg:hidden'>
                                <GiHamburgerMenu />
                            </span>
                            <h3 className='text-sm' >
                                Shehnayi
                            </h3>
                            <div>
                                <CgProfile />
                            </div>
                        </div>

                    </header>

                </div>
            </div>

        </>
    )
}

export default New