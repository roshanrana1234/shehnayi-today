import React from 'react'

const HomePageBannerText = () => {
    return (
        <>
            <div className='paper' >
                <div className='fill' >
                    <span
                        className='py-2 lg:w-[270px]' >Wedding Wendor Banner *</span>

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
                <br />



                {/* Wedding Wendor Title *  */}
                <div className='fill '>
                    <span
                        className='py-1 lg:w-[270px]' >Wedding Wendor Title *</span>
                    <input
                        placeholder='Personalized Match Making'
                        className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-green-800  ' type="text" />
                </div>
                <br />
                <hr className=' w-full bg-black' />
                <br />

                {/*Wedding Wendor Subtitle * */}
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Wedding Wendor Subtitle *</span>
                    <textarea
                        className='p-2 border flex-grow focus:outline-none focus:border-sky-500 focus:ring-green-800 '
                        name="" id="" cols="30" rows="4">
                        Shaadi Tahanji, Zimmedari Asanji!!!

                    </textarea>
                </div>

                <br />
                <hr className=' w-full bg-black' />
                <br />

                {/*  */}
                <div className='fill' >
                    <span
                        className='py-2 lg:w-[270px]' > Mobile Matrimony Banner *</span>

                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div  >
                            <input
                                className='p-2 border flex-grow' type="file" />
                            <div>
                                Allowed Maximum File size up to 3MB. File type jpg | png | jpeg | gif | bmp.
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


                {/*Mobile Matrimony Description * */}
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Mobile Matrimony Description *</span>
                    <textarea
                        className='p-2 border flex-grow focus:outline-none focus:border-sky-500 focus:ring-green-800 '
                        name="" id="" cols="30" rows="4">
                        The next generation of matchmaking is here!
                        Find your right match with Shehnayi.com as we proudly say in Sindhi, Shaadi Tahanji, Zimmedari Asanji!!!

                    </textarea>
                </div>

                <br />
                <hr className=' w-full bg-black' />
                <br />


                {/*  */}
                <div className='fill' >
                    <span
                        className='py-2 lg:w-[270px]' > App Plan Banner *</span>

                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div  >
                            <input
                                className='p-2 border flex-grow' type="file" />
                            <div>
                                Allowed Maximum File size up to 3MB. File type jpg | png | jpeg | gif | bmp.
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

                <div className='flex gap-6 w-full' >
                    <div
                        className='text-white p-2 bg-[#0099CC] hover:bg-blue-600' >
                        <button>Submit</button>
                    </div>
                    <div
                        className=' p-2 border hover:bg-slate-500 hover:text-white'
                    >
                        <button>Back</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePageBannerText