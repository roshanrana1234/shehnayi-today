
import DataTable from 'react-data-table-component';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcSearch } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import { ImPencil2 } from "react-icons/im";
import { UseFAQs, UseFAQsPost } from '../../../../Hooks/UseData';
import ReligionEdit from '../Edit/ReligionEdit';
import { useNavigate } from "react-router-dom";

const FAQs = () => {
    let navigate = useNavigate();
    const [open, setOpen] = useState(true)
    const [addNew, setAddNew] = useState(true)
    const [toggleState, setToggleState] = useState(1)

    const [Question, setQuestion] = useState("")
    const [Answer, setAnswer] = useState('')

    // get data
    const { data, isLoading, isError, error } = UseFAQs()
    console.log(data);

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>{error.message}</div>
    }


    const onSuccess = () => {
        navigate("/dash/faqs")
        { setAddNew(!addNew) }
        // console.log('Run after Success Added new member');
    }

    // Post
    const { mutate } = UseFAQsPost()

    const toggleTab = (index) => {
        setToggleState(index)
    }


    const columns = [
        {
            name: "Edit",
            cell: row => (
                <Link to={`/dash/FAQs/edit/${row && row?._id}`
                } >
                    <button
                        onClick={() => setOpen(!open)}
                        className='bg-blue-500  p-3 flex gap-2  text-white flex-shrink-0 w-24 justify-center items-center' >
                        <ImPencil2 />
                        Edit

                    </button>
                </Link >
            )

        },

        {
            name: "Delete",
            cell: row => (
                <Link to={`/dash/FAQs/delete/${row && row._id}`} >
                    <button
                        className='bg-[#FF5858]  p-3 flex gap-2  flex-shrink-0 w-24 justify-center items-center text-white' >
                        <AiFillDelete />
                        Delete

                    </button>
                </Link>
            )

        },
        {
            name: 'Question',
            selector: row => row && row.Question
        },
        {
            name: 'Answer',


            selector: row => row && row.Answer

        },
        // {
        //     name: 'Assigne Task',
        //     selector: row => row.year,
        // },
        // {
        //     name: 'Assigne require',
        //     selector: row => row.year,
        // },
    ];

    const handlePost = (e) => {
        e.preventDefault()
        console.log(Question, Answer);
        const member = {
            "Question": Question,
            "Answer": Answer,
        }
        mutate(member)
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
                                    className='py-2 lg:w-[140px]' >Question</span>
                                <input
                                    value={Question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    placeholder='Question'
                                    className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="text" />
                            </div>
                            <br />
                            <hr className=' w-full bg-black' />
                            <br />

                            <div className='fill '>
                                <span
                                    className='py-2 lg:w-[140px]' >Answer</span>
                                <input
                                    value={Answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                    placeholder='Answer'
                                    className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="text" />
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


            {/* Header */}
            <div className='overflow-auto flex border  lg:justify-evenly lg:overflow-hidden  font-semibold text-gray-500 my-10' >
                <div className='flex flex-1 flex-col   gap-1 items-center  min-w-[200px]' >
                    <button
                        className={`${toggleState === 1 ? "active-tabs1" : "tabs"} w-full p-4 border-x-2`}
                        onClick={() => toggleTab(1)}
                    >
                        <div className='flex flex-col  ' >
                            ALL
                            <div>
                                (  {data && data.data && data.data.length})
                            </div>
                        </div>
                    </button>
                </div>

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
                        data={data && data.data}
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

export default FAQs




















// import React from 'react'
// import { UseFAQs } from '../../../../Hooks/UseData'

// const FAQs = () => {
//     const { data, isLoading, isError, error } = UseFAQs()
//     if (isLoading) {
//         return <div>Loading...</div>
//     }
//     if (isError) {
//         return <div>{error.message}</div>
//     }
//     return (
//         <>
//             rsoahn ran
//         </>
//     )
// }

// export default FAQs