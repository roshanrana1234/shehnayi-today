import React, { useState } from 'react'
import { useParams } from 'react-router'
import instance from '../../../../Axio'
import { useMutation } from '@tanstack/react-query'
import { UsePutReligionData } from '../../../../Hooks/UseData'
import { useNavigate } from "react-router-dom";

const putReligionEdit = ({ SId, Editmember }) => {
    return instance.put(`/api/v2/admin/add-new-details/${SId}`, Editmember,
    )
}

// StateName Status CountryName

const StateEdit = () => {
    let navigate = useNavigate();

    let { SId } = useParams()
    console.log(SId);
    // const { mutate } = UsePutReligionData(SId)
    const [CountryName, setCountryName] = useState("")
    const [StateName, setStateName] = useState("")
    const [Status, setStatus] = useState('')

    const { mutate } = useMutation((SId) => putReligionEdit(SId), {
        onSuccess: async () => {
            console.log("I'm first!")
            navigate("/dash/State")
        }
    })

    const handleEdit = async (e) => {
        e.preventDefault()
        const Editmember = {
            "State": [
                {
                    "CountryName": CountryName,
                    "StateName": StateName,
                    "Status": Status,
                }
            ],
        }
        mutate({ SId, Editmember })

    }

    return (
        <>
            <div className='paper z-30 shadow-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-lg' >

                <form action="patch"
                    onSubmit={handleEdit}
                >
                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[140px]' >CountryName Name</span>
                        <input
                            value={CountryName}
                            onChange={(e) => setCountryName(e.target.value)}
                            placeholder='Buddhist'
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[140px]' >State Name</span>
                        <input
                            value={StateName}
                            onChange={(e) => setStateName(e.target.value)}
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
                    onClick={() => navigate("/dash/State")
                    }
                >
                    <button
                    >Close</button>
                </div>

            </div>
        </>
    )
}

export default StateEdit