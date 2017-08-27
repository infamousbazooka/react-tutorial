import { PropTypes, Component } from 'react'

export const AddDayForm = ({ resort, date, powder, backcountry }) => {

  let _resort, _date, _powder, _backcountry
  const submit = (e) => {
    e.preventDefault()
    console.log('resort', _resort.value)
    console.log('date', _date.value)
    console.log('powder', _powder.checked)
    console.log('backcountry', _backcountry.checked)
  }

  return (
    <form onSubmit={submit} className="add-day-form">
      <label htmlFor="resort">Resort Name</label>
      <input type="text" id="resort" ref={input => _resort = input} required defaultValue={resort} />
      <br />
      <label htmlFor="date">Date</label>
      <input type="date" id="date" ref={input => _date = input} required defaultValue={date} />
      <div>
        <label htmlFor="powder">Powder Day</label>
        <input type="checkbox" id="powder" ref={input => _powder = input} defaultChecked={powder} />
      </div>
      <div>
        <label htmlFor="backcountry">Backcountry Day</label>
        <input type="checkbox" id="backcountry" ref={input => _backcountry = input} defaultChecked={backcountry} />
      </div>
      <button>Add Day</button>
    </form>
  )
}

AddDayForm.defaultProps = {
  resort: "Kirkwood",
  date: "2017-07-23",
  powder: true,
  backcountry: false
}
