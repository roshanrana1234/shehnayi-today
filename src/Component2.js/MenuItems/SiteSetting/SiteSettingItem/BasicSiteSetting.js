import { Mutation, mutate } from '@tanstack/react-query'
import React, { useState } from 'react'
import { UseData, UsepatchBasicSiteSetting } from '../../../../Hooks/UseData'

const BasicSiteSetting = () => {
    // const [facebook, setFacebook] = useState("");
    // const [twitter, setTwitter] = useState("")
    const { isLoading, data, isError, error } = UseData()

    const { mutate } = UsepatchBasicSiteSetting()

    if (isLoading) {
        return <h1>Loading</h1>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }



    return (
        <>

            {/* <div>
                {
                    data?.data.map((value, index) => {
                        return <div key={index}>
                            {value.title}
                        </div>
                    })
                }
            </div> */}

            <div className='p-3 text-gray-500' >
                Update Basic Site Settings
            </div>
            <div className='paper' >
                <div className='fill '>
                    <span
                        className='py-2 lg:w-[270px]' >Web Name</span>
                    <input
                        placeholder='https://www.shehnayi.com/'
                        className='p-2 border flex-grow' type="text" />
                </div>
                <br />
                <hr className=' w-full bg-black' />
                <br />
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Web Friendly Name</span>
                    <input
                        placeholder='shehnayi'
                        className='p-2 border flex-grow' type="text" />
                </div>
                <br />
                <hr className=' w-full bg-black' />
                <br />
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Website Title</span>
                    <input
                        placeholder='Exclusive for Sindhi Community'
                        className='p-2 border flex-grow' type="text" />
                </div>

                <br />
                <hr className=' w-full bg-black' />
                <br />
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Website Description</span>
                    <textarea
                        className='border flex-grow'
                        name="" id="" cols="30" rows="4">
                        We are a startup in the filed of Match Making services Exclusively for Sindhi Community. Our biggest strength is our strong network in regions of Madhya Pradesh, Gujarat, Rajasthan and Maharashtra. We use technology to assist our customers in most efficient way.
                    </textarea>
                </div>

                <br />
                <hr className=' w-full bg-black' />
                <br />
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Footer Text</span>
                    <input
                        placeholder='Copyright 2022 By shehnayi.com. All Rights Reserved'
                        className='p-2 border flex-grow' type="text" />
                </div>


                <br />
                <hr className=' w-full bg-black' />
                <br />
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Website Description</span>
                    <textarea
                        className='border flex-grow'
                        name="" id="" cols="30" rows="4">
                        They say marriages are made in heaven and we at Shehnayi Website, are trying to bring together that someone who is made for you. We welcome you all to celebrate with us the Success Stories of the innumerable married couples who have found their dream partner through Shehnayi Website. We wish them the very best for a happy and successful married life.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consequuntur voluptatum rerum ipsam quaerat explicabo tempore architecto corrupti aliquam esse, iure nemo repudiandae, reiciendis quasi eligendi ratione dicta, perferendis doloremque?
                    </textarea>
                </div>

                <br />
                <hr className=' w-full bg-black' />
                <br />
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Contact No</span>
                    <input
                        placeholder='*******538'
                        className='p-2 border flex-grow' type="text" />
                </div>

                <br />
                <hr className=' w-full bg-black' />
                <br />
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Website Description</span>
                    <textarea
                        className='border flex-grow'
                        name="" id="" cols="30" rows="4">
                        Shehnayi Matrimonial Service
                    </textarea>
                </div>

                <br />
                <hr className=' w-full bg-black' />
                <br />
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Full Address</span>
                    <textarea
                        className='border flex-grow'
                        name="" id="" cols="30" rows="4">
                        4-5, Gufa Mandir Rd, Nayapura, Lalghati, Bhopal, Madhya Pradesh 462030
                    </textarea>
                </div>

                <br />
                <hr className=' w-full bg-black' />
                <br />
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Map Address</span>
                    <textarea
                        className='border flex-grow'
                        name="" id="" cols="30" rows="4">
                        Bhopal, Madhya Pradesh
                    </textarea>
                </div>


                <br />
                <hr className=' w-full bg-black' />
                <br />
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Footer Text</span>
                    <input
                        placeholder='<strong>Shehnayi</strong></br>4-5, Gufa Mandir Rd, Nayapura, Lalghati, Bhopal, Madhya Pradesh 462030'
                        className='p-2 border flex-grow' type="text" />
                </div>

                <br />
                <hr className=' w-full bg-black' />
                <br />
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Footer Text</span>
                    <select
                        className='p-2 border flex-grow'
                        name="" id="">
                        <option value="inida">india Rupee</option>
                        <option value="inida">Select Default Currency</option>
                        <option value="inida">Canadian Dollar</option>
                        <option value="inida">Japanese Yen</option>
                        <option value="inida">Pound</option>
                        <option value="inida">US Dollar</option>
                    </select>

                </div>


                <br />
                <hr className=' w-full bg-black' />
                <br />
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
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Tax Name</span>
                    <input
                        placeholder='GST'
                        className='p-2 border flex-grow' type="text" />
                </div>


                <br />
                <hr className=' w-full bg-black' />
                <br />
                <div className='flex flex-col lg:flex-row text-gray-500'>
                    <span
                        className='py-2 lg:w-[270px]' >Service Tax (%)</span>
                    <input
                        placeholder='18'
                        className='p-2 border flex-grow' type="text" />
                </div>

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

            </div>
            <br /><br /><br />
        </>
    )
}

export default BasicSiteSetting