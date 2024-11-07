import React from 'react'
import ExpenseContext from "../context/ExpenseContext"
export default function CounterProvider({ children }) {
    const [expense, setExpense] = useState({
        name: "",
        amount: 0,
        expenseCategory: ""
    })

    const updateExpense = (name, amount, expenseCategory) => {
        setExpense({
            name,
            amount,
            expenseCategory
        })
    }

    return (
        <ExpenseContext.Provider value={{ name, amount, expenseCategory }}>
            {children}
        </ExpenseContext.Provider>
    )

}
