import React from 'react'
import ReactDOM from 'react-dom'
import App from './comp/App'
import './style.css'
import Timer from './comp/Timer';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Timer h={0} m={0} s={0}/>, document.getElementById('timer'));