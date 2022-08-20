
import DataTable from 'react-data-table-component';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcSearch } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import { ImPencil2 } from "react-icons/im";
import { BsFillHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import { AddNewDetails, UseCreteNewDetail } from '../../../../Hooks/UseData';
import ReligionEdit from '../Edit/ReligionEdit';
import { useNavigate } from "react-router-dom";
import instance from '../../../../Axio';




const Religion = () => {
    let navigate = useNavigate();

    const [open, setOpen] = useState(true)
    const [addNew, setAddNew] = useState(true)
    const [toggleState, setToggleState] = useState(1)

    // Post 
    const [ReligionName, setReligionName] = useState("")
    const [Status, setStatus] = useState('')


    // put

    // get data
    const { isLoading, isError, error, data } = AddNewDetails()
    console.log(data);

    const onSuccess = () => {
        navigate("/dash/religion")
        { setAddNew(!addNew) }
        // console.log('Run after Success Added new member');
    }

    // Post
    const { mutate: member } = UseCreteNewDetail(onSuccess)
    // const OnSuccess = () => {
    //     navigate("/dash/religion")
    // }

    if (isLoading) {
        return <h3>Loading...</h3>
    }
    if (isError) {
        return <h3>{error.message}</h3>
    }

    const toggleTab = (index) => {
        setToggleState(index)
    }


    const columns = [
        // {
        //     name: "Edit",
        //     cell: row => (
        //         <Link to={`/dash/religion/edit/${row._id}`} >
        //             <button
        //                 onClick={() => setOpen(!open)}
        //                 className='bg-blue-500  p-3 flex gap-2  text-white flex-shrink-0 w-24 justify-center items-center' >
        //                 <ImPencil2 />
        //                 Edit

        //             </button>
        //         </Link>
        //     )

        // },
        // {
        //     name: "Delete",
        //     cell: row => (
        //         <button
        //             onClick={() => deleteUser(row._id)}
        //             className='bg-[#FF5858]  p-3 flex gap-2  flex-shrink-0 w-24 justify-center items-center text-white' >
        //             <AiFillDelete />
        //             Delete

        //         </button>
        //     )
        // },
        {
            name: "Delete",
            cell: row => (
                <Link to={`/dash/religion/delete/${row._id}`} >
                    <button
                        className='bg-[#FF5858] rounded-lg p-3 flex gap-2  flex-shrink-0 w-24 justify-center items-center text-white' >
                        <AiFillDelete />
                        Delete

                    </button>
                </Link>
            )

        },


        {
            name: 'Religion Name',


            selector: row => row && row.Religions.map((e) => {
                return <div>
                    {console.log(e._id)}
                    {e.ReligionName}
                </div>
            })

        },
        {
            name: 'Status',
            selector: row => row && row.Religions.map((e, i) => {
                return <div key={i} className="text-2xl flex " >
                    {e.Status === true ? <BsFillHandThumbsUpFill /> : <BsHandThumbsDownFill />}
                </div>
            })
            ,
            sortable: true,
        },
        {
            name: 'Assigne Task',
            selector: row => row.year,
        },
        {
            name: 'Assigne require',
            selector: row => row.year,
        },
    ];

    const handlePost = (e) => {
        e.preventDefault()
        console.log(ReligionName)
        console.log(Status)
        const addmember = {
            "Religions": [{
                "ReligionName": ReligionName,
                "Status": Status
            }]
        }

        member(addmember)
    }

    // const deleteUser = async (id) => {
    //     await instance.delete(`/api/v2/admin/add-new-details/${id}`)
    // }

    return (
        <>

            {/* Hidden Page Add new Post*/}
            <div >
                <div className={`${addNew ? "scale-0" : "block"} duration-300`} >
                    <div className='paper z-30 shadow-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-lg' >

                        <form action="Post"
                            onSubmit={handlePost}
                        >
                            <div className='fill '>
                                <span
                                    className='py-2 lg:w-[140px]' >Religion Name</span>
                                <input
                                    value={ReligionName}
                                    onChange={(e) => setReligionName(e.target.value)}
                                    placeholder='Buddhist'
                                    className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="text" />
                            </div>
                            <br />
                            <hr className=' w-full bg-black' />
                            <br />

                            <div className='flex flex-col lg:flex-row text-gray-500'>
                                <span
                                    className='py-2 lg:w-[140px]' > Status</span>
                                <div className='flex gap-3 items-center' >
                                    <input type="radio" name="Status" value={false}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />
                                    <label>APPROVED</label>
                                    <input type="radio" name="Status" value={true}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />
                                    <label>UNAPROVED</label>
                                </div>
                            </div>

                            <br />

                            <div className='flex gap-6 w-full' >
                                <div
                                    className='text-white p-2 bg-[#0099CC] hover:bg-blue-600 w-full text-center' >
                                    <button>Submit</button>
                                </div>
                            </div>


                        </form>

                        <div
                            className={`p-2 border hover:bg-slate-500 hover:text-white flex my-3 justify-center bg-gray-200`}
                            onClick={() => { setAddNew(!addNew) }}
                        >
                            <button
                            >Close</button>
                        </div>

                    </div>
                </div>

            </div>



            {/* Hidden Page Edit */}
            <div >
                <div className={`${open ? "scale-0" : "block"} duration-300`} >
                    <ReligionEdit setOpen={setOpen} open={open} />
                </div>
            </div>






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
                            <FcSearch

                            />
                        </div>
                        Search
                    </button>

                </div>

                <div className=' flex justify-end gap-4  ' >
                    <Link to="#" >
                        <button
                            onClick={() => setAddNew(!addNew)}
                            className=' p-3 rounded-xl text-white bg-[#FF5858] hover:bg-red-700 text-sm font-bold px-10' >
                            + Add New
                        </button>
                    </Link>
                </div>

            </div>

            {/* Fout button */}
            <div className='grid grid-cols-4 gap-2 text-white place-content-end py-10' >
                <button
                    className='bg-[#1ED55A] p-3 rounded-lg'
                >Approved
                </button>

                <button
                    className='bg-[#FA9E1A] p-3 rounded-lg'
                >Unapproved
                </button>

            </div>

            {/* Header */}
            <div className='overflow-auto flex gap-10 border p-3 lg:justify-evenly lg:overflow-hidden' >
                <button
                    className={toggleState === 1 ? "active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    All</button>
                <button
                    className={toggleState === 2 ? "active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >Approved List</button>
                <button
                    className={toggleState === 3 ? "active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >Unapproved List</button>

            </div>


            {/* Data Table  */}

            <div
                className={toggleState === 1 ? "active-content" : "content"}>

                <div
                    className='p-4 my-10'
                >
                    <DataTable
                        title="Manage Religion - All"
                        pagination
                        columns={columns}
                        data={data ? data.data : isLoading}
                        fixedHeader
                        fixedHeaderScrollHeight='600px'
                        // selectableRows
                        selectableRowsHighlight
                        highlightOnHover
                    />

                </div>
            </div>



        </>

    )
}

export default Religion