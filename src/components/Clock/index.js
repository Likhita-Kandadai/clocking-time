import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
    console.log('ComponentDidMount Called')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('Component Will Unmount')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    const {date} = this.state
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
