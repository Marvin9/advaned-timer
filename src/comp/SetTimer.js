import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import setZeros from '../funcion'
import Timer from './Timer';

export default class SetTimer extends Component {
    constructor() {
        super();
        this.state = {
            h : 0,
            m : 0,
            s : 0
        }

        this.onClick = () => {
            if(this.h === 0 && this.m === 0 && this.s === 0)
                return;
            this.reset();
            let {h, m, s} = this.state;
            ReactDOM.unmountComponentAtNode(document.getElementById('timer'));
            ReactDOM.render(<Timer h={h} m={m} s={s}/>, document.getElementById('timer'));
        }

        this.increment = (i) => {
            if(i === "h")
            {
                let h = this.state.h;
                if(h === 24)
                    h = 0;
                else
                    h++;
                this.setState({h});
            }
            else if(i === "m")
            {
                let m = this.state.m;
                if(m === 59)
                    m = 0;
                else
                    m++;
                this.setState({m});
            }
            else
            {
                let s = this.state.s;
                if(s === 59)
                    s = 0;
                else
                    s++;
                this.setState({s});
            }
        }

        this.decrement = (i) => {
            if(i === "h")
            {
                let h = this.state.h;
                if(h === 0)
                    h = 24;
                else
                    h--;
                this.setState({h});
            }
            else if(i === "m")
            {
                let m = this.state.m;
                if(m === 0)
                    m = 59;
                else
                    m--;
                this.setState({m});
            }
            else
            {
                let s = this.state.s;
                if(s === 0)
                    s = 59;
                else
                    s--;
                this.setState({s});
            }
        }

        this.reset = () => { this.setState({h : 0, m : 0, s : 0})}
    }
  render() {
      let { h, m, s } = this.state;
    return (
      <div className="set-timer">
        <div className="inline">
            <div>
                <button className="incr" onClick={this.increment.bind(this, "h")}>+</button>
                <h2>{ setZeros(h) }</h2>
                <button className="decr" onClick={this.decrement.bind(this, "h")}>-</button>
            </div>
            <div>
                <button className="incr" onClick={this.increment.bind(this, "m")}>+</button>
                <h2>{ setZeros(m) }</h2>
                <button className="decr" onClick={this.decrement.bind(this, "m")}>-</button>
            </div>
            <div>
                <button className="incr" onClick={this.increment.bind(this, "s")}>+</button>
                <h2>{ setZeros(s) }</h2>
                <button className="decr" onClick={this.decrement.bind(this, "s")}>-</button>
            </div>
        </div>
        <div className="btn-sec">
            <button className="reset" onClick={this.reset}>RESET</button>
            <button className="submit" onClick={this.onClick}>SUBMIT</button>
        </div>
      </div>
    )
  }
}
