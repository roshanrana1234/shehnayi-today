import React, { useState } from 'react'
import { UseSMS } from '../../../../Hooks/UseData';




const SMSTemplatePage = () => {
    const { mutate } = UseSMS()

    // {
    //     "templateName": "type: String",
    //     "TemplateId": "type: String",
    //     "SmsContent": "type: String",
    //     "Status": true,
    //     "_id": "62f615108e622979f2ad1a65",
    //     "__v": 0
    // }

    const [templateName, setTemplateName] = useState("");
    const [TemplateId, setTemplateId] = useState("");
    const [SmsContent, setSmsContent] = useState("");
    const [Status, setStatus] = useState("");


    const handlePost = (e) => {

        e.preventDefault()
        // console.log(templateName, emailSubject, emailContent, Status);
        // console.log(ReligionName)
        console.log(Status)
        const data = {
            "templateName":
                templateName,
            "TemplateId":
                TemplateId,
            "SmsContent":
                SmsContent,
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
                            className='py-2 lg:w-[140px]' > setTemplateId</span>
                        <input
                            value={TemplateId}
                            onChange={(e) => setTemplateId(e.target.value)}
                            placeholder='Email Subject'
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[140px]' > SmsContent</span>
                        <input
                            value={SmsContent}
                            onChange={(e) => setSmsContent(e.target.value)}
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

export default SMSTemplatePage