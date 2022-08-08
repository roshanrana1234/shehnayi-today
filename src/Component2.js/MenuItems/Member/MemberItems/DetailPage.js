import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { BsPrinterFill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { UseData } from '../../../../Hooks/UseData';


const DetailPage = () => {

    const { data } = UseData()

    return (
        <>

            <div className='flex gap-5 ' >

                <button className='bg-[#4CC3D9] p-2 flex items-center gap-3 text-white' >
                    <span><FaArrowLeft /></span>
                    Back To List
                </button>

                <div className='p-1  flex items-center gap-3 text-gray-500 ' >
                    <span
                        className='text-3xl'
                    ><BsPrinterFill /></span>
                    <span className='font-bold' >
                        Print Profile
                    </span>
                </div>
            </div>



            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    Anamika Gour (SH1568)
                </div>
                <span>
                    <RiArrowDownSLine />
                </span>
            </div>



            <div className='grid grid-cols-2  ' >

                <div>
                    {
                        data.data?.foundUsers.map((value, index) => {
                            return <div key={index}>
                                <div className='shadow-xl p-3'>
                                    <div
                                        className='lg:border  p-3 lg:shadow-2xl overflow-auto'
                                    >
                                        <div className='grid grid-cols-3 '>
                                            <div>gender</div>
                                            <div
                                                className='place-content-center grid '
                                            >:</div>
                                            <div>{value.gender}</div>
                                        </div>
                                        <br />

                                        <div className='grid grid-cols-3'>
                                            <div>Mobile</div>

                                            <div
                                                className='place-content-center grid'
                                            >:</div>
                                            <div>{value.phone}</div>
                                        </div>
                                        <br />

                                        <div className='grid grid-cols-3'>
                                            <div>Religion Name</div>

                                            <div
                                                className='place-content-center grid'
                                            >:</div>
                                            <div>{value.religion}</div>
                                        </div>
                                        <br />
                                        <div className='grid grid-cols-3'>
                                            <div>Caste Name</div>

                                            <div
                                                className='place-content-center grid'
                                            >:</div>
                                            <div>Sindhi</div>
                                        </div>
                                        <br />
                                        <div className='grid grid-cols-3'>
                                            <div>Mother Tongue</div>

                                            <div
                                                className='place-content-center grid'
                                            >:</div>
                                            <div>{value.BasicInformation.motherTongue}</div>
                                        </div>
                                        <br />
                                        <div className='grid grid-cols-3'>
                                            <div>Marital Status</div>

                                            <div
                                                className='place-content-center grid'
                                            >:</div>
                                            <div>{value.BasicInformation.maritalStatus}</div>
                                        </div>
                                        <br />
                                        <div className='grid grid-cols-3'>
                                            <div>Assing To Staff</div>

                                            <div
                                                className='place-content-center grid'
                                            >:</div>
                                            <div>{value.assignedTo}</div>
                                        </div>
                                        <br />
                                        <div className='grid grid-cols-3'>
                                            <div>Plan Name</div>

                                            <div
                                                className='place-content-center grid'
                                            >:</div>
                                            <div>{value.planname}</div>
                                        </div>
                                        <br />
                                        <div className='grid grid-cols-3'>
                                            <div>Plan Expired On</div>

                                            <div
                                                className='place-content-center grid'
                                            >:</div>
                                            <div>{value.planeexpire}</div>
                                        </div>
                                        <br />


                                    </div>





                                </div>
                            </div>
                        })
                    }
                </div>


                {/* right */}
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste fuga, quod commodi laboriosam libero! Voluptatum veniam optio quia architecto minus, molestiae perspiciatis, sint, hic autem consequatur et nemo eligendi.
                </div>

            </div>
        </>
    )
}

export default DetailPage