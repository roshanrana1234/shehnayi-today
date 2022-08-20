import React, { useState } from 'react'

const PageToggles = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <>
            {/* Style it  */}
            <div className='overflow-scroll flex border  lg:justify-evenly lg:overflow-hidden ' >

                <div className='flex flex-1 flex-col   gap-1 items-center' >
                    <button
                        className={`${toggleState === 1 ? "active-tabs1" : "tabs"} w-full p-4 border-x-2`}
                        onClick={() => toggleTab(1)}
                    >
                        Page One
                    </button>
                </div>

                <div className='flex-1' >
                    <button
                        className={`${toggleState === 2 ? "active-tabs1" : "tabs"} w-full p-4 border-x-2`}
                        onClick={() => toggleTab(2)}
                    >Page Two</button>
                </div>

                <div className='flex-1' >
                    <button
                        className={`${toggleState === 3 ? "active-tabs1" : "tabs"} w-full p-4 border-x-2`}
                        onClick={() => toggleTab(3)}
                    >Page three</button>

                </div>
                <div className='flex-1' >
                    <button
                        className={`${toggleState === 4 ? "active-tabs1" : "tabs"} w-full p-4 border-x-2`}
                        onClick={() => toggleTab(4)}
                    >Page four</button>

                </div>
                <div className='flex-1' >

                    <button
                        className={`${toggleState === 5 ? "active-tabs1" : "tabs"} w-full p-4 
                        border-x-2`}
                        onClick={() => toggleTab(5)}
                    >Page five</button>
                </div>

            </div>



            {/* Pages */}
            <div
                className={toggleState === 1 ? "active-content" : "content"}>
                <div>Page 1 </div>
            </div>

            <div
                className={toggleState === 2 ? "active-content" : "content"}>
                <div>Page 2 </div>
            </div>

            <div
                className={toggleState === 3 ? "active-content" : "content"}>
                <div>Page 3 </div>
            </div>

            <div
                className={toggleState === 4 ? "active-content" : "content"}>
                <div>Page 4 </div>
            </div>
            <div
                className={toggleState === 5 ? "active-content" : "content"}>
                <div>Page 5 </div>
            </div>

        </>
    )
}

export default PageToggles