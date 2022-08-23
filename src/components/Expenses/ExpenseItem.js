import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	const { title, amount, id, date } = props;

	return (
		<li>
			<Card className="expense-item" key={id}>
				<ExpenseDate date={date} />
				<div className="expense-item__description">
					<h2>{title}</h2>
					<div className="expense-item__price">R{amount}</div>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
