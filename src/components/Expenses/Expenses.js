import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFiler from "./ExpensesFilter";

function Expenses(props) {
    const [SelectedYear, setSelectedYear] = useState("2021");

    const selectedYearHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredExpenses = props.data.filter(
        (expense) => expense.date.getFullYear().toString() === SelectedYear
    );

    return (
        <Card className="expenses">
            <ExpensesFiler
                selected={SelectedYear}
                onSelectedYear={selectedYearHandler}
            />
            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;
