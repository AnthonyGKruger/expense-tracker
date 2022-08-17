import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	const { title, amount, id, date } = props;

	return (
		<Card className="expense-item" key={id}>
      <ExpenseDate date={date}/>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">R{amount}</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;
