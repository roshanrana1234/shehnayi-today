import React, { useState } from 'react'

const AddNew = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <>

            <div className='text-gray-500 font-bold' >
                Add Member
            </div>

            <div className='overflow-auto flex gap-10 border p-3 lg:justify-evenly lg:overflow-hidden' >
                <button
                    className={toggleState === 1 ? "active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Basic Details</button>
                <button
                    className={toggleState === 2 ? "active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >Residence</button>
                <button
                    className={toggleState === 3 ? "active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >Physical Info</button>
                <button
                    className={toggleState === 4 ? "active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                >Other Info</button>
                <button
                    className={toggleState === 5 ? "active-tabs" : "tabs"}
                    onClick={() => toggleTab(5)}
                >Partner Perference</button>
                <button
                    className={toggleState === 6 ? "active-tabs" : "tabs"}
                    onClick={() => toggleTab(6)}
                >Upload Photos</button>
            </div>

            <div
                className={toggleState === 1 ? "active-content" : "content"}>
                <div className='paper' >

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' > Tax Applicable</span>
                        <div className='flex gap-3 items-center' >
                            <input type="radio" id="yes" name="fav_language" value="yes" />
                            <label for="html">Yes</label>
                            <input type="radio" id="no" name="fav_language" value="no" />
                            <label for="css">No</label>
                        </div>
                    </div>


                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='fill' >
                        <span
                            className='py-2 lg:w-[270px]' >Enter First Name</span>
                        <input
                            placeholder='Enter First Name'

                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='fill' >
                        <span
                            className='py-2 lg:w-[270px]' >Enter Last Name *</span>
                        <input
                            placeholder='Enter Last Name '

                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='fill' >
                        <span
                            className='py-2 lg:w-[270px]' >Enter Your Email Id </span>
                        <input
                            required
                            placeholder='Enter Your Email Id * '

                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="email" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' > Marital Status</span>
                        <div className='flex gap-3 items-center' >
                            <input type="radio" id="yes" name="fav_language" value="yes" />
                            <label for="html">Unmarried</label>
                            <input type="radio" id="no" name="fav_language" value="no" />
                            <label for="css">Widow/Widower</label>
                            <input type="radio" id="no" name="fav_language" value="no" />
                            <label for="css">Divorcee</label>
                            <input type="radio" id="no" name="fav_language" value="no" />
                            <label for="css">Separated</label>
                        </div>
                    </div>


                    <br />
                    <hr className=' w-full bg-black' />
                    <br />
                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' >Total Children</span>
                        <select
                            className='p-2 border flex-grow'
                            name="" id="">
                            <option value="inida">Select Total Children</option>

                        </select>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' >  Children Status</span>
                        <div className='flex gap-3 items-center' >
                            <input type="radio" id="yes" name="fav_language" value="yes" />
                            <label for="html">Living with me</label>
                            <input type="radio" id="no" name="fav_language" value="no" />
                            <label for="css">Not living with me</label>

                        </div>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' > Mother Tongue</span>
                        <select
                            className='p-2 border flex-grow'
                            name="" id="">
                            <option value="inida">Sindhi</option>

                        </select>
                    </div>


                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' > Language Known</span>
                        <select
                            className='p-2 border flex-grow'
                            name="" id="">
                            <option value="inida">Sindhi</option>

                        </select>
                    </div>




                    <div className='fill' >
                        <span
                            className='py-2 lg:w-[270px]'
                        >Date of Birth</span>
                        <div className='flex-grow' >
                            <div className='grid grid-cols-3' >
                                <div>
                                    <select name="" id="">
                                        <option value="1">1</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="" id="">
                                        <option value="1">Jan</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="" id="">
                                        <option value="1">2004</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===================================== */}

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='text-2xl text-red-600 font-bold' >
                        Religious Information
                    </div>


                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' > Religion*</span>
                        <select
                            className='p-2 border flex-grow'
                            name="" id="">
                            <option value="inida">Hindu</option>
                        </select>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' > Caste*</span>
                        <select
                            className='p-2 border flex-grow'
                            name="" id="">
                            <option value="inida"></option>
                        </select>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='fill' >
                        <span
                            className='py-2 lg:w-[270px]' >Sub Caste</span>
                        <input
                            placeholder='Sub Caste'

                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' > Manglik</span>
                        <select
                            className='p-2 border flex-grow'
                            name="" id="">
                            <option value="inida">No</option>
                            <option value="inida">Yes</option>
                            <option value="inida">Maybe</option>
                            <option value="inida">Anshik</option>
                            <option value="inida">Do not Know</option>
                        </select>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' > Star</span>
                        <select
                            className='p-2 border flex-grow'
                            name="" id="">
                            <option value="inida">BHARANI</option>
                            <option value="inida">CHITHIRAI</option>
                            <option value="inida">HASTHAM</option>
                            <option value="inida">KETTAI</option>
                            <option value="inida">MAHAM</option>
                        </select>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' > Horoscope</span>
                        <select
                            className='p-2 border flex-grow'
                            name="" id="">
                            <option value="inida">No</option>
                            <option value="inida">Yes</option>
                            <option value="inida">Do not Know</option>

                        </select>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='fill' >
                        <span
                            className='py-2 lg:w-[270px]' >Gothra</span>
                        <input
                            placeholder='Sub Caste'

                            className='p-2 border flex-grow  focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71]  ' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />



                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' > Moonsing</span>
                        <select
                            className='p-2 border flex-grow'
                            name="" id="">
                            <option value="inida">Dhanu(Sagittarious)</option>
                            <option value="inida">Kanya(Virgo)</option>
                            <option value="inida">Karka(
                                Cancer)</option>
                            <option value="inida">kumbha(
                                Aquarious)</option>
                            <option value="inida">Makar(
                                Capricorn)</option>
                            <option value="inida">Meen(
                                Pisces)</option>


                        </select>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />
                    {/* ========================================== */}


                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='text-2xl text-red-600 font-bold' >
                        Education / Occupation Details
                    </div>


                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' > Education</span>
                        <select
                            className='p-2 border flex-grow'
                            name="" id="">
                            <option value="inida">AA</option>
                            <option value="inida">AAS</option>
                            <option value="inida">ABA</option>
                            <option value="inida">ADBus</option>
                            <option value="inida">ADIT</option>

                        </select>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' > Employee In</span>
                        <select
                            className='p-2 border flex-grow'
                            name="" id="">
                            <option value="inida">Private copmpany</option>
                            <option value="inida">Government/ Public Sector</option>
                            <option value="inida">Defense / Civil Services</option>
                            <option value="inida">Business / Self Employed</option>
                            <option value="inida">not Working</option>

                        </select>
                    </div>


                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' > Annual Income</span>
                        <select
                            className='p-2 border flex-grow'
                            name="" id="">
                            <option value="inida">Rs 50,000 - 1,00,0000 </option>
                            <option value="inida">Rs 1,00,000 - 2,00,000</option>
                            <option value="inida">Rs 2,00,000 - 4,00,000</option>
                            <option value="inida">7,00,000 - 10,00,000</option>
                            <option value="inida">10,00,000 - 15,00,000</option>

                        </select>
                    </div>

                    <br />
                    <hr className=' w-full bg-black' />
                    <br />


                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' >Occupation </span>
                        <select
                            className='p-2 border flex-grow'
                            name="" id="">
                            <option value="inida">Accounting  Professional Others</option>
                            <option value="inida">Actor</option>
                            <option value="inida">Admin professional</option>
                            <option value="inida">ADMINISTRATION and HR</option>
                            <option value="inida">Adverstising Professional</option>

                        </select>
                    </div>


                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    <div className='flex flex-col lg:flex-row text-gray-500'>
                        <span
                            className='py-2 lg:w-[270px]' > Designation</span>
                        <select
                            className='p-2 border flex-grow'
                            name="" id="">
                            <option value="inida">Accoutant </option>
                            <option value="inida">Assistant</option>
                            <option value="inida">Business Analyst</option>
                            <option value="inida">Centified Ethical Hacker</option>
                            <option value="inida">Chairman</option>

                        </select>
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
            </div>

            {/* =========New Residence */}

            <div
                className={toggleState === 2 ? "active-content" : "content"}>

                <div className='paper' >
                    <div className='text-red-700 p-3 bg-red-200'>
                        Please fill Basic detail first
                    </div>
                </div>
            </div>

            <div
                className={toggleState === 3 ? "active-content" : "content"}>
                <div className='paper' >
                    <div className='text-red-700 p-3 bg-red-200'>
                        Please fill Basic detail first
                    </div>
                </div>
            </div>

            <div
                className={toggleState === 4 ? "active-content" : "content"}>
                <div className='paper' >
                    <div className='text-red-700 p-3 bg-red-200'>
                        Please fill Basic detail first
                    </div>
                </div>
            </div>
            <div
                className={toggleState === 5 ? "active-content" : "content"}>
                <div className='paper' >
                    <div className='text-red-700 p-3 bg-red-200'>
                        Please fill Basic detail first
                    </div>
                </div>
            </div>
            <div
                className={toggleState === 6 ? "active-content" : "content"}>
                <div className='paper' >
                    <div className='text-red-700 p-3 bg-red-200'>
                        Please fill Basic detail first
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddNew