import React, { useContext } from 'react';
import ExpenseContext from '../context/ExpenseContext';

export default function Table() {
    const { expense } = useContext(ExpenseContext);

    return (
        <div className="p-5">
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
                        {expense.length > 0 ? (
                            expense.map((item, index) => (
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
