import * as React from 'react'
import Counter from './counter/counter'
import * as style from './index.scss'

const AppComponent = () => (
  <div className={style.app}>
    Hello World!
    <button>Hiya!</button>
    <Counter />
  </div>
)

export default AppComponent
