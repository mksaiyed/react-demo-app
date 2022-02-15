import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
    const [IsClicked, setIsClicked] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        console.log("Data at NewExpense", expenseData);
        props.onAddExpense(expenseData);
        setIsClicked(false);
    };

    const showFormHandler = () => {
        setIsClicked(true);
    };

    const closeFormHandler = () => {
        setIsClicked(false);
    };

    return (
        <div className="new-expense">
            {!IsClicked && (
                <button onClick={showFormHandler}>Add New Expense</button>
            )}
            {IsClicked && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={closeFormHandler}
                />
            )}
        </div>
    );
}

export default NewExpense;
