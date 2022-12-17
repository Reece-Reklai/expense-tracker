import React, { useState } from 'react'
import Items from './Items'
import './Expense.css'
import Filter from './Filter'
import ExpensesChart from './ExpensesChart'
import Wrapper from '../UserInterface/Wrapper'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')

  const filteredHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredList = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Wrapper className='expenses'>
      <Filter
        selected={filteredYear}
        onChangeFilter={filteredHandler}
      ></Filter>
      <ExpensesChart expenses={filteredList} />
      {filteredList.length === 0 ? (
        <p>No Expenses Found</p>
      ) : (
        filteredList.map((expense) => (
          <Items
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Wrapper>
  )
}

export default Expenses
