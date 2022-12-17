import Date from './Date'
import Wrapper from '../UserInterface/Wrapper'
import './Items.css'

const Item = (props) => {
  return (
    <Wrapper className='item'>
      <Date date={props.date}></Date>
      <h2>{props.title}</h2>
      <div className='item_description'>
        <div className='item_price'>{props.amount}</div>
      </div>
    </Wrapper>
  )
}

export default Item
