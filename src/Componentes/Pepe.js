import React, {Component} from 'react';

class Pepe extends Component {

    render(){   //siempre va el metodo render con las clases
        return <h1> {this.props.dato} </h1>
    }
}

export default Pepe;