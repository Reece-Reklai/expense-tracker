import React, { useState } from 'react'
import Expense from './components/Expense/Expense'
import AddExpense from './components/AddExpense/AddExpense'

function App() {
  const data = [
    {
      id: '1',
      title: 'Steaks',
      amount: 94.12,
      date: new Date(2021, 8, 13),
    },
    { id: '2', title: 'PC', amount: 245.7, date: new Date(2021, 3, 5) },
    { id: '3', title: 'PS5', amount: 500.49, date: new Date(2018, 6, 10) },
    { id: '4', title: 'XBOX', amount: 137.25, date: new Date(2019, 7, 5) },
    { id: '5', title: 'MAC', amount: 1000.0, date: new Date(2019, 10, 2) },
    { id: '6', title: 'LINUX', amount: 7.77, date: new Date(2022, 4, 3) },
  ];

  const [expenses, setExpenses] = useState(data)

  const expenseHandler = (currentExpense) => {
    setExpenses((prevExpenses) => {
      return [currentExpense, ...prevExpenses]
    })
  }

  return (
    <React.Fragment>
      <AddExpense onAddExpense={expenseHandler} />
      <Expense items={expenses}></Expense>
    </React.Fragment>
  )
}

export default App
