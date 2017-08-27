import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
  constructor(props){
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    e.preventDefault()
    console.log('resort', this.refs.resort.value)
    console.log('date', this.refs.date.value)
    console.log('powder', this.refs.powder.checked)
    console.log('backcountry', this.refs.backcountry.checked)
  }

  render() {
    const { resort, date, powder, backcountry } = this.props
    return (
      <form onSubmit={this.submit} className="add-day-form">
        <label htmlFor="resort">Resort Name</label>
        <input type="text" id="resort" ref="resort" required defaultValue={resort} />
        <br />
        <label htmlFor="date">Date</label>
        <input type="date" id="date" ref="date" required defaultValue={date} />
        <div>
          <label htmlFor="powder">Powder Day</label>
          <input type="checkbox" id="powder" ref="powder" defaultChecked={powder} />
        </div>
        <div>
          <label htmlFor="backcountry">Backcountry Day</label>
          <input type="checkbox" id="backcountry" ref="backcountry" defaultChecked={backcountry} />
        </div>
        <button>Add Day</button>
      </form>
    )
  }
}

AddDayForm.defaultProps = {
  resort: "Kirkwood",
  date: "2017-07-23",
  powder: true,
  backcountry: false
}
