import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {id:"e1",title:"Expense 1",date: new Date(2021,2,28), amount: 123},
    {id:"e2",title:"Expense 2",date: new Date(2021,6,28), amount: 456},
    {id:"e3",title:"Expense 3",date: new Date(2021,4,28), amount: 789},
    ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <div className="expenses">
      {
        expenses.map(expense => <ExpenseItem id={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>)
      }
      </div>
    </div>
  );
}

export default App;
