import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

const Expenses = (props) => {
	const expenses = props.expenses;

	const expenseItems = expenses.map((item, i) => {
		return (
			<ExpenseItem
				id={i}
				title={item.title}
				amount={item.amount}
				date={item.date}
			/>
		);
	});

	return <Card className="expenses">{[...expenseItems]}</Card>;
};

export default Expenses;
