
import DataTable from 'react-data-table-component';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcSearch } from "react-icons/fc";
import { ImPencil2 } from "react-icons/im";
import { BsFillHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import { UseStaffPanel } from '../../../../Hooks/UseData';
// import data from '../../../../Data/staffPanel..json'
import { UsegetStaffData } from '../../../../Hooks/UseStaff';


const StaffPage = () => {
    const [open, setOpen] = useState(true)
    const [addNew, setAddNew] = useState(true)
    const [toggleState, setToggleState] = useState(1)

    const { isLoading, isError, data, error } = UsegetStaffData()

    // console.log(data);




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
        {
            name: "Access",
            cell: row =>
                <Link to="/staff_panel" >
                    <button
                        className='bg-red-500 p-4 p-3 flex gap-2  text-white flex-shrink-0 w-24 justify-center items-center'
                    >Access
                    </button>
                </Link>
        },
        {
            name: "Edit",
            cell: (row) => <button
                className='bg-blue-500  p-3 flex gap-2  text-white flex-shrink-0 w-24 justify-center items-center' >
                <ImPencil2 />
                Edit

            </button>

        },
        {
            name: 'Status',
            selector: (row) => row && row?.approveStatus
            ,
            sortable: true,
        },
        {
            name: 'Username',
            selector: (row) => row && row?.username
        },
        {
            name: 'Email',
            selector: row => row && row?.email,
        },
        {
            name: 'Password',
            selector: row => row && row?.password,
        },
        {
            name: 'Mobile',
            selector: row => row && row?.mobile,
        },
        // {
        //     name: 'Created On',
        //     selector: row => row.CreatedOn,
        // },
        // {
        //     name: 'Last Login',
        //     selector: row => row.LastLogin,
        // },
        // {
        //     name: 'Online Status',
        //     selector: row => row.OnlineStatus,
        // }, {
        //     name: 'Online Datetime',
        //     selector: row => row.OnlineDatatime,
        // }, {
        //     name: 'Offline Datetime',
        //     selector: row => row.OfflineDatetime,
        // },
        {
            name: 'Role Name',
            selector: row => row && row.role,
        },
        // {
        //     name: 'Assigne Task',
        //     selector: row => row.AssigneTask,
        // },
        // {
        //     name: 'Assigne request',
        //     selector: row => row.Assignerequest,
        // },
    ];



    return (

        <>

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


            <div
                className={`${toggleState === 1 ? "active-content" : "content"} overflow-scroll`}>

                <div
                    className=' my-10 lg:max-w-5xl lg:m-auto'
                >
                    <DataTable
                        title="Manage Religion - All"
                        pagination
                        columns={columns}
                        data={data ? data.data : null}
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

export default StaffPage