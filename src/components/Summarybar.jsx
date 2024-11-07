import React, { useState } from 'react';

export default function Summarybar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        amount: '',
        name: '',
        expenseCategory: ''
    });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const saveExpense = () => {
        const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
        expenses.push(formData)
        localStorage.setItem("expenses", JSON.stringify(expenses))

        setFormData({
            amount: '',
            name: '',
            expenseCategory: ''
        });
        closeModal();
    };

    return (
        <>
            <div className="main flex justify-center mt-5 p-3">
                <div className="w-full max-w-lg flex justify-between items-center">
                    <div>
                        Balance: {100} PKR
                    </div>
                    <div>
                        <button
                            className="p-1 rounded-xl hover:bg-emerald-800 hover:text-white md:p-2 bg-slate-400 text-sm md:rounded-2xl md:hover:bg-gray-600"
                            onClick={openModal}
                        >
                            Add Expense
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Add Expense</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Amount</label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter amount"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Expense Category</label>
                                <input
                                    type="text"
                                    name="expenseCategory"
                                    value={formData.expenseCategory}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter expense category"
                                />
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
                                    type="button"
                                    className="bg-emerald-600 text-white p-2 rounded hover:bg-emerald-700"
                                    onClick={saveExpense}
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
