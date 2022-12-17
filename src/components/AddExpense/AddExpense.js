import React, { useState } from 'react';

import CostForm from './CostForm';
import './AddExpense.css';

const AddExpense = (props) => {
  const [currentBool, setBool] = useState(false);

  const onClickHandler = () => {
    if (currentBool === false) {
      setBool(true)
    } else {
      setBool(false)
    }
  }

  const onCancelHandler = () => {
    setBool(false)
  }

  const ExpenseHandler = (enteredExpense) => {
    const expense = {
      ...enteredExpense,
      id: Math.random().toString(),
    }
    props.onAddExpense(expense)
    setBool(false)
  }

  return (
    <div className='add-expense'>
      {currentBool === false ? (
        <button onClick={onClickHandler}>Add Expense</button>
      ) : (
        <CostForm
          onSaveCancel={onCancelHandler}
          onSaveExpenseData={ExpenseHandler}
        />
      )}
    </div>
  )
}

export default AddExpense
