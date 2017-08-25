import React from 'react'
import '../stylesheets/ui.scss'

export const SkiDayCount = React.createClass({
  render(){
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
          <span>5 days</span>
        </div>
        <div className="powder-days">
          <span>{this.props.powder}</span>
          <span>2 days</span>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry}</span>
          <span>1 hiking days</span>
        </div>
        <div>
          <span>{this.props.goal}</span>
        </div>
      </div>
    )
  }
})
