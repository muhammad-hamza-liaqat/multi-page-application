import React, { useEffect, useState } from 'react';
import ExpenseContext from '../context/ExpenseContext';

export default function ExpenseProvider({ children }) {
    const [expense, setExpense] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        setExpense(storedExpenses);
    }, []);

    useEffect(() => {
        calculateTotalAmount();
        localStorage.setItem("expenses", JSON.stringify(expense));
    }, [expense]);

    const calculateTotalAmount = () => {
        const total = expense.reduce((sum, item) => sum + Number(item.amount || 0), 0);
        setTotalAmount(total);
    };

    const addExpense = (newExpense) => {
        const updatedExpenses = [...expense, newExpense];
        setExpense(updatedExpenses);
    };

    return (
        <ExpenseContext.Provider value={{ expense, totalAmount, addExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
}
