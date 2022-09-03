import React, { useEffect, useState } from 'react';
import { FcSearch } from "react-icons/fc";
import { ImFilter } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Pagination from '../../../Pagination/Pagination';
import { UseGetAllactiveusers, UseGetAllPaid } from '../../../../Hooks/UseData';

const GetAllPaidmember = () => {
    const [query, setQuery] = useState('')
    const [toggleState, setToggleState] = useState(1)
    const [numofPages, setNumofPages] = useState(10)
    const [showPerPage, setShowPerPage] = useState(numofPages)
    // console.log(numofPages);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    })
    const { data, isLoading, error, isError } = UseGetAllactiveusers()



    if (data) {
        console.log(data);
        console.log(data.data);
    }


    // const keys = ["firstname", "city", "lastname", "username", "religion", "state", "country", "phone"]
    const keys = ["firstname", "city", "lastname", "religion", "username"]

    let search = (data) => {
        return data && data?.filter(items => keys?.some((key) => items[key]?.toLowerCase().includes(query)))

    }
    const onPaginationChange = (start, end) => {
        // console.log(start, end);
        setPagination({ start: start, end: end })
    }

    const toggleTab = (index) => {
        setToggleState(index)
    }


    if (isLoading) {
        return <h2>Loading</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <div className='paper' >


                {/* First */}
                <div className='grid lg:grid-cols-2 gap-3' >

                    <div className='relative' >
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
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




                {/* Heading */}

                <div className='overflow-auto flex border  lg:justify-evenly lg:overflow-hidden  font-semibold text-gray-500 mt-20' >

                    <div className='flex flex-1 flex-col   gap-1 items-center  min-w-[200px] ' >
                        <button
                            className={`${toggleState === 1 ? "active-tabs1" : "tabs"} w-full p-4 border-x-2`}
                            onClick={() => toggleTab(1)}
                        >
                            <div className='flex flex-col  ' >
                                ALL Member
                                <div>
                                    ({data && data.data && data.data.length})
                                </div>
                            </div>
                        </button>
                    </div>



                </div>


                {/* Table */}




                <div
                    className={toggleState === 1 ? "active-content" : "content"}>

                    <div className='my-5 ' >
                        {
                            data && data.data && search(data.data) && search(data.data).slice(pagination.start, pagination.end).map((value, index) => {
                                {/* data && data.data && data.data.slice(pagination.start, pagination.end).map((value, index) => { */ }
                                return <div key={index}>
                                    <div className='bg-[#F5F5F5] grid py-4 border shadow-xl' >
                                        <div>
                                            <div className='grid lg:grid-cols-2 place-items-center'>

                                                <div className='flex gap-10 text-gray-500 p-3 ' >



                                                    <div>

                                                        <div
                                                            className='text-lg '
                                                        >
                                                            {value.firstname}({value._id})
                                                        </div>



                                                    </div>
                                                </div>


                                                <div className='bg-[#ffffff] w-10/12 m-auto flex items-center justify-center p-2 border' >
                                                    {
                                                        (value.activeStatus == 'APPROVED' ? (<button
                                                            className='text-2xl text-[#2ECC71] border p-2 border-r-4'
                                                        >
                                                            <div className='flex  gap-4 items-center shadow-2xl' >
                                                                <span><FaThumbsUp /></span>
                                                                <span>
                                                                    {value.activeStatus}
                                                                </span>
                                                            </div>

                                                        </button>) : (<button
                                                            className='text-2xl text-red-500 border p-2 border-r-4'
                                                        >
                                                            <div className='flex  gap-4 items-center shadow-2xl' >
                                                                <span><FaThumbsDown /></span>
                                                                <span>
                                                                    {value.activeStatus}
                                                                </span>
                                                            </div>

                                                        </button>))
                                                    }

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
                                                                <div>{value.cast}</div>
                                                            </div>
                                                            <br />
                                                            <div className='grid grid-cols-3'>
                                                                <div>Mother Tongue</div>

                                                                <div
                                                                    className='place-content-center grid'
                                                                >:</div>
                                                                Mother toung not given
                                                                {/* <div> {value.BasicInformation.motherTongue} </div> */}
                                                            </div>
                                                            <br />
                                                            <div className='grid grid-cols-3'>
                                                                <div>Marital Status</div>

                                                                <div
                                                                    className='place-content-center grid'
                                                                >:</div>
                                                                Marital Status Not given
                                                                {/* <div>{value.BasicInformation.maritalStatus}</div> */}
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
                                                                <div>Plan not given</div>
                                                                {/* <div>{value.planname}</div> */}
                                                            </div>
                                                            <br />
                                                            <div className='grid grid-cols-3'>
                                                                <div>Plan Expired On</div>

                                                                <div
                                                                    className='place-content-center grid'
                                                                >:</div>
                                                                <div>not given</div>
                                                                {/* <div>{value.planeexpire}</div> */}
                                                            </div>
                                                            <br />


                                                        </div>



                                                        <div
                                                            className='lg:border p-3 lg:shadow-2xl box-border overflow-auto'
                                                        >
                                                            <div className='grid grid-cols-3 '>
                                                                <div>Email</div>
                                                                <div
                                                                    className='place-content-center grid '
                                                                >:</div>
                                                                <div>{value.username}{value.lastname}</div>
                                                            </div>
                                                            <br />

                                                            <div className='grid grid-cols-3'>
                                                                <div>Country Name</div>

                                                                <div
                                                                    className='place-content-center grid'
                                                                >:</div>

                                                                <div>{value.country}</div>
                                                            </div>
                                                            <br />

                                                            <div className='grid grid-cols-3'>
                                                                <div>State Name</div>

                                                                <div
                                                                    className='place-content-center grid'
                                                                >:</div>
                                                                <div>not given</div>
                                                                {/* <div>{value.BasicInformation.state}</div> */}
                                                            </div>
                                                            <br />
                                                            <div className='grid grid-cols-3'>
                                                                <div>City Name</div>

                                                                <div
                                                                    className='place-content-center grid'
                                                                >:</div>

                                                                <div>{value.city}</div>
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
                                                                <div>not given</div>
                                                                {/* <div>{value.Assigntofranchise}</div> */}
                                                            </div>
                                                            <br />
                                                            <div className='grid grid-cols-3'>
                                                                <div>Last Login</div>

                                                                <div
                                                                    className='place-content-center grid'
                                                                >:</div>
                                                                not given
                                                                {/* <div>{value.lastlogin}</div> */}
                                                            </div>
                                                            <br />

                                                            <br />


                                                        </div>


                                                    </div>

                                                </div>
                                            </div >


                                            <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3  p-4  ' >
                                                <Link to="/dash/all_member/detail/:memberid"
                                                    target="_blank"
                                                    className=' duration-300 hover:scale-105 hover:bg-blue-400  bg-red-500 p-2 rounded-lg  text-white flex justify-center'
                                                >
                                                    <button
                                                        //   onClick={handleDelete}
                                                        className='flex items-center gap-3'
                                                    >
                                                        <span><AiFillDelete /></span>
                                                        Delete
                                                    </button>
                                                </Link>
                                                <button
                                                    className='duration-300 hover:scale-105  bg-green-500 p-2 rounded-lg text-white'
                                                >Approved</button>
                                                <button
                                                    className='duration-300 hover:scale-105
hover:bg-blue-600  bg-orange-400 p-2 rounded-lg text-white'
                                                >UnApproved</button>
                                                <button
                                                    className='duration-300 hover:scale-105  bg-[#FFC65D] p-2 rounded-lg text-white'
                                                >Suspended</button>

                                            </div>

                                            <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3  p-4  ' >
                                                <Link to="/dash/all_member/detail/:memberid"
                                                    target="_blank"
                                                    className=' duration-300 hover:scale-105 hover:bg-blue-600  bg-[#0099Cc] p-2 rounded-lg  text-white flex justify-center'
                                                >
                                                    <button
                                                    >
                                                        View Profile

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

                                        </div >


                                    </div >
                                </div >
                            })
                        }



                        <div className='flex gap-2 text-gray-500 my-10' >
                            <span>Showing</span>
                            {pagination.start}
                            <span>to</span>
                            {pagination.end}
                            <span>of</span>
                            <span>{data.data.length}</span>
                            <span>entries</span>
                        </div>

                        <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange}
                            total={data && data.data && data.data.length}
                        />


                    </div >
                </div >




                {/* ================================= */}

                <div div
                    className={toggleState === 2 ? "active-content" : "content"}>

                    <div className='paper' >
                        <div className='text-red-700 p-3 bg-red-200'>
                            Please fill Basic detail first
                        </div>
                    </div>
                </div >

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





            </div >
        </>
    )
}

export default GetAllPaidmember