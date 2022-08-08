import React, { useState } from 'react'
import { mutate } from '@tanstack/react-query'
import { UsePostSocial } from '../../../../Hooks/UseData'

const SocialMedia = () => {
    const [facebook, setFacebook] = useState("");
    const [twitter, setTwitter] = useState("");
    const [linkedin, setLinkedin] = useState("")
    const [instagram, setInstagram] = useState("")
    const { mutate } = UsePostSocial()

    const socialSubmit = (e) => {
        e.preventDefault()
        // console.log(facebook, twitter, linkedin, instagram);
        const social = { facebook, twitter, linkedin, instagram }
        mutate(social)
    }

    return (
        <>
            <div className='paper' >
                <form action="post"
                    onSubmit={socialSubmit}
                >

                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' >Facebook Link</span>
                        <input
                            value={facebook}
                            onChange={(e) => setFacebook(e.target.value)}
                            placeholder='https://business.facebook.com/latest/self_view?asset_id=571244573288356&business_id=515545959061999&nav_ref=pages_classic_isolated_section_inbox_redirect'

                            className='p-2 border flex-grow border-[#2ECC71] focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] focus:ring-1 ' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    {/* Twitter */}
                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' >Twitter Link</span>
                        <input
                            value={twitter}
                            onChange={(e) => setTwitter(e.target.value)}
                            placeholder='http://www.twitter.com'
                            className='p-2 border flex-grow border-[#2ECC71] focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] focus:ring-1 ' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    {/* Linkedin Link */}
                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' >LinkedIn</span>
                        <input
                            value={linkedin}
                            onChange={(e) => setLinkedin(e.target.value)}
                            placeholder='https://in.linkedin.com/'
                            className='p-2 border flex-grow border-[#2ECC71] focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] focus:ring-1 ' type="text" />
                    </div>
                    <br />
                    <hr className=' w-full bg-black' />
                    <br />

                    {/* Instragram */}

                    <div className='fill '>
                        <span
                            className='py-2 lg:w-[270px]' > Instagram</span>
                        <input
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
                            placeholder='https://www.instagram.com/shehnayi.com_/'
                            className='p-2 border flex-grow border-[#2ECC71] focus:outline-none focus:border-sky-500 focus:ring-[#2ECC71] focus:ring-1 ' type="text" />
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
                            <button

                            >Back</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SocialMedia