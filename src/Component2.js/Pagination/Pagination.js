import React, { useState, useEffect } from 'react'


const Pagination = ({ showPerPage, onPaginationChange, total }) => {
    const [counter, setCounter] = useState(1)
    const [numberOfButtons, setNumberOfButtons] = useState(Math.ceil(total / showPerPage))
    // console.log(showPerPage);


    useEffect(() => {
        // console.log("object");
        const value = showPerPage * counter;
        // console.log("start value", value - showPerPage)
        // console.log("end value", value)
        onPaginationChange(value - showPerPage, value)
    }, [counter])

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1)
            } else {
                setCounter(counter - 1)
            }
        } else if (type === "next") {
            if (numberOfButtons === counter) {
                setCounter(counter)
            } else {
                setCounter(counter + 1)

            }
        }
    }

    return (
        <>


            <div
                className='flex justify-center '
            >
                <button
                    onClick={() => onButtonClick("prev")}
                    className='text-white bg-blue-600 p-2 rounded-lg my-10 hover:bg-blue-700'
                >Previous</button>
                <div className='flex gap-3 px-3 overflow-auto items-center' >

                    {
                        new Array(numberOfButtons).fill("").map((el, index) => (
                            <div
                                className={`border p-2 rounded my-10 ${index + 1 === counter ? "bg-gray-300" : null}`}
                                onClick={() => setCounter(index + 1)}
                            >
                                {index + 1}
                            </div>
                        ))
                    }
                </div>
                <button
                    onClick={() => onButtonClick("next")}
                    className='text-white bg-blue-600 p-2 rounded-lg my-10 hover:bg-blue-700'
                >Next</button>
            </div>
        </>
    )
}

export default Pagination