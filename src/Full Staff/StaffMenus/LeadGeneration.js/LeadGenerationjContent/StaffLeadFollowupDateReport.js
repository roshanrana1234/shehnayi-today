import React, { useState } from 'react'
import { FcSearch } from "react-icons/fc";
import { ImFilter } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom'
import PopUpFollowUp from '../../../../PopUp/PopUpFollowUp';

const StaffLeadFollowupDateReport = () => {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <>
            <div>

                <div className='' >
                    <div className='paper' >

                        {/* First */}
                        <div className='grid lg:grid-cols-2 gap-3' >

                            <div className='relative' >
                                <input
                                    //  onChange={(e) => setName(e.target.value)}
                                    placeholder='Search here...'
                                    className=' rounded-md text-sm border p-3 w-full focus:outline-none'
                                    type="text" />

                                <button
                                    //onClick={() => setSearch(name)}
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
                                        className=' p-4 rounded-xl text-white bg-[#FF5858] hover:bg-red-700 text-sm ' >
                                        + Add New
                                    </button>
                                </Link>
                                <div className='' >
                                    <button
                                        className='flex  bg-[#4CC3D9] rounded-lg p-3 px-4 text-white gap-3 items-center' >
                                        <span>
                                            <ImFilter />
                                        </span>
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
                            <div>
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

                        {/* new */}
                        <div className='grid sm:grid-cols-2 my-10 place-items-center gap-6' >

                            <div className='flex gap-4' >
                                <span>Show</span>
                                <span>
                                    <select
                                        //   value={numofPages}
                                        //    onChange={(e) => change(e)}
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


                        <div>
                            {/* Toggle button */}
                            <div className='overflow-auto flex border  lg:justify-evenly lg:overflow-hidden  font-semibold text-gray-500  ' >

                                <div className='flex flex-1 flex-col   gap-1 items-center ' >
                                    <button
                                        className={`${toggleState === 1 ? "active-tabs1" : "tabs"} w-full p-4 border-x-2`}
                                        onClick={() => toggleTab(1)}
                                    >
                                        <div className='flex flex-col' >
                                            ALL
                                            <div>
                                                (250)
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                <div className='flex-1' >
                                    <button
                                        className={`${toggleState === 2 ? "active-tabs1" : "tabs"} w-full p-4 border-x-2`}
                                        onClick={() => toggleTab(2)}
                                    >
                                        <div className='flex flex-col' >
                                            Incoming Call
                                            <div>
                                                (0)
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                <div className='flex-1' >
                                    <button
                                        className={`${toggleState === 3 ? "active-tabs1" : "tabs"} w-full p-4 border-x-2`}
                                        onClick={() => toggleTab(3)}
                                    >Page three</button>

                                </div>
                                <div className='flex-1' >
                                    <button
                                        className={`${toggleState === 4 ? "active-tabs1" : "tabs"} w-full p-4 border-x-2`}
                                        onClick={() => toggleTab(4)}
                                    >Page four</button>

                                </div>
                                <div className='flex-1' >

                                    <button
                                        className={`${toggleState === 5 ? "active-tabs1" : "tabs"} w-full p-4 
border-x-2`}
                                        onClick={() => toggleTab(5)}
                                    >Page five</button>
                                </div>

                            </div>



                            {/*Toggle Pages Pages */}

                            {/* First Page All */}
                            <div
                                className={`${toggleState === 1 ? "active-content" : "content"} text-gray-500 text-sm`}>

                                {/* <div className=' m-5 rounded-lg shadow-xl bg-[#F5F5F5] text-gray-600 ' >

                <div className='grid lg:grid-cols-2 p-5 place-items-center' >
                    <div className='flex flex-col justify-center' >
                        <div className=' lg:text-2xl text-lg font-semibold' >
                            Priyana Ahuja
                        </div>
                        <div
                            className='text-xl lg:text-2xl'
                        >
                            (SH1234567)
                        </div>
                    </div>
                    <div>
                        <div
                            className='flex gap-3 lg:justify-end justify-center text-red-600 font-extrabold text-2xl p-3 '
                        >
                            <span>
                                <FaThumbsUp />
                            </span>
                            <div>
                                UNAPPROVED
                            </div>
                        </div>
                    </div>
                </div>


                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4' >

                    <div className='lg:border shadow-sm p-2 flex flex-col gap-4 rounded-lg' >
                        <div>
                            <div className='flex w-full ' >
                                <div
                                    className='flex justify-start w-[150px]'
                                >Gender</div>
                                <div
                                    className='flex-1'
                                >:</div>
                                <div
                                    className='flex-grow'
                                >Roshan Rana</div>
                            </div>
                        </div>

                        <div>
                            <div className='flex w-full ' >
                                <div
                                    className='flex justify-start w-[150px] flex-shrink-0'
                                >Address</div>
                                <div
                                    className='flex-1 flex-shrink-0'
                                >:</div>
                                <div
                                    className='flex-grow  overflow-auto'
                                >Ranaroshan3456454@gmail.com</div>
                            </div>
                        </div>


                        <div>
                            <div className='flex w-full ' >
                                <div
                                    className='flex justify-start w-[150px] flex-shrink-0'
                                >Reg Datw</div>
                                <div
                                    className='flex-1 flex-shrink-0'
                                >:</div>
                                <div
                                    className='flex-grow  overflow-auto'
                                >june 23 , 3002 </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex w-full ' >
                                <div
                                    className='flex justify-start w-[150px] flex-shrink-0'
                                >Assign To Staff</div>
                                <div
                                    className='flex-1 flex-shrink-0'
                                >:</div>
                                <div
                                    className='flex-grow  overflow-auto'
                                >Sandhya </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex w-full ' >
                                <div
                                    className='flex justify-start w-[150px] flex-shrink-0'
                                >Next To Franchise</div>
                                <div
                                    className='flex-1 flex-shrink-0'
                                >:</div>
                                <div
                                    className='flex-grow  overflow-auto'
                                >N/A </div>
                            </div>
                        </div>

                    </div>


                    <div className='lg:border shadow-sm p-2 flex flex-col gap-4 rounded-lg' >
                        <div>
                            <div className='flex w-full ' >
                                <div
                                    className='flex justify-start w-[150px]'
                                >Gender</div>
                                <div
                                    className='flex-1'
                                >:</div>
                                <div
                                    className='flex-grow'
                                >Roshan Rana</div>
                            </div>
                        </div>

                        <div>
                            <div className='flex w-full ' >
                                <div
                                    className='flex justify-start w-[150px] flex-shrink-0'
                                >Address</div>
                                <div
                                    className='flex-1 flex-shrink-0'
                                >:</div>
                                <div
                                    className='flex-grow  overflow-auto'
                                >Ranaroshan3456454@gmail.com</div>
                            </div>
                        </div>


                        <div>
                            <div className='flex w-full ' >
                                <div
                                    className='flex justify-start w-[150px] flex-shrink-0'
                                >Reg Datw</div>
                                <div
                                    className='flex-1 flex-shrink-0'
                                >:</div>
                                <div
                                    className='flex-grow  overflow-auto'
                                >june 23 , 3002 </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex w-full ' >
                                <div
                                    className='flex justify-start w-[150px] flex-shrink-0'
                                >Assign To Staff</div>
                                <div
                                    className='flex-1 flex-shrink-0'
                                >:</div>
                                <div
                                    className='flex-grow  overflow-auto'
                                >Sandhya </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex w-full ' >
                                <div
                                    className='flex justify-start w-[150px] flex-shrink-0'
                                >Next To Franchise</div>
                                <div
                                    className='flex-1 flex-shrink-0'
                                >:</div>
                                <div
                                    className='flex-grow  overflow-auto'
                                >N/A </div>
                            </div>
                        </div>

                    </div>


                </div>

                <div className='grid text-center text-white lg:grid-cols-4  gap-4 my-7' >
                    <div></div>
                    <div></div>
                    <div
                        className='rounded-lg bg-[#0099CC] p-3 text-bold hover:bg-blue-700 duration-300'
                    >View Profile</div>
                    <div
                        className='rounded-lg bg-orange-400 p-3 text-bold duration-300 hover:bg-orange-500'
                    >Edit Profile</div>
                </div>
            </div> */}

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
                                                        <div>
                                                            roshan (235454dk)
                                                        </div>
                                                        {/* {value.firstname}({value._id}) */}
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
                                                            <div>
                                                                UNAPPROVED
                                                            </div>
                                                            {/* {value.activeStatus} */}
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
                                                            <div>one</div>
                                                            {/* <div>{value.gender}</div> */}
                                                        </div>
                                                        <br />

                                                        <div className='grid grid-cols-3'>
                                                            <div>Mobile</div>

                                                            <div
                                                                className='place-content-center grid'
                                                            >:</div>
                                                            <div>one</div>
                                                            {/* <div>{value.phone}</div> */}
                                                        </div>
                                                        <br />

                                                        <div className='grid grid-cols-3'>
                                                            <div>Religion Name</div>

                                                            <div
                                                                className='place-content-center grid'
                                                            >:</div>
                                                            <div>one</div>
                                                            {/* <div> {value.religion} </div> */}
                                                        </div>
                                                        <br />
                                                        <div className='grid grid-cols-3'>
                                                            <div>Caste Name</div>

                                                            <div
                                                                className='place-content-center grid'
                                                            >:</div>
                                                            <div>
                                                                one
                                                            </div>
                                                            {/* <div>{value.cast}</div> */}
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
                                                            <div> one</div>
                                                            {/* <div>{value.assignedTo}</div> */}
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
                                                            <div>one</div>
                                                            {/* <div>{value.username}</div> */}
                                                        </div>
                                                        <br />

                                                        <div className='grid grid-cols-3'>
                                                            <div>Country Name</div>

                                                            <div
                                                                className='place-content-center grid'
                                                            >:</div>
                                                            <div>not given</div>
                                                            {/* <div>{value.BasicInformation.country}</div> */}
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
                                                            <div>not given</div>
                                                            {/* <div>{value.BasicInformation.city}</div> */}
                                                        </div>
                                                        <br />

                                                        <div className='grid grid-cols-3'>
                                                            <div> Name BirthDay</div>

                                                            <div
                                                                className='place-content-center grid'
                                                            >:</div>
                                                            <div className='flex gap-3' >

                                                                <div>one</div>
                                                                <div>one</div>
                                                                <div>one</div>
                                                                {/* <div> {value.birthday && value.birthday.day}</div>
                                            <div> {value.birthday && value.birthday.month}</div>
                                            <div> {value.birthday && value.birthday.year}</div> */}
                                                            </div>

                                                        </div>
                                                        <br />

                                                        <br />
                                                        <div className='grid grid-cols-3'>
                                                            <div>Registered On</div>

                                                            <div
                                                                className='place-content-center grid'
                                                            >:</div>
                                                            <div>one</div>
                                                            {/* <div>{value.registeredDate}</div> */}
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
                                        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3  p-4 ' >
                                            <div></div>
                                            <div></div>
                                            <Link
                                                className='duration-300 hover:scale-105 hover:bg-blue-600  bg-[#0099Cc] p-2 rounded-lg  text-white flex justify-center'
                                                to="/dash/all_member/detail/:memberid" >
                                                <button
                                                >View Profile
                                                </button>
                                            </Link>
                                            <Link to='/staff_panel_page/Staff_Lead_followup_date_report/:PopId'
                                                className='duration-300 hover:scale-105  bg-[#4CC3D9] p-2 rounded-lg text-white'
                                            >
                                                <button

                                                >
                                                    UpDate Follow Up
                                                </button>
                                            </Link>



                                        </div>
                                    </div >
                                </div >

                            </div>


                            <div
                                className={toggleState === 2 ? "active-content" : "content"}>
                                <div>Page 2 </div>
                            </div>

                            <div
                                className={toggleState === 3 ? "active-content" : "content"}>
                                <div>Page 3 </div>
                            </div>

                            <div
                                className={toggleState === 4 ? "active-content" : "content"}>
                                <div>Page 4 </div>
                            </div>
                            <div
                                className={toggleState === 5 ? "active-content" : "content"}>
                                <div>Page 5 </div>
                            </div>
                        </div>



                    </div>

                </div>





            </div>
        </>
    )
}

export default StaffLeadFollowupDateReport