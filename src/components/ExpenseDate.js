import "./expenseDate.css"

function ExpenseDate (props) {
    const day = props.date.getDay();
    const month = props.date.getMonth();
    const year = props.date.getFullYear();

    return (
            <div className="expense-item__date">
                <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div>
            </div>
    );
}

export default ExpenseDate;