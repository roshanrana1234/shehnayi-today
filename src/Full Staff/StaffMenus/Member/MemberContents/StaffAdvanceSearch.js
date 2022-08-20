import React from 'react'

const StaffAdvanceSearch = () => {
    return (
        <>
            <div className='w-10/12 lg:w-10/12 m-auto ' >
                <div className='paper'>

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[140px]' > Gender</span>
                        <div className='flex gap-3 items-center' >
                            <input type="radio" id="yes" name="fav_language" value="yes" />
                            <label for="html">All</label>
                            <input type="radio" id="no" name="fav_language" value="no" />
                            <label for="css">Male</label>
                            <input type="radio" id="no" name="fav_language" value="no" />
                            <label for="css">Female</label>
                        </div>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[140px]' > Featured Member</span>
                        <div className='flex gap-3 items-center' >
                            <input type="radio" id="yes" name="fav_language" value="yes" />
                            <label for="html">All</label>
                            <input type="radio" id="no" name="fav_language" value="no" />
                            <label for="css">Featured</label>
                            <input type="radio" id="no" name="fav_language" value="no" />
                            <label for="css">Unfeatured</label>
                        </div>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[140px]' >keyword </span>
                        <input
                            placeholder='Search with  Name , Matri ID , Email mobile, Country Name, State Name, City Name.'
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] ' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='fill items-center  '>
                        <span
                            className='py-2 lg:w-[140px] w-full' >Register Between </span>
                        <input
                            placeholder='Start Date'
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] ' type="date" />

                        <div
                            className='font-bold px-4'
                        >To</div>

                        <input
                            placeholder='Start Date'
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] ' type="date" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='fill items-center '>
                        <span
                            className='py-2 lg:w-[140px] w-full' >Age Range </span>
                        <select
                            className='p-2 border lg:flex-grow lg-w-auto '
                            name="" id="">
                            <option value="inida">18 Year</option>
                            <option value="inida">19 year</option>
                            <option value="inida">20 year</option>
                            <option value="inida">21 year</option>
                            <option value="inida">22 year
                            </option>
                            <option value="inida">23 year</option>
                        </select>

                        <div
                            className='font-bold px-4'
                        >To</div>

                        <select
                            className='p-2 border lg:flex-grow lg-w-auto'
                            name="" id="">
                            <option value="inida">18 Year</option>
                            <option value="inida">19 year</option>
                            <option value="inida">20 year</option>
                            <option value="inida">21 year</option>
                            <option value="inida">22 year
                            </option>
                            <option value="inida">23 year</option>
                        </select>
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='fill items-center '>
                        <span
                            className='py-2 lg:w-[140px] w-full' >Height Range </span>
                        <select
                            className='p-2 border lg:flex-grow lg-w-auto '
                            name="" id="">
                            <option value="inida">From</option>
                            <option value="inida">Below 4ft</option>
                            <option value="inida">4ft 1in</option>
                            <option value="inida">4ft 2in</option>
                            <option value="inida">4ft 3in
                            </option>
                            <option value="inida">4ft 4in</option>
                        </select>

                        <div
                            className='font-bold px-4'
                        >To</div>

                        <select
                            className='p-2 border lg:flex-grow lg-w-auto'
                            name="" id="">
                            <option value="inida">To </option>
                            <option value="inida"> Below 4ft </option>
                            <option value="inida">4ft 1inar</option>
                            <option value="inida">4ft 2inar</option>
                            <option value="inida">4ft 3inar
                            </option>
                            <option value="inida">4ft 4inar</option>
                        </select>
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' >Mother Tongue </span>
                        <input
                            placeholder=''
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] ' type="password" />
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[140px]' >Marital Status</span>
                        <select
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] '
                            name="" id="">
                            <option value="inida">Unmarried</option>
                            <option value="inida">Widow/Widower</option>
                            <option value="inida">Divorcee</option>
                            <option value="inida">Seperated</option>

                        </select>

                    </div>


                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[140px]' >Religion</span>
                        <select
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] '
                            name="" id="">
                            <option value="inida">Hindu</option>
                        </select>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[140px]' >Caste</span>
                        <input
                            placeholder='Hindu'
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="text" />
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[140px]' >Occupation</span>
                        <select
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] '
                            name="" id="">
                            <option value="inida">Accounting Professional Others</option>
                            <option value="inida">Actor</option>
                            <option value="inida">Admin professional</option>
                            <option value="inida">ADMINSTRATION and HR</option>

                        </select>

                    </div>


                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[140px]' >Country</span>
                        <select
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] '
                            name="" id="">
                            <option value="inida">India</option>
                        </select>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[140px]' >State </span>
                        <input
                            placeholder=''
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] ' type="text" />
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[140px]' >City </span>
                        <input
                            placeholder=''
                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] ' type="text" />
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex gap-4' >
                        <button
                            className='text-white bg-blue-500 p-1 rounded-md px-4'
                        >Submit</button>
                        <button
                            className='text-white bg-[#ffffff] p-1 rounded-md px-4'
                        >Close</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default StaffAdvanceSearch


