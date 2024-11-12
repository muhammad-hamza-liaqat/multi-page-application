import React, { useState } from 'react'

export default function BasicModal() {
    const [isOpen, setIsOpen] = useState(false);
    const openModalBox = () => {
        setIsOpen(true)
    }
    const closeModalBox = () => {
        setIsOpen(false)
    }
    return (
        <>
            <div className="main">
                <p>
                    Basic Modal functionality
                </p>
                <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={openModalBox}>Open Modal</button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                        <h2 className="text-lg font-semibold mb-4">Modal Title</h2>
                        <p className="text-gray-600 mb-6">This is a simple modal.</p>
                        <button
                            onClick={closeModalBox}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )

            }
        </>
    )
}
