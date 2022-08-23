import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [userInput, setUserInput] = useState({
		enteredTitle: "",
		enteredAmount: "",
		enteredDate: "",
	});

	const [formEnabled, setFormEnabled] = useState(false);

	const date = new Date();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const day = date.toLocaleString("en-US", { day: "2-digit" });
	const minDate = `${year}-${month}-${day}`;
	const maxDate = `${year + 2}-${month}-${day}`;

	const titleChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, enteredTitle: event.target.value };
		});
	};

	const amountChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, enteredAmount: event.target.value };
		});
	};

	const dateChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, enteredDate: event.target.value };
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: userInput.enteredTitle,
			amount: +userInput.enteredAmount,
			date: new Date(userInput.enteredDate),
		};

		props.onSaveExpenseData(expenseData);

		setUserInput({
			enteredTitle: "",
			enteredAmount: "",
			enteredDate: "",
		});

		toggleForm();
	};

	const toggleForm = () => {
		setFormEnabled((prevState) => !prevState);
	};

	const formContent = (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						onChange={titleChangeHandler}
						type="text"
						value={userInput.enteredTitle}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						onChange={amountChangeHandler}
						min="0.01"
						step="0.01"
						value={userInput.enteredAmount}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="date"
						onChange={dateChangeHandler}
						min={minDate}
						max={maxDate}
						value={userInput.enteredDate}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={toggleForm} type="button">Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);

	return formEnabled ? (
		formContent
	) : (
		<button onClick={toggleForm}>Add Expense</button>
	);
};

export default ExpenseForm;
