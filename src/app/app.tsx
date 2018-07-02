import * as React from 'react'
import * as style from './index.scss'

const AppComponent = () => (
    <div className={style.app}>
        Hello World!
        <button className={style.app + 'btn'}>Hi!</button>
    </div>
)

export default AppComponent 