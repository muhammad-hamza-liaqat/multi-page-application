import React, { useEffect, useState } from 'react';

export default function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('expenses')) || [];
        setData(storedData);
    }, [data]);

    return (
        <div className="p-5">
            <div className="mx-auto w-full max-w-3xl overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Name</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Amount</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((expense, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4 text-sm text-gray-800">{expense.name}</td>
                                    <td className="py-3 px-4 text-sm text-gray-800">{expense.amount} PKR</td>
                                    <td className="py-3 px-4 text-sm text-gray-800">{expense.expenseCategory}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="py-3 px-4 text-center text-sm text-gray-500">
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
