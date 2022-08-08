import React, { useState } from 'react'
import { BsArrowLeftShort } from "react-icons/bs";

const MiniNav = () => {
    const [open, setOpen] = useState(true)

    return (
        <> NavigationSection

            <div className='flex' >

                {/* NavigationSection */}
                <div
                    className={`bg-purple-500 h-screen p-5 
                ${open ? "w-72" : "w-20"} duration-300 ease-linear  relative`} >

                    <BsArrowLeftShort
                        onClick={() => setOpen(!open)}
                        className={
                            `bg-white text-purple-500 rounded-full text-3xl absolute -right-3 top-9 border cursor-pointer 
                            ${!open && "rotate-180"} `
                        } />

                    <div className={`text-white font-bold text-2xl absolute right-1/2 translate-x-1/2 ${!open && "-translate-x-full"} duration-300`} >
                        shehnayi
                    </div>
                </div>

                {/* MainBodoy */}
                <div className='p-7 bg-red-400 flex-1'>
                    HomePage
                </div>
            </div>
        </>
    )
}

export default MiniNav