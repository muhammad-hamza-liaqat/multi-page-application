import React, { useContext, useState } from 'react';
import ExpenseContext from '../context/ExpenseContext';

export default function Table() {
    const { expense, allowedCategories } = useContext(ExpenseContext); 
    const [filter, setFilter] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredData = filter
        ? expense.filter((item) => item.expenseCategory === filter)
        : expense;

    return (
        <div className="p-5">
            <div className="flex justify-center mb-4">
                <select
                    value={filter}
                    onChange={handleFilterChange}
                    className="p-2 border rounded"
                >
                    <option value="">All Categories</option>
                    {allowedCategories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mx-auto w-full max-w-3xl overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Amount (PKR)</th>
                            <th className="py-3 px-4 text-left">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4">{item.name}</td>
                                    <td className="py-3 px-4">{item.amount}</td>
                                    <td className="py-3 px-4">{item.expenseCategory}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="py-3 text-center">No expenses found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
