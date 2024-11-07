import React from 'react'

export default function Summarybar() {
    const addExpense = () => {
        alert("clicked")
    }

    return (
        <>
            <div className="main flex justify-center mt-5">
                <div className="w-full max-w-lg flex justify-between items-center">
                    <div>
                        Balance: {100} PKR
                    </div>
                    <div>
                        <button className=' p-2 bg-slate-400 rounded-2xl' onClick={addExpense}>Add Expense</button>
                    </div>
                </div>
            </div>
        </>
    )
}
