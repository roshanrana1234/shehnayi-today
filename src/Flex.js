import React from 'react'

const Flex = () => {
    return (
        <>
            <div className='flex overflow-auto m-auto w-11/12  ' >
                <div className='flex flex-col p-3 min-w-[200px]    bg-red-500 justify-center items-center' >
                    <div>
                        All
                    </div>
                    <div>
                        (0)
                    </div>
                </div>
                <div className='flex flex-col p-3 min-w-[200px]    bg-red-500 justify-center items-center' >
                    <div>
                        Approved List
                    </div>
                    <div>
                        (200)
                    </div>
                </div>
                <div className='flex flex-col p-3 min-w-[200px]    bg-red-500 justify-center items-center' >
                    <div>
                        Unapproved List
                    </div>
                    <div>
                        (200)
                    </div>
                </div>
                <div className='flex flex-col p-3 min-w-[200px]    bg-red-500 justify-center items-center' >
                    <div>
                        Paid List
                    </div>
                    <div>
                        (20)
                    </div>
                </div>
                <div className='flex flex-col p-3 min-w-[200px]    bg-red-500 justify-center items-center' >
                    <div>
                        Suspended List
                    </div>
                    <div>
                        (20)
                    </div>
                </div>
            </div>
        </>
    )
}

export default Flex