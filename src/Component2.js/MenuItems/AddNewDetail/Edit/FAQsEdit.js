import React, { useState } from 'react'
import { useParams } from 'react-router'
import instance from '../../../../Axio'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

const putReligionEdit = ({ FId, Editmember }) => {
    return instance.patch(`/api/v2/admin/faqs/${FId}`, Editmember,
    )
}



const FAQsEdit = () => {

    let navigate = useNavigate();

    let { FId } = useParams()
    console.log(FId);
    // const { mutate } = UsePutReligionData(FId)
    const [Question, setQuestion] = useState("")
    const [Answer, setAnswer] = useState('')

    const { mutate } = useMutation((FId) => putReligionEdit(FId), {
        onSuccess: async () => {
            console.log("I'm first!")
            navigate("/dash/faqs")
        }
    })


    const handleEdit = async (e) => {
        e.preventDefault()
        const Editmember = {
            "Question": Question,
            "Answer": Answer
        }
        mutate({ FId, Editmember })

    }



    return (
        <>
            <div className='paper z-30 shadow-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-lg' >

                <form action="patch"
                    onSubmit={handleEdit}
                >
                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[140px]' >Question</span>
                        <input
                            value={Question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder='Buddhist'
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
                            placeholder='Buddhist'
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
                    onClick={() => navigate("/dash/faqs")
                    }
                >
                    <button
                    >Close</button>
                </div>

            </div>
        </>
    )
}

export default FAQsEdit