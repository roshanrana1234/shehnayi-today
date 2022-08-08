import React, { useEffect, useState } from 'react';
import { FcSearch } from "react-icons/fc";
import { ImFilter } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { UseData } from '../../../../Hooks/UseData';

import ReactPaginate from 'react-paginate';
import { createGlobalStyle } from 'styled-components';
import Pagination from '../../../Pagination/Pagination';



const AllMember = () => {
    // const [searchTerm, setSearchTerm] = useState(second)
    const [toggleState, setToggleState] = useState(1)

    const [numofPages, setNumofPages] = useState(4)
    const [showPerPage, setShowPerPage] = useState(numofPages)
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    })
    const [name, setName] = useState("");
    const [search, setSearch] = useState("");
    const { data, isLoading, error, isError } = UseData()
    console.log(data);
    // console.log(data.data);

    const onPaginationChange = (start, end) => {
        // console.log(start, end);
        setPagination({ start: start, end: end })
    }

    const toggleTab = (index) => {
        setToggleState(index)
    }


    const Search = (name) => {

        return name
    };

    console.log(name);
    console.log(search);

    if (isLoading) {
        return <h2>Loading</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }



    const change = (e) => {
        setNumofPages(e.target.value)
    }

    return (
        <>


            <div className='paper' >


                {/* First */}
                <div className='grid lg:grid-cols-2 gap-3' >

                    <div className='relative' >
                        <input
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Search here...'
                            className=' rounded-md text-sm border p-3 w-full focus:outline-none'
                            type="text" />

                        <button onClick={() => setSearch(name)}
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

                {/* Select All */}
                <div className='flex text-gray-500 py-4' >

                    <div className='flex gap-4 p-4 rounded-lg border' >
                        <input type="checkbox" />
                        <label htmlFor="">Select All</label>
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
                                value={numofPages}
                                onChange={(e) => change(e)}
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
                            onClick={change}
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

                            <div className={toggleState === 1 ? "font-bold" : null} >
                                (    {data.data.foundUsers.length})
                            </div>
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


                {/* Table */}




                <div
                    className={toggleState === 1 ? "active-content" : "content"}>

                    <div className='my-5 ' >



                        {
                            data && data.data?.foundUsers.filter((c) =>
                                c.firstname.toLowerCase().includes(search) || c.username.toLowerCase().includes(search)
                            ).slice(pagination.start, pagination.end)
                                .map((value, index) => {
                                    return <div key={index}>


                                        <div className='bg-[#F5F5F5] grid py-4 border shadow-xl' >
                                            <div>
                                                <div className='grid lg:grid-cols-2 place-items-center'>

                                                    <div className='flex gap-10 text-gray-500 p-3 ' >

                                                        <input
                                                            className='border'
                                                            type="checkbox" />

                                                        <div>

                                                            <div
                                                                className='text-lg '
                                                            >
                                                                {value.firstname}({value._id})
                                                            </div>


                                                            <div className='flex gap-4 py-3'>
                                                                <div
                                                                    className='border p-2 bg-[#ffffff]'
                                                                >
                                                                    Matri Id
                                                                </div>
                                                                <div>
                                                                    <button
                                                                        className='bg-[#2ECC71] p-2 text-white'
                                                                    >
                                                                        Mark as Complete</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className='bg-[#ffffff] w-10/12 m-auto flex items-center justify-center p-2 border' >
                                                        <button
                                                            className='text-2xl text-[#2ECC71] border p-2 border-r-4'
                                                        >
                                                            <div className='flex  gap-4 items-center shadow-2xl' >
                                                                <span><FaThumbsUp /></span>
                                                                <span>
                                                                    {value.activeStatus}
                                                                </span>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className='flex flex-col lg:flex-row items-center' >

                                                    <div className='w-full lg:w-[300px] h-[300px] p-3  ' >
                                                        <img
                                                            className='w-full h-full'
                                                            src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" alt="" />
                                                    </div>

                                                    <div className='lg:flex-grow  ' >
                                                        <div className='grid lg:grid-cols-2 lg:gap-3 text-sm text-gray-500 p-3 lg:shadow-none shadow-2xl box-border' >


                                                            <div
                                                                className='lg:border  p-3 lg:shadow-2xl overflow-auto'
                                                            >
                                                                <div className='grid grid-cols-3 '>
                                                                    <div>gender</div>
                                                                    <div
                                                                        className='place-content-center grid '
                                                                    >:</div>
                                                                    <div>{value.gender}</div>
                                                                </div>
                                                                <br />

                                                                <div className='grid grid-cols-3'>
                                                                    <div>Mobile</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div>{value.phone}</div>
                                                                </div>
                                                                <br />

                                                                <div className='grid grid-cols-3'>
                                                                    <div>Religion Name</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div> {value.religion} </div>
                                                                </div>
                                                                <br />
                                                                <div className='grid grid-cols-3'>
                                                                    <div>Caste Name</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div>Sindhi</div>
                                                                </div>
                                                                <br />
                                                                <div className='grid grid-cols-3'>
                                                                    <div>Mother Tongue</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div> {value.BasicInformation.motherTongue} </div>
                                                                </div>
                                                                <br />
                                                                <div className='grid grid-cols-3'>
                                                                    <div>Marital Status</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div>{value.BasicInformation.maritalStatus}</div>
                                                                </div>
                                                                <br />
                                                                <div className='grid grid-cols-3'>
                                                                    <div>Assing To Staff</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div>{value.assignedTo}</div>
                                                                </div>
                                                                <br />
                                                                <div className='grid grid-cols-3'>
                                                                    <div>Plan Name</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div>{value.planname}</div>
                                                                </div>
                                                                <br />
                                                                <div className='grid grid-cols-3'>
                                                                    <div>Plan Expired On</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div>{value.planeexpire}</div>
                                                                </div>
                                                                <br />


                                                            </div>


                                                            {/* Another Section  */}
                                                            <div
                                                                className='lg:border p-3 lg:shadow-2xl box-border overflow-auto'
                                                            >
                                                                <div className='grid grid-cols-3 '>
                                                                    <div>Email</div>
                                                                    <div
                                                                        className='place-content-center grid '
                                                                    >:</div>
                                                                    <div>{value.username}</div>
                                                                </div>
                                                                <br />

                                                                <div className='grid grid-cols-3'>
                                                                    <div>Country Name</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div>{value.BasicInformation.country}</div>
                                                                </div>
                                                                <br />

                                                                <div className='grid grid-cols-3'>
                                                                    <div>State Name</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div>{value.BasicInformation.state}</div>
                                                                </div>
                                                                <br />
                                                                <div className='grid grid-cols-3'>
                                                                    <div>City Name</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div>{value.BasicInformation.city}</div>
                                                                </div>
                                                                <br />

                                                                <div className='grid grid-cols-3'>
                                                                    <div> Name BirthDay</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div className='flex gap-3' >
                                                                        <div> {value.birthday && value.birthday.day}</div>
                                                                        <div> {value.birthday && value.birthday.month}</div>
                                                                        <div> {value.birthday && value.birthday.year}</div>
                                                                    </div>

                                                                </div>
                                                                <br />

                                                                <br />
                                                                <div className='grid grid-cols-3'>
                                                                    <div>Registered On</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div>{value.registeredDate}</div>
                                                                </div>
                                                                <br />
                                                                <div className='grid grid-cols-3'>
                                                                    <div>Assign To Franchise</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div>{value.Assigntofranchise}</div>
                                                                </div>
                                                                <br />
                                                                <div className='grid grid-cols-3'>
                                                                    <div>Last Login</div>

                                                                    <div
                                                                        className='place-content-center grid'
                                                                    >:</div>
                                                                    <div>{value.lastlogin}</div>
                                                                </div>
                                                                <br />

                                                                <br />


                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3  p-4 ' >
                                                    <Link
                                                        className='duration-300 hover:scale-105 hover:bg-blue-600  bg-[#0099Cc] p-2 rounded-lg  text-white flex justify-center'
                                                        to="/dash/all_member/detail/:memberid" >
                                                        <button
                                                        >View Profile
                                                        </button>
                                                    </Link>
                                                    <button
                                                        className='duration-300 hover:scale-105  bg-[#4CC3D9] p-2 rounded-lg text-white'
                                                    >Edit Profile</button>
                                                    <button
                                                        className='duration-300 hover:scale-105
                                hover:bg-blue-600  bg-[#0099Cc] p-2 rounded-lg text-white'
                                                    >Add Profile</button>
                                                    <button
                                                        className='duration-300 hover:scale-105  bg-[#FFC65D] p-2 rounded-lg text-white'
                                                    >View Comment</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                        }

                        <div className='flex gap-2 text-gray-500 my-10' >
                            <span>Showing</span>
                            {pagination.start}
                            <span>to</span>
                            {pagination.end}
                            <span>of</span>
                            <span>{data.data.foundUsers.length}</span>
                            <span>entries</span>
                        </div>

                        <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange}
                            total={data.data.foundUsers.length}
                        />
                    </div>
                </div>



                {/* ================================= */}

                <div
                    className={toggleState === 2 ? "active-content" : "content"}>

                    <div className='paper' >
                        <div className='text-red-700 p-3 bg-red-200'>
                            Please fill Basic detail first
                        </div>
                    </div>
                </div>

                <div
                    className={toggleState === 3 ? "active-content" : "content"}>
                    <div className='paper' >
                        <div className='text-red-700 p-3 bg-red-200'>
                            Please fill Basic detail first
                        </div>
                    </div>
                </div>

                <div
                    className={toggleState === 4 ? "active-content" : "content"}>
                    <div className='paper' >
                        <div className='text-red-700 p-3 bg-red-200'>
                            Please fill Basic detail first
                        </div>
                    </div>
                </div>
                <div
                    className={toggleState === 5 ? "active-content" : "content"}>
                    <div className='paper' >
                        <div className='text-red-700 p-3 bg-red-200'>
                            Please fill Basic detail first
                        </div>
                    </div>
                </div>

                {/* ================================= */}





            </div>


        </>
    )
}

export default AllMember