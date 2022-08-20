import React, { useState } from 'react'
import { UseBasicsiteSetting } from '../../../../Hooks/UseData'


const BasicSiteSetting = () => {
    const [banner, setBanner] = useState("");
    const [description, setDescription] = useState("")
    const [lookingfor, seteLookingfor] = useState("")
    const [age, setAge] = useState("")
    const [religion, setReigion] = useState("")
    const [language, setLanguage] = useState("")


    const { mutate } = UseBasicsiteSetting()

    const handleSubmitPost = (e) => {
        e.preventDefault()
        // console.log(banner, description, lookingfor, age, religion, language);
        // const data = {
        //     "header": {
        //         "description": description,
        //         "banner": banner
        //     },
        //     "quickSearch": {
        //         "lookingfor": lookingfor,
        //         "age": age,
        //         "religion": religion,
        //         "language": language
        //     },
        // }
        const data = new FormData()
        data.append('banner', banner)
        data.append('description', description)
        data.append('lookingfor', lookingfor)
        data.append('age', age)
        data.append('language', language)
        data.append('religion', religion)
        console.log(data.get("description"));
        mutate(data)
    }




    return (
        <>



            <div className='p-3 text-gray-500' >
                Update Basic Site Settings
            </div>

            <div className='paper' >
                <form action="post"
                    // id='resume-form'
                    onSubmit={handleSubmitPost}
                >

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' >Website Description</span>
                        <textarea

                            onChange={(e) => setDescription(e.target.value)}
                            className='border flex-grow'
                            description="description" id="" cols="30" rows="4">

                            We are a startup in the filed of Match Making services Exclusively for Sindhi Community. Our biggest strength is our strong network in regions of Madhya Pradesh, Gujarat, Rajasthan and Maharashtra. We use technology to assist our customers in most efficient way.
                        </textarea>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    {/* Banner */}
                    <div className='fill' >

                        <span
                            className='py-2 lg:w-[270px]' >
                            Banner
                        </span>

                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div>
                                <input
                                    onChange={(e) => setBanner(e.target.files[0])}
                                    banner="banner"
                                    className='p-2 border flex-grow' type="file" />
                                <div>
                                    Allowed Maximum File size up to 3MB. File type jpg | png | jpeg | gif | bmp.
                                </div>
                                <div>
                                    Note: File size must be 300px * 40px.
                                </div>
                            </div>

                            <div className='w-56 h-46' >
                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                            </div>
                        </div>


                    </div>

                    {/*lookingfor, age, religion, language */}
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[140px]' > Status</span>
                        <div className='flex gap-3 items-center' >
                            <input type="radio" lookingfor="lookingfor" value={'male'}
                                onChange={(e) => seteLookingfor(e.target.value)}
                            />
                            <label>Male</label>
                            <input type="radio" namlookingfore="lookingfor"
                                value={'female'}
                                onChange={(e) => seteLookingfor(e.target.value)}
                            />
                            <label>Female</label>
                        </div>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' >Age</span>
                        <input
                            onChange={(e) => setAge(e.target.value)}
                            age="age"
                            placeholder='Of age'
                            className='p-2 border flex-grow' type="text" />
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' >
                            Religion
                        </span>
                        <input

                            onChange={(e) => setReigion(e.target.value)}
                            religion="religion"
                            placeholder='Religion'
                            className='p-2 border flex-grow' type="text" />
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' >
                            Language
                        </span>
                        <input
                            language="language"
                            onChange={(e) => setLanguage(e.target.value)}
                            placeholder='Sindhi'
                            className='p-2 border flex-grow' type="text" />
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex gap-6 w-full' >
                        <div
                            className='text-white p-2 bg-[#0099CC]' >
                            <button>Submit</button>
                        </div>
                        <div
                            className=' p-2 border'
                        >
                            <button>Back</button>
                        </div>
                    </div>

                </form>
            </div>
            <br /><br /><br />
        </>
    )
}

export default BasicSiteSetting