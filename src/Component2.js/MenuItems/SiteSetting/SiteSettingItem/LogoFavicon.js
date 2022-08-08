import React from 'react'

// favicon logo watermark footer
const LogoFavicon = () => {
    return (
        <>
            <div className='paper' >
                <div className='fill' >
                    <span
                        className='py-2 lg:w-[270px]' > Upload Logo</span>

                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div  >
                            <input
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


            </div>

            {/* Upload Favicon */}
            <div className='paper' >
                <div className='fill' >
                    <span
                        className='py-2 lg:w-[270px]' > Upload Favicon</span>

                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div  >
                            <input
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



            </div>


            {/* Upload WaterMark */}
            <div className='paper' >
                <div className='fill' >
                    <span
                        className='py-2 lg:w-[270px]' > Upload Footer Logo</span>

                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div  >
                            <input
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



            </div>



            {/* Upload Watermark */}
            <div className='paper' >
                <div className='fill' >
                    <span
                        className='py-2 lg:w-[270px]' > Upload Footer Logo</span>


                    <div  >
                        <input
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



            </div>


            <div className='paper' >
                <div className='fill' >
                    <div className='flex gap-5' >
                        <button
                            className='bg-[#0099CC] p-3 text-white' >Submit</button>
                        <button
                            className='bg-[#ffffff] hover:bg-slate-500 hover:text-white p-3 border'
                        >Back</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoFavicon