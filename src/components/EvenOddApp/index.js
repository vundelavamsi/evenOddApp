// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, evenOdd: 'Even'}

  onIncrement = () => {
    const randomNumber = Math.floor(Math.random(1, 100) * 100)
    // console.log(randomNumber)
    this.setState(prevState => {
      //   console.log(prevState.count)
      if ((prevState.count + randomNumber) % 2 === 0) {
        return {count: prevState.count + randomNumber, evenOdd: 'Even'}
      }
      return {count: prevState.count + randomNumber, evenOdd: 'Odd'}
    })
  }

  render() {
    const {count, evenOdd} = this.state
    return (
      <div className="even-odd-bg-container">
        <div className="even-odd-card-container">
          <h1 className="count">Count {count}</h1>
          <p className="number-category">Count is {evenOdd}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
