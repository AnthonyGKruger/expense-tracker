import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	const expenses = props.expenses;

	const [filteredYear, setFilteredYear] = useState("2020");

	const filteredExpenses = expenses.filter(
		(expense) => expense.date.getFullYear().toString() === filteredYear
	);

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses}/>
		<ExpensesList expenses={filteredExpenses}/>
		</Card>
	);
};

export default Expenses;
