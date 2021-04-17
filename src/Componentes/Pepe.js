import React, {Component} from 'react';

class Pepe extends Component {

    render(){   //siempre va el metodo render con las clases
        return <h1> {this.props.dato} </h1> //this se usa con las clases no con las funciones.
    }
}

export default Pepe;