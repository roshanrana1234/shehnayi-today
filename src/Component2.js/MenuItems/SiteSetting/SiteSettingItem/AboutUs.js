import React from 'react'
import { UseGetAboutUs, UsePostAboutus } from '../../../../Hooks/UseData';

const AboutUs = () => {
    // get
    const { data } = UseGetAboutUs()
    if (data) {
        console.log(data);
        if (data.data) {
            console.log(data.data);
        }
    }


    //    Post
    const { mutate } = UsePostAboutus()

    const handleAbout = () => { console.log(''); }
    return (
        <>
            <div className='paper' >
                <form action="post"
                    onSubmit={handleAbout}
                >


                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' >About Us </span>
                        <input
                            defaultValue={data && data.data && data.data.aboutUs.heading}
                            // value={}
                            // onChange={(e) => setFacebook(e.target.value)}
                            className='p-2 border flex-grow border-[#2ECC71] focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] focus:ring-1 ' type="text" />
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' >Our Message </span>
                        <input
                            defaultValue={data && data.data && data.data.ourMessage.heading}
                            // value={}
                            // onChange={(e) => setFacebook(e.target.value)}
                            className='p-2 border flex-grow border-[#2ECC71] focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] focus:ring-1 ' type="text" />
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' >Description</span>
                        <textarea
                            defaultValue={data && data.data && data.data.ourMessage?.description}
                            className='border flex-grow p-2 rounded-md'
                            description="description" id="" cols="30" rows="4">


                        </textarea>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='fill' >
                        <span
                            className='py-2 lg:w-[270px]' >
                            Cover Image
                        </span>

                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div>
                                <input
                                    // onChange={(e) => setImagelogo(e.target.files[0])}
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

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' >Team </span>
                        <input
                            // value={}
                            // onChange={(e) => setFacebook(e.target.value)}
                            className='p-2 border flex-grow border-[#2ECC71] focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] focus:ring-1 ' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' >Description </span>
                        <textarea
                            defaultValue={data && data.data && data.data.team?.description}
                            // onChange={(e) => setDescription(e.target.value)}
                            className='border flex-grow p-2 rounded-md'
                            description="description" id="" cols="30" rows="4">


                        </textarea>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    {/* Multiple image input */}
                    <div className='fill' >
                        <span
                            className='py-2 lg:w-[270px]' >
                            Images
                        </span>

                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div>
                                <input
                                    // onChange={(e) => setImagelogo(e.target.files[0])}
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

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    {/* Our Vision */}

                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' >Our Vision </span>
                        <input
                            // value={}
                            // onChange={(e) => setFacebook(e.target.value)}
                            placeholder='Our Vision'
                            className='p-2 border flex-grow border-[#2ECC71] focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] focus:ring-1 ' type="text" />
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    {/* Description */}

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' >Description </span>
                        <textarea
                            defaultValue={data && data.data && data.data.Vision?.description}
                            // onChange={(e) => setDescription(e.target.value)}
                            className='border flex-grow p-2 rounded-md'
                            description="description" id="" cols="30" rows="4">


                        </textarea>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />
                    {/* Our Mission */}

                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' >Our Mission  </span>
                        <input
                            // value={}
                            // onChange={(e) => setFacebook(e.target.value)}
                            placeholder='Our Mission '
                            className='p-2 border flex-grow border-[#2ECC71] focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] focus:ring-1 ' type="text" />
                    </div>

                    {/* Description */}
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' >Description </span>
                        <textarea
                            defaultValue={data && data.data && data.data.Mission?.description}
                            // onChange={(e) => setDescription(e.target.value)}
                            className='border flex-grow p-2 rounded-md'
                            description="description" id="" cols="30" rows="4">


                        </textarea>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />
                </form>
            </div>
        </>
    )
}

export default AboutUs