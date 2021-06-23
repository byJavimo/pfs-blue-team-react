import React , {Component} from 'react';

class NameForm extends Component {
    constructor(props) {
        super(props); 
        this.state = { name: ''}
    }

    handleChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulario enviado', this.state.name);
    }

    render() { 
        return (
            <>
              <h2>Name form</h2>
              <form onSubmit={this.handleSubmit}>
                  <label>Name: </label>
                  <input
                    placeholder="Introduce tu nombre..."
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                  ></input>
                  <input type="submit" value="Enviar"></input>
              </form>
            </>
        )

    }
}

export default NameForm;