import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { BsPrinterFill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


const DetailPage = () => {
    const [open, setOpen] = useState(true);
    const [about, setAbout] = useState(true);
    const [Religion, setReligion] = useState(true)
    const [Loaction, setLoaction] = useState(true)
    const [contact, setcontact] = useState(true)
    const [Education, setEducation] = useState(true)
    const [family, setfamily] = useState(true)
    const [Basic, setBasic] = useState(true)
    const [ReligionP, setReligionP] = useState(true)
    const [EducationP, setEducationP] = useState(true)
    const [LoactaionP, setLoactaionP] = useState(true)
    const [Member, setMember] = useState(true)
    const [MemberP, setMemberP] = useState(true)
    const [MemberHoroscope, setMemberHoroscope] = useState(true)
    const [MemberId, setMemberId] = useState(true)
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
                        <button onClick={() => window.print()} target="_blank" >
                            Print Profile
                        </button>
                    </span>
                </div>
            </div>



            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    Anamika Gour (SH1568)
                </div>
                <span
                    onClick={() => setOpen(!open)}
                    className={`${open ? "rotate-[180deg]" : null} duration-300`}
                >
                    <RiArrowDownSLine />
                </span>
            </div>

            <div className={` ${open ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >

                <div className='lg:shadow-xl p-3'>
                    <div
                        className='lg:border lg:shadow-lg  p-3  overflow-auto'
                    >
                        <div className='grid grid-cols-3 '>
                            <div>gender</div>
                            <div
                                className='place-content-center grid '
                            >:</div>
                            {/* <div>{value.gender}</div> */}
                            <div>male</div>
                        </div>
                        <br />

                        <div className='grid grid-cols-3'>
                            <div>Mobile</div>

                            <div
                                className='place-content-center grid'
                            >:</div>
                            {/* <div>{value.phone}</div> */}
                        </div>
                        <br />

                        <div className='grid grid-cols-3'>
                            <div>Religion Name</div>

                            <div
                                className='place-content-center grid'
                            >:</div>
                            {/* <div>{value.religion}</div> */}
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
                            {/* <div>{value.BasicInformation.motherTongue}</div> */}
                        </div>
                        <br />
                        <div className='grid grid-cols-3'>
                            <div>Marital Status</div>

                            <div
                                className='place-content-center grid'
                            >:</div>
                            {/* <div>{value.BasicInformation.maritalStatus}</div> */}
                        </div>
                        <br />
                        <div className='grid grid-cols-3'>
                            <div>Assing To Staff</div>

                            <div
                                className='place-content-center grid'
                            >:</div>
                            {/* <div>{value.assignedTo}</div> */}
                        </div>
                        <br />
                        <div className='grid grid-cols-3'>
                            <div>Plan Name</div>

                            <div
                                className='place-content-center grid'
                            >:</div>
                            {/* <div>{value.planname}</div> */}
                        </div>
                        <br />
                        <div className='grid grid-cols-3'>
                            {/* <div>Plan Expired On</div> */}

                            <div
                                className='place-content-center grid'
                            >:</div>
                            {/* <div>{value.planeexpire}</div> */}
                        </div>
                        <br />


                    </div>





                </div>

                {/* right */}
                <div className='shadow-xl p-3'>
                    <div
                        className='lg:border lg:shadow-lg  p-3  overflow-auto'
                    >
                        <div className='grid grid-cols-3 '>
                            <div>gender</div>
                            <div
                                className='place-content-center grid '
                            >:</div>
                            {/* <div>{value.gender}</div> */}
                            <div>male</div>
                        </div>
                        <br />

                        <div className='grid grid-cols-3'>
                            <div>Mobile</div>

                            <div
                                className='place-content-center grid'
                            >:</div>
                            {/* <div>{value.phone}</div> */}
                        </div>
                        <br />

                        <div className='grid grid-cols-3'>
                            <div>Religion Name</div>

                            <div
                                className='place-content-center grid'
                            >:</div>
                            {/* <div>{value.religion}</div> */}
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
                            {/* <div>{value.BasicInformation.motherTongue}</div> */}
                        </div>
                        <br />
                        <div className='grid grid-cols-3'>
                            <div>Marital Status</div>

                            <div
                                className='place-content-center grid'
                            >:</div>
                            {/* <div>{value.BasicInformation.maritalStatus}</div> */}
                        </div>
                        <br />
                        <div className='grid grid-cols-3'>
                            <div>Assing To Staff</div>

                            <div
                                className='place-content-center grid'
                            >:</div>
                            {/* <div>{value.assignedTo}</div> */}
                        </div>
                        <br />
                        <div className='grid grid-cols-3'>
                            <div>Plan Name</div>

                            <div
                                className='place-content-center grid'
                            >:</div>
                            {/* <div>{value.planname}</div> */}
                        </div>
                        <br />
                        <div className='grid grid-cols-3'>
                            {/* <div>Plan Expired On</div> */}

                            <div
                                className='place-content-center grid'
                            >:</div>
                            {/* <div>{value.planeexpire}</div> */}
                        </div>
                        <br />


                    </div>





                </div>
            </div>


            {/* About */}
            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    About Us
                </div>
                <span
                    onClick={() => setAbout(!about)}
                    className={`${about ? "rotate-[180deg]" : null} duration-300`}
                >
                    <RiArrowDownSLine />
                </span>
            </div>
            <div className={` ${about ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >
                About
            </div>


            {/* Religious Information  */}
            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    Religious Information
                </div>
                <span
                    onClick={() => setReligion(!Religion)}
                    className={`${Religion ? "rotate-[180deg]" : null} duration-300`}
                >
                    <RiArrowDownSLine />
                </span>
            </div>
            <div className={` ${Religion ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >
                Religion
            </div>

            {/* Loaction Information  */}

            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    Location  Information
                </div>
                <span
                    onClick={() => setLoaction(!Loaction)}
                    className={`${Loaction ? "rotate-[180deg]" : null} duration-300`}
                >
                    <RiArrowDownSLine />
                </span>
            </div>
            <div className={` ${Loaction ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >
                Location
            </div>

            {/* Contact Information  */}
            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    Contact  Information
                </div>
                <span
                    onClick={() => setcontact(!contact)}
                    className={`${contact ? "rotate-[180deg]" : null} duration-300`}
                >
                    <RiArrowDownSLine />
                </span>
            </div>

            <div className={` ${contact ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >
                Contact
            </div>


            {/* Eductaion / Profession Information  */}
            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    Education / Profession Information
                </div>
                <span
                    onClick={() => setEducation(!Education)}
                    className={`${Education ? "rotate-[180deg]" : null} duration-300`}
                >
                    <RiArrowDownSLine />
                </span>
            </div>

            <div className={` ${Education ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >
                Education
            </div>

            {/* Family Details  */}
            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    Family Details
                </div>
                <span
                    onClick={() => setfamily(!family)}
                    className={`${family ? "rotate-[180deg]" : null} duration-300`}
                >
                    <RiArrowDownSLine />
                </span>
            </div>
            <div className={` ${family ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >
                family
            </div>


            {/* Partner Preference */}
            <div className='p-2 text-red-600 text-2xl font-semibold' >
                Partner Preference
            </div>


            {/* Basic Preference */}
            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    Basic Preference
                </div>
                <span
                    onClick={() => setBasic(!Basic)}
                    className={`${Basic ? "rotate-[180deg]" : null} duration-300`}
                >
                    <RiArrowDownSLine />
                </span>
            </div>
            <div className={` ${Basic ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >
                Basic Preference
            </div>

            {/* Religious Preferences */}
            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    Religious Preference
                </div>
                <span
                    onClick={() => setReligionP(!ReligionP)}
                    className={`${ReligionP ? "rotate-[180deg]" : null} duration-300`}
                >
                    <RiArrowDownSLine />
                </span>
            </div>
            <div className={` ${ReligionP ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >
                Religion  Preference
            </div>

            {/* Education / Occupation Preferences */}
            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    Education / Occupation Preference
                </div>
                <span
                    onClick={() => setEducationP(!EducationP)}
                    className={`${EducationP ? "rotate-[180deg]" : null} duration-300`}
                >
                    <RiArrowDownSLine />
                </span>
            </div>
            <div className={` ${EducationP ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >
                Education / Occupation   Preference
            </div>

            {/* Location Preferences */}
            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    Location Preferences
                </div>
                <span
                    onClick={() => setLoactaionP(!LoactaionP)}
                    className={`${LoactaionP ? "rotate-[180deg]" : null} duration-300`}
                >
                    <RiArrowDownSLine />
                </span>
            </div>
            <div className={` ${LoactaionP ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >
                Location   Preference
            </div>

            {/* member cover Preferences */}
            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    Member Cover Photo
                </div>
                <span
                    onClick={() => setMember(!Member)}
                    className={`${Member ? "rotate-[180deg]" : null} duration-300`}
                >
                    <RiArrowDownSLine />
                </span>
            </div>
            <div className={` ${Member ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >
                Member Cover Photo
            </div>

            {/* member  Preferences */}
            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    Member  Photo
                </div>
                <span
                    onClick={() => setMemberP(!MemberP)}
                    className={`${MemberP ? "rotate-[180deg]" : null} duration-300`}
                >
                    <RiArrowDownSLine />
                </span>
            </div>
            <div className={` ${MemberP ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >
                Member  Photo
            </div>


            {/* member  Horoscope */}
            <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                <div>
                    Member  Horoscope
                </div>
                <span
                    onClick={() => setMemberHoroscope(!MemberHoroscope)}
                    className={`${MemberHoroscope ? "rotate-[180deg]" : null} duration-300`}
                >
                    <RiArrowDownSLine />
                </span>
            </div>
            <div className={` ${MemberHoroscope ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >
                Member Horoscope
            </div>



            {/* member  ID Proof */}
            <div className='mb-20' >

                <div className='flex p-5  bg-[#0099cc] text-white font-bold text-xl items-center justify-between my-3 ' >
                    <div>
                        Member  ID Proof
                    </div>
                    <span
                        onClick={() => setMemberId(!MemberId)}
                        className={`${MemberId ? "rotate-[180deg]" : null} duration-300`}
                    >
                        <RiArrowDownSLine />
                    </span>
                </div>
                <div className={` ${MemberId ? "block" : "hidden"} grid lg:grid-cols-2 border shadow-md text-gray-600 capitalize font-semibold duration-300`} >
                    Member ID Proof
                </div>
            </div>

        </>
    )
}

export default DetailPage