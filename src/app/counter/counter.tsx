import * as React from 'react'
import * as style from './counter.scss'

export default class CounterComponent extends React.Component {
    state = {
        counter: 0,
    }

    increment = (evt: React.MouseEvent<HTMLButtonElement>) => (
        this.setState({ counter: this.state.counter + 1 })
    )

    decrement = (evt: React.MouseEvent<HTMLButtonElement>) => (
        this.setState({ counter: this.state.counter - 1})
    )

    render () {
        const { counter } = this.state
        return (
            <div>
                Counter: {counter}
                <button onClick={this.increment} className={style.counter}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}