import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFiler from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [SelectedYear, setSelectedYear] = useState("2021");

    const selectedYearHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredExpenses = props.data.filter(
        (expense) => expense.date.getFullYear().toString() === SelectedYear
    );

    // let expensesContent = <p>No expense Found.</p>;
    // if (filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     ));
    // }

    return (
        <Card className="expenses">
            <ExpensesFiler
                selected={SelectedYear}
                onSelectedYear={selectedYearHandler}
            />
            {/* Here We will creating new Component for managing all things what we discussed below */}
            <ExpensesList data={filteredExpenses} />

            {/* {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))} */}
            {/* Here we have to add conditional statement for any null data */}

            {/* {filteredExpenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            )} */}
            {/* Now convert this Ternary operator to simpler and sorter version */}
            {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
            {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))} */}
            {/* Here && will use as if 1st condition is true then it executes  */}

            {/* Now for very simpler version we will dynamically do all things */}
            {/* {expensesContent} */}
        </Card>
    );
}

export default Expenses;
