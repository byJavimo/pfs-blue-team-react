import React , {Component} from 'react';

export default class Refs extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        if (this.myRef.current) {
            this.myRef.current.innerHTML = 'Elemento modificado por referencia';
        }

        console.log(this.myRef);
    }

    render() {
        return <p ref={this.myRef}>Elemento con referencia</p>
    }
}