import React, { useState, useContext } from 'react';
import ExpenseContext from '../context/ExpenseContext';

export default function Summarybar() {
    const { addExpense, totalAmount } = useContext(ExpenseContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        amount: '',
        name: '',
        expenseCategory: ''
    });

    const allowedCategories = ['Medical Expense', 'Personal', 'Food Expense', 'Utilities', 'Others'];

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const saveExpense = (e) => {
        e.preventDefault();
        if (formData.name && formData.amount && formData.expenseCategory) {
            addExpense(formData);
            setFormData({ amount: '', name: '', expenseCategory: '' });
            closeModal();
        }
    };

    return (
        <>
            <div className="main flex justify-center mt-5 p-3">
                <div className="w-full max-w-lg flex justify-between items-center">
                    <div>
                        Balance: {totalAmount} PKR
                    </div>
                    <button
                        className="p-1 rounded-xl hover:bg-emerald-800 hover:text-white md:p-2 bg-slate-400 text-sm md:rounded-2xl md:hover:bg-gray-600"
                        onClick={openModal}
                    >
                        Add Expense
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Add Expense</h2>
                        <form onSubmit={saveExpense}>
                            <div className="mb-4">
                                <label>Amount</label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter amount"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label>Category</label>
                                <select
                                    name="expenseCategory"
                                    value={formData.expenseCategory}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                    required
                                >
                                    <option value="">Select a category</option>
                                    {allowedCategories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    className="bg-gray-400 text-white p-2 rounded hover:bg-gray-500"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-emerald-600 text-white p-2 rounded hover:bg-emerald-700"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
