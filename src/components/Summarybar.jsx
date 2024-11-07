import React from 'react'

export default function Summarybar() {
    const addExpense = () => {
        alert("clicked")
    }

    return (
        <>
            <div className="main flex justify-center mt-5 p-3">
                <div className="w-full max-w-lg flex justify-between items-center">
                    <div>
                        Balance: {100} PKR
                    </div>
                    <div>
                        <button className='p-1 rounded-xl hover:bg-emerald-800 hover:text-white md:p-2 bg-slate-400 text-sm md:rounded-2xl md:hover:bg-gray-600' onClick={addExpense}>Add Expense</button>
                    </div>
                </div>
            </div>
        </>
    )
}
