import '../stylesheets/ui.scss'

const percentToDecimal = (decimal) => {
  return((decimal * 100) + "%")
}
const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total, powder, backcountry, goal}) => (
  <div className="ski-day-count">
    <div className="total-days">
      <span>{total}</span>
      <span>5 days</span>
    </div>
    <div className="powder-days">
      <span>{powder}</span>
      <span>2 days</span>
    </div>
    <div className="backcountry-days">
      <span>{backcountry}</span>
      <span>1 hiking days</span>
    </div>
    <div>
      <span>{calcGoalProgress(total, goal)}</span>
    </div>
  </div>
)
