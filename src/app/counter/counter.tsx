import * as React from 'react'
import * as style from './counter.scss'

export default class CounterComponent extends React.Component {
  public state = {
    counter: 0,
  }

  public increment = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  public decrement = () => {
    this.setState({ counter: this.state.counter - 1 })
  }

  public render() {
    const { counter } = this.state

    return (
      <div>
        Counter: {counter}
        <button onClick={this.increment} className={style.counter}>
          +
        </button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
