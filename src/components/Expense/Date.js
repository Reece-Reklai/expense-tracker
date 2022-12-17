import './Date.css'

const Date = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const day = props.date.toLocaleString('en-US', { day: '2-digit' })
  const year = props.date.getFullYear();
  return (
    <div className='expense-date'>
      <div className='expense_date_month'>{month}</div>
      <div className='expense_date_year'>{year}</div>
      <div className='expense_date_day'>{day}</div>
    </div>
  )
}

export default Date
