import React from 'react'
import { FcSearch } from "react-icons/fc";
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
import table from '../../../../Data/table.json'
import DataTable from 'react-data-table-component';
const PaidToSpotLite = () => {
    return (
        <>
            <div className='paper' >
                <div className=' '>

                    {/* First */}
                    <div className='grid lg:grid-cols-2 gap-3' >

                        <div className='relative' >
                            <input
                                placeholder='Search here...'
                                className=' rounded-md text-sm border p-3 w-full focus:outline-none'
                                type="text" />

                            <button
                                className=' absolute top-1/2 -translate-y-1/2 left-full -translate-x-full text-white bg-[#0096c9] p-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 '
                            >
                                <div>
                                    <FcSearch />
                                </div>
                                Search
                            </button>

                        </div>

                        <div className='place-items-end grid' >
                            <button
                                className=' p-3 rounded-xl text-white bg-[#FF5858] hover:bg-red-700' > + Add New</button>
                        </div>

                    </div>


                </div>
                <br />
                <hr className=' w-full bg-black' />
                <br />





            </div>
        </>
    )
}

export default PaidToSpotLite