import React, { useState } from 'react'

const PopUpFreshTask = ({ visible, onClose }) => {
    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose();
    };
    if (!visible) return null;


    return (
        <>
            <div
                id='container'
                className='fixed inset-0 bg-opacity-30 backdrop-blur-sm text-white z-20 h-screen
            flex justify-center items-center 
          '
                onClick={handleOnClose}
            >
                <div className="bg-white text-black p-2 rounded-lg border shadow-2xl lg:w-5/12 w-7/12"
                >
                    <div>
                        Information
                    </div>

                    <button
                        className='bg-red-500 p-2 rounded-lg my-4'
                        onClick={onClose}
                    >
                        Cancle
                    </button>
                </div>
            </div>
        </>
    )
}

export default PopUpFreshTask