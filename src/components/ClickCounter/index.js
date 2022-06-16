// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  IncreaseCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked
          <span className="spanStyle">{`${count} `}</span>
          times
        </h1>
        <p className="description">click the button to increase the count!</p>

        <button type="button" className="button" onClick={this.IncreaseCount}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
