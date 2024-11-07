import React, { useEffect, useState } from 'react';

export default function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('expenses')) || [];
        setData(storedData);
    }, [data]);

    return (
        <div className="p-5">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Amount</th>
                        <th className="py-2 px-4 border-b">Category</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((expense, index) => (
                            <tr key={index} className="text-center">
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">{expense.name}</td>
                                <td className="py-2 px-4 border-b">{expense.amount} PKR</td>
                                <td className="py-2 px-4 border-b">{expense.expenseCategory}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="py-2 px-4 text-center">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
