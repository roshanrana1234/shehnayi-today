import DataTable from 'react-data-table-component';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcSearch } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import { ImPencil2 } from "react-icons/im";
import { BsFillHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import { AddNewDetails } from '../../../../Hooks/UseData';

const MotheTongue = () => {
    const [toggleState, setToggleState] = useState(1)

    const { isLoading, isError, error, data } = AddNewDetails()

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
            name: "Edit",
            cell: row => <button
                onClick={() => alert(row.Mothertongue.map((value, index) => {
                    console.log(value)
                }))}
                className='bg-blue-500  p-3 flex gap-2  flex-shrink-0 w-24 justify-center items-center' >
                <ImPencil2 />
                Edit

            </button>
        },
        {
            name: 'Mother Tongue',
            selector: row => row && row.Mothertongue.map((e) => {
                return <div>
                    {e.Mothertongue}
                </div>
            }),
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row && row.Mothertongue.map((e, i) => {
                return <div key={i} className="text-2xl flex " >
                    {e.Status === true ? <BsFillHandThumbsUpFill /> : <BsHandThumbsDownFill />}
                    {console.log(e.Status)}
                </div>
            })

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

                <div className=' flex justify-end gap-4 ' >
                    <Link to="#" >
                        <button
                            className=' p-3 rounded-xl text-white bg-[#FF5858] hover:bg-red-700 text-sm font-bold px-10' >
                            + Add New
                        </button>
                    </Link>
                </div>

            </div>

            {/* Fout button */}
            <div className='grid sm:grid-cols-3 gap-2 text-white place-items-center py-10' >
                <div className='flex gap-3 items-center p-3 bg-[#FF5858]
            rounded-lg' >
                    <span><AiFillDelete /></span>
                    <button>Delete</button>
                </div>

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
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover
                    />

                </div>
            </div>



        </>
    )

}

export default MotheTongue