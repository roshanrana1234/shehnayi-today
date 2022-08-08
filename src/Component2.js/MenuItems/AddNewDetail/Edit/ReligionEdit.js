import React, { useState } from 'react'
import { useParams } from 'react-router'
import instance from '../../../../Axio'
import { useMutation } from '@tanstack/react-query'
import { UsePutReligionData } from '../../../../Hooks/UseData'
import { useNavigate } from "react-router-dom";


const putReligionEdit = ({ RId, Editmember }) => {
    return instance.put(`/api/v2/admin/add-new-details/${RId}`, Editmember,
    )
}



const ReligionEdit = () => {
    let navigate = useNavigate();

    let { RId } = useParams()
    console.log(RId);
    // const { mutate } = UsePutReligionData(RId)
    const [ReligionName, setReligionName] = useState("")
    const [Status, setStatus] = useState('')

    const { mutate } = useMutation((RId) => putReligionEdit(RId), {
        onSuccess: async () => {
            console.log("I'm first!")
            navigate("/dash/religion")
        }
    })


    const handleEdit = async (e) => {
        e.preventDefault()
        console.log(ReligionName)
        console.log(Status)
        const Editmember = {
            "Religions": [{
                "ReligionName": ReligionName,
                "Status": Status
            }]
        }
        mutate({ RId, Editmember })

    }



    return (
        <>
            <div className='paper z-30 shadow-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-lg' >

                <form action="patch"
                    onSubmit={handleEdit}
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
                            <input type="radio" name="Status" value={true}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label>APPROVED</label>
                            <input type="radio" name="Status" value={false}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label>UNAPPROVED</label>
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
                    onClick={() => navigate("/dash/religion")
                    }
                >
                    <button
                    >Close</button>
                </div>

            </div>
        </>
    )
}

export default ReligionEdit