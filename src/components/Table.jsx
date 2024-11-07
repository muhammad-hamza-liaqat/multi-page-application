import React, { useEffect, useState } from 'react';

export default function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('expenses')) || [];
        setData(storedData);
    }, []);

    return (
        <div className="p-5">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-xs md:text-sm">ID</th>
                            <th className="py-2 px-4 border-b text-xs md:text-sm">Name</th>
                            <th className="py-2 px-4 border-b text-xs md:text-sm">Amount</th>
                            <th className="py-2 px-4 border-b text-xs md:text-sm">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((expense, index) => (
                                <tr key={index} className="text-center">
                                    <td className="py-2 px-4 border-b text-xs md:text-sm">{index + 1}</td>
                                    <td className="py-2 px-4 border-b text-xs md:text-sm">{expense.name}</td>
                                    <td className="py-2 px-4 border-b text-xs md:text-sm">{expense.amount} PKR</td>
                                    <td className="py-2 px-4 border-b text-xs md:text-sm">{expense.expenseCategory}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="py-2 px-4 text-center text-xs md:text-sm">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
