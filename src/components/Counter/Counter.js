import React , {Component} from 'react';
import './Counter.scss';

class Counter extends Component {
    constructor(props) {
        super(props); 
        this.state = { count: 0, incrementBy: 0}
    }

    increment() {
        this.setState({count: this.state.count + parseInt(this.state.incrementBy), incrementBy: 0});
    }

    decrement() {
        this.setState({count: this.state.count - this.state.incrementBy, incrementBy: 0});
    }

    handleChange(event) {
        this.setState({incrementBy: event.target.value});
    }

    resetState() {
        this.setState({count: 0, incrementBy: 0});
    }

    render() { 
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <label>Incrememtar/Decrementar en: </label>
                    <input type="number" min={0} value={this.state.incrementBy} onChange={(event) => this.handleIncrementBy(event)}></input>
                </div>
                <br></br>
                <div>
                    <label> <b>Resultado: </b> </label>
                    <input value={this.state.count} readOnly></input>
                </div>
                <br></br>
                <button className="increment" onClick={() =>  this.increment()}> Incrementar </button>
                <button className="decrement" onClick={() =>  this.decrement()}> Decrementar </button>
                <button  className="reset" onClick={() =>  this.resetState()}> Resetear </button>

                <h3>Renderizado condicional</h3>
                <p className={this.state.count % 2 === 0 ? 'green': 'red'}> {this.state.count % 2 === 0 ? 'Par' :  'Impar'} </p>
                
            </div>
        )

    }
}

export default Counter;