import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import setZeros from '../funcion'
import App from './App'

let k;

export default class Timer extends Component {
    constructor() {
        super();
        this.state = { h : 0, m : 0, s : 0 }
        let pause = 0;
        this.stop = () => {
            this.setState({h : 0, m : 0, s : 0})
            clearInterval(k);
            ReactDOM.render(<App />, document.getElementById('root'));
        }

        this.checkDone = () => {
            let {h, m, s} = this.state;
            return (h === 0 && m === 0 && s === 0) ? 1 : 0;
        } 

        this.pause = () => {
            if(this.checkDone())
                return;
            pause = 1;
            clearInterval(k);
            ReactDOM.render(<div>PAUSED</div>, document.getElementsByClassName('pause-text')[0]);
        }

        this.play = () => {
            if(pause === 0 || this.checkDone())
               return;
           pause = 0;
           k = setInterval(this.interval,1000); 
           ReactDOM.unmountComponentAtNode(document.getElementsByClassName('pause-text')[0]);
       }

        this.interval = () => {
            let {h, m, s} = this.state;
            if(this.checkDone())
            {
                let _h = this.props.h, _m = this.props.m, _s = this.props.s;
                if(_h === 0 && _m === 0 && _s === 0){}
                else
                    alert("Your timer of " + setZeros(_h) + " : " + setZeros(_m) + " : " + setZeros(_s) + " is Done" );
                clearInterval(k);
                return;
            }
            s--;
            if(s < 0)
            {
                s = 59;
                m--;
            }
            if(m < 0)
            {
                m = 59;
                h--;
            }
            this.setState({h, m, s});
        }
    }

    componentWillMount() {
        clearInterval(k);
        this.setState({
            h : this.props.h,
            m : this.props.m,
            s : this.props.s
        });
        k = setInterval(this.interval, 1000);
    }

  render() {
      let {h, m, s} = this.state;
    return (
      <div className="timer" ref="timer">
        <div className="wrapper">
            <h1>{ setZeros(h) + " : " + setZeros(m) + " : " + setZeros(s) }</h1>
            <div className="pause-text"></div>
        </div>
        <div className="btn-sec-2">
            <button className="pause" onClick={this.pause}>Pause</button>
            <button className="play" onClick={this.play}>Start</button>
            <button className="stop" onClick={this.stop}>Stop</button>
        </div>
      </div>
    )
  }
}
