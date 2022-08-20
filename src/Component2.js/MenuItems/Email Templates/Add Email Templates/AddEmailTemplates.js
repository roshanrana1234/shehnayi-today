import React, { useState } from 'react'
import { UseAddEmail } from '../../../../Hooks/UseData'

const AddEmailTemplates = () => {

    const [templateName, setTemplateName] = useState("");
    const [emailSubject, setEmailSubject] = useState("");
    const [emailContent, setEmailContent] = useState("");
    const [Status, setStatus] = useState("");



    const { mutate } = UseAddEmail()

    const handlePost = (e) => {
        e.preventDefault()
        console.log(templateName, emailSubject, emailContent, Status);
        // console.log(ReligionName)
        console.log(Status)
        const data = {
            "templateName":
                templateName,
            "emailSubject":
                emailSubject,
            "emailContent":
                emailContent,
            "Status":
                Status
        }

        mutate(data)
    }



    return (
        <>
            <div className='text-gray-600 font-bold' >
                Add Email Templates
            </div>

            <div className='paper' >
                <form
                    onSubmit={handlePost}
                    action="post">
                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[140px]' > Template Name</span>
                        <input
                            value={templateName}
                            onChange={(e) => setTemplateName(e.target.value)}
                            placeholder='Template Name'
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[140px]' > Email Subject</span>
                        <input
                            value={emailSubject}
                            onChange={(e) => setEmailSubject(e.target.value)}
                            placeholder='Email Subject'
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[140px]' > Email Content</span>
                        <input
                            value={emailContent}
                            onChange={(e) => setEmailContent(e.target.value)}
                            placeholder='Email Subject'
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
                            className='text-white p-2 bg-[#0099CC]' >
                            <button
                                type='submit'>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddEmailTemplates