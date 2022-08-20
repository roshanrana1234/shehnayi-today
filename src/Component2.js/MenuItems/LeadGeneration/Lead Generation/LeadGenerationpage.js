import React, { useState } from 'react'
import { UseLeadGeneration } from '../../../../Hooks/UseData'
import { Link } from 'react-router-dom'
import { FcSearch } from "react-icons/fc";
import { ImFilter } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import { useMutation } from '@tanstack/react-query';
import { UseDelete, UsePatchLead } from '../../../../Hooks/UseStaff';
import { useParams } from 'react-router-dom';



const LeadGenerationpage = () => {
    // const { DId } = useParams()
    const [toggleState, setToggleState] = useState(1)

    //Delete
    // const { mutate: DeleteLeads } = UseDelete(DId)
    // DeleteLeads()

    // patch
    // const { mutate: PatchLead } = UsePatchLead(LId)
    // PatchLead(PatchData)

    // Post
    const { mutate: PostLead } = useMutation()
    // PostLead(lead)


    // Get
    const { isLoading, isError, error, data } = UseLeadGeneration()
    console.log(data);
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>{error.data}</div>
    }
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <>

            <div className='paper' >

                {/* First */}
                <div className='grid lg:grid-cols-2 gap-3' >

                    <div className='relative' >
                        <input
                            // onChange={(e) => setName(e.target.value)}
                            placeholder='Search here...'
                            className=' rounded-md text-sm border p-3 w-full focus:outline-none'
                            type="text" />

                        <button
                            //  onClick={() => setSearch(name)}
                            className=' absolute top-1/2 -translate-y-1/2 left-full -translate-x-full text-white bg-[#0096c9] p-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 '
                        >
                            <div>
                                <FcSearch

                                />
                            </div>
                            Search
                        </button>

                    </div>

                    <div className=' flex justify-end gap-4 ' >
                        <Link to="add_data" >
                            <button
                                className=' p-3 rounded-xl text-white bg-[#FF5858] hover:bg-red-700 text-sm ' >
                                + Add New
                            </button>
                        </Link>
                        <div className='' >
                            <button
                                className='flex  bg-[#4CC3D9] rounded-xl p-3' >
                                <span><ImFilter /></span>
                                Filter
                            </button>
                        </div>
                    </div>

                </div>

                {/* Four Button */}
                <div className='grid sm:grid-cols-4 gap-2 text-white place-items-center' >
                    <div className='flex gap-3 items-center p-3 bg-[#FF5858]  
                        rounded-lg' >
                        <span><AiFillDelete /></span>
                        <button>Delete</button>
                    </div>
                    <button
                        className='bg-[#1ED55A] p-3 rounded-lg'
                    >Approved</button>
                    <button
                        className='bg-[#FA9E1A] p-3 rounded-lg'
                    >Unapproved</button>
                    <button
                        className='bg-[#FF5858] p-3 rounded-lg'
                    >Suspended</button>
                </div>



                {/* Assign Staff */}

                <div className='grid md:grid-cols-2 py-10 gap-10 p-3' >

                    <div>
                        <div className=' grid md:grid-cols-2 items-center gap-3' >
                            <div className='w-full' >
                                <select
                                    className='w-full border p-2 rounded-lg'
                                    name="" id="">
                                    <option value="">Select Staff</option>
                                    <option value="">Ankit</option>
                                </select>
                            </div>
                            <div className='flex gap-4' >
                                <button
                                    className='text-white bg-[#2E94CA] p-2 rounded-lg '
                                >Assing Staff</button>
                                <button
                                    className='text-white bg-[#2E94CA] p-2 rounded-lg '
                                >Unassing Staff</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=' grid md:grid-cols-2 items-center gap-3' >
                            <div className='w-full' >
                                <select
                                    className='w-full border p-2 rounded-lg'
                                    name="" id="">
                                    <option value="">Select Staff</option>
                                    <option value="">Ankit</option>
                                </select>
                            </div>
                            <div className='flex gap-4' >
                                <button
                                    className='text-white bg-[#2E94CA] p-2 rounded-lg '
                                >Assing Franchise</button>
                                <button
                                    className='text-white bg-[#2E94CA] p-2 rounded-lg '
                                >Unassing Franchise</button>
                            </div>
                        </div>
                    </div>

                </div>


                {/* new */}
                <div className='grid sm:grid-cols-2 py-6 place-items-center gap-6' >

                    <div className='flex gap-4' >
                        <span>Show</span>
                        <span>
                            <select
                                // value={numofPages}
                                // onChange={(e) => change(e)}
                                className='border'
                                name="" id="">
                                <option value="1">1</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </span>
                        <span>Entries</span>
                        <button
                        // onClick={change}
                        >Change</button>
                    </div>


                    <div className='flex gap-1' >
                        <span>Sort</span>
                        <span>
                            <select
                                className='border'
                                name="" id="">
                                <option value="">Latest Decending</option>
                                <option value="">Latest Assending</option>
                                <option value="">Latest Loging decending</option>
                            </select>
                        </span>
                        <span>Entries</span>
                    </div>


                </div>


                {/* Heading */}

                <div className='overflow-auto flex gap-2 border p-3 lg:justify-evenly lg:overflow-hidden ' >

                    <div className='flex flex-1 flex-col  gap-1 items-center' >
                        <button
                            className={toggleState === 1 ? "active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            All

                            {/* <div className={toggleState === 1 ? "font-bold" : null} >
            (    {data.data.foundUsers.length})
        </div> */}
                        </button>
                    </div>

                    <div className='flex-1' >
                        <button
                            className={toggleState === 2 ? "active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >Approved List</button>
                    </div>

                    <div className='flex-1' >
                        <button
                            className={toggleState === 3 ? "active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >Unaproved List</button>

                    </div>
                    <div className='flex-1' >
                        <button
                            className={toggleState === 4 ? "active-tabs" : "tabs"}
                            onClick={() => toggleTab(4)}
                        >Paid List</button>

                    </div>
                    <div className='flex-1' >

                        <button
                            className={toggleState === 5 ? "active-tabs" : "tabs"}
                            onClick={() => toggleTab(5)}
                        >Suspended List</button>
                    </div>

                </div>


            </div>
        </>
    )
}

export default LeadGenerationpage