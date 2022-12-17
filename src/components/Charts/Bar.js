import './Bar.css'

const Bar = (props) => {
  let barfill = '0%'
  if (props.maxValue > 0) {
    barfill = Math.round((props.value / props.maxValue) * 100) + '%'
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar_inner'>
        <div className='chart-bar_fill' style={{height: barfill}}></div>
      </div>
      <div className='chart-bar_label'>{props.label}</div>
    </div>
  )
}

export default Bar
