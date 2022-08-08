import React from 'react'

const HomePageText = () => {
    return (
        <>
            <div className='p-3 text-gray-500 font-bold' >
                Update Homepage Text
            </div>
            <div className='paper' >

                {/*  HomePage Banner Title */}
                <div className='fill '>
                    <span
                        className='py-1 lg:w-[270px]' >Homepage Banner Title *</span>
                    <input
                        placeholder='Exclusively For'
                        className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-green-800  ' type="text" />
                </div>
                <br />
                <hr className=' w-full bg-black' />
                <br />

                {/* HomePage Banner Subtitle */}

                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Homepage Banner Subtitle</span>
                    <textarea
                        className='p-2 border flex-grow focus:outline-none focus:border-sky-500 focus:ring-green-800 '
                        name="" id="" cols="30" rows="4">
                        We are a startup in the filed of Match Making services Exclusively for Sindhi Community. Our biggest strength is our strong network in regions of Madhya Pradesh, Gujarat, Rajasthan and Maharashtra. We use technology to assist our customers in most efficient way.
                    </textarea>
                </div>
                <br />
                <hr className=' w-full bg-black' />
                <br />

                {/* First Section  */}
                <div className='fill '>
                    <span
                        className='py-1 lg:w-[270px]' >First Section Title *</span>
                    <input
                        placeholder='Find Your Dream Person'
                        className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-green-800  ' type="text" />
                </div>
                <br />
                <hr className=' w-full bg-black' />
                <br />

                {/* First Section Subtitle  */}
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >First Section Subtitle</span>
                    <textarea
                        className='p-2 border flex-grow focus:outline-none focus:border-sky-500 focus:ring-green-800 '
                        name="" id="" cols="30" rows="4">
                        Dreaming about someone special may be just a reflection of your thoughts and feelings.

                    </textarea>
                </div>

                {/* Sign Up Text *  */}
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Sign Up Text *</span>
                    <textarea
                        className='p-2 border flex-grow focus:outline-none focus:border-sky-500 focus:ring-green-800 '
                        name="" id="" cols="30" rows="4">
                        Register For Free and Create your Profile
                    </textarea>
                </div>

                {/* Contact Text **/}
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Contact Text *</span>
                    <textarea
                        className='p-2 border flex-grow focus:outline-none focus:border-sky-500 focus:ring-green-800 '
                        name="" id="" cols="30" rows="4">
                        Connect with matches you like
                    </textarea>
                </div>

                {/* Interact Text * */}
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Interact Text *</span>
                    <textarea
                        className='p-2 border flex-grow focus:outline-none focus:border-sky-500 focus:ring-green-800 '
                        name="" id="" cols="30" rows="4">
                        Become a Premium member and Start a conversation
                    </textarea>
                </div>


                <br />
                <hr className=' w-full bg-black' />
                <br />



                {/* First Section  */}
                <div className='fill '>
                    <span
                        className='py-1 lg:w-[270px]' >Fifth Section Title *</span>
                    <input
                        placeholder='Are you trying our planning tools ?'
                        className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-green-800  ' type="text" />
                </div>
                <br />
                <hr className=' w-full bg-black' />
                <br />

                {/*Fifth Section Subtitle */}
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Fifth Section Subtitle</span>
                    <textarea
                        className='p-2 border flex-grow focus:outline-none focus:border-sky-500 focus:ring-green-800 '
                        name="" id="" cols="30" rows="4">
                        Shehnayi.com is emerging as one of the most trusted brand for match making services in Sindhi Community.
                    </textarea>
                </div>


                <br />
                <hr className=' w-full bg-black' />
                <br />


                {/*Fifth Section Subtitle */}
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Six Section Description</span>
                    <textarea
                        className='p-2 border flex-grow focus:outline-none focus:border-sky-500 focus:ring-green-800 '
                        name="" id="" cols="30" rows="4">
                        Shehnayi ek platform hai jo Parampara ko Dhyan mai rakh kar aur technology ka use karke aapke Jeevan Saathi dhundne ki prakriya ko aasan bana deta hai.
                    </textarea>
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

export default HomePageText