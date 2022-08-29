import React from 'react'
import instance from '../../../../../Axio'
import { Mutation, useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import { MutationCache } from '@tanstack/react-query'
import { AddNewDetails } from '../../../../../Hooks/UseData';



// Delete
const DeleteData = ({ RDId }) => {
    return instance.delete(`api/v2/admin/add-new-details/Religions/${RDId}`)

}


const ReligionDelete = () => {
    let navigate = useNavigate();

    // const { data } = AddNewDetails()
    // console.log(data?.data.map((value) => {
    //     return <div>
    //         {console.log(value._id)}
    //     </div>
    // }))

    let { RDId } = useParams()
    console.log("RDId", RDId);

    // Delete
    const { mutate } = useMutation((RDId) => DeleteData(RDId), {
        onSuccess: (navigate("/dash/religion"))
    })


    const handleDelete = () => {
        mutate({ RDId })
    }


    return (
        <>

            <div>
                <div className='paper z-30 shadow-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-lg flex flex-col gap-10' >
                    <div className='text-gray-600 font-bold text-3xl ' >
                        Are You Sure?
                    </div>
                    <button
                        onClick={handleDelete}
                        className='text-white bg-red-800 rounded-lg p-4 hover:bg-red-600 font-bold duration-200 hover:scale-105'
                    >Delete</button>
                </div>
            </div>
        </>
    )
}

export default ReligionDelete