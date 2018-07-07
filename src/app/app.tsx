import * as React from 'react'
import * as style from './index.scss'
import Counter from './counter/counter'

const AppComponent = () => (
    <div className={style.app}>
        Hello World!
        <button>Hiya!</button>
        <Counter />
    </div>
)

export default AppComponent 