// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onChange = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <div>
          <h1>Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="firstname">Enter the Phrase</label>
            <input type="text" id="firstname" onChange={this.onChange} />
          </div>
          <div>
            <p>No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
