import React, { Component } from 'react';

class Contador extends Component {
    constructor() {
        super()
        this.state = {
            count: 1
        }

    }
    handleIncrement = () => {
        this.setState(state => ({ count: state.count + 1 }));
    }
    handleInicio = () => {
        this.setState(state => ({ count: state.count = 0 }));
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleIncrement}>Incrementar</button>
                <button onClick={this.handleInicio}>Inicio</button>
            </div>
        )
    }

}
export default Contador;