import React from 'react'
import { useState } from 'react'
import { UsePostLogo } from '../../../../Hooks/UseData';

const LogoFavicon = () => {
    const { mutate } = UsePostLogo()
    const [favicon, setImageFav] = useState("");
    const [logo, setImagelogo] = useState("");
    const [watermark, setImageWat] = useState("");
    const [footer, setImageFoot] = useState("");

    const handleSubmitPost = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('favicon', favicon)
        data.append('logo', logo)
        data.append('watermark', watermark)
        data.append('footer', footer)

        mutate(data)
    }


    return (
        <>
            <div className='paper' >
                <form action="post"
                    onSubmit={handleSubmitPost}>

                    <div className='fill' >

                        <span
                            className='py-2 lg:w-[270px]' >
                            Upload Logo
                        </span>

                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div>
                                <input
                                    onChange={(e) => setImagelogo(e.target.files[0])}
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



                    {/* Upload Favicon */}

                    <div className='fill' >
                        <span
                            className='py-2 lg:w-[270px]' > Upload Favicon</span>

                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div  >
                                <input
                                    onChange={(e) => setImageFav(e.target.files[0])}
                                    className='p-2 border flex-grow' type="file" />
                                <div>
                                    No file chosen
                                    Allowed Maximum File size up to 3MB. File type jpg | png | jpeg | gif | bmp.
                                </div>
                                <div>
                                    Note: File size must be 75px * 75px
                                </div>
                            </div>
                            <div className='w-56 h-46' >
                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                            </div>
                        </div>


                    </div>
                    <br />
                    <hr className=' w-full bg-black' />

                    {/* Upload WaterMark */}

                    <div className='fill' >
                        <span
                            className='py-2 lg:w-[270px]' > Upload Footer Logo</span>

                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div  >
                                <input onChange={(e) => setImageFoot(e.target.files[0])}
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

                    {/* Upload Watermark */}

                    <div className='fill' >
                        <span
                            className='py-2 lg:w-[270px]' > Upload watermark Logo</span>


                        <div  >
                            <input
                                onChange={(e) => { setImageWat(e.target.files[0]) }}
                                className='p-2 border flex-grow' type="file" />
                            <div>
                                Allowed Maximum File size up to 3MB. File type jpg | png | jpeg | gif | bmp.
                            </div>
                            <div>
                                Note: File size must be 20px * 200px.
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />

                    <div className='flex gap-6 w-full' >
                        <div
                            className='text-white p-2 bg-[#0099CC] hover:bg-blue-600' >
                            <button>Submit</button>
                        </div>
                        <div
                            className=' p-2 border hover:bg-slate-500 hover:text-white'
                        >
                            <button

                            >Back</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default LogoFavicon