import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
	const expenses = props.expenses;

	let expensesContent = expenses.length ? (
		<ul className="expenses-list">
			{expenses.map((expense) => {
				return (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				);
			})}
		</ul>
	) : (
		<h2 className='expenses-list__fallback'>No Expenses Found</h2>
	);

	return expensesContent;
};

export default ExpensesList;
