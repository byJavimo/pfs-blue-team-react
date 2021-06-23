import React from 'react';
import moment from 'moment';
import './AmazonSignUp.scss';

//Hove en el Autofocus no me sale????

class AmazonSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            birthdate: '',
            password: '',
            passwordConfirm: ''
        }
    }

    handleChange = (event) => {
        const property = event.target.id;
        switch(property) {
            case 'name': 
                this.setState({name: event.target.value});
                break;
            case 'email': 
                this.setState({email: event.target.value});
                break;
            case 'birthdate':
                moment(event.target.value).format("MMM Do YY");              
                this.setState({birthdate: event.target.value});
                break;
            case 'password': 
                this.setState({password: event.target.value});
                break;
            default:
                this.setState({passwordConfirm: event.target.value});
                break;
        }

    }

    onSubmitForm = () => {
        if (this.name && this.email && this.birthdate && this.password && this.passwordConfirm) {
            alert(JSON.stringify(this.state));
            this.setState({
                name: '',
                birthdate: '',
                password: '',
                passwordConfirm: ''
            });
        }
    }

    render() { 
        return (
            <div className="amazon-sign-up">
                <div className="amazon-sign-up__image">
                    <img src="https://lh3.googleusercontent.com/proxy/0vK9cKejDM0hwJnDjkWUFfQyiRYVCeBqOSCjFnrjDEuN_dJrFGGzM6A1UHe_SQkCjp-ZLzAQXG3KHdC6ZGT-OQXKflvqCb9DuSQdrh1vX8M94BgIrzMbBiXsFTqL5YfaMe-OBOucqasLNxZiKMNu_xDYAdcXySw"
                    width="150" height="150" alt="Amazon"></img>
                </div>
        
                <form className="amazon-sign-up__box">
                    <h1 className="amazon-sign-up__title"> Crear cuenta</h1>
                    <div className="amazon-sign-up__name">
                        <label>Nombre</label>
                        <input autoFocus="off" id="name" type="text" value={this.name} onChange={this.handleChange} required></input>
                    </div>
                    <div className="amazon-sign-up__email">
                        <label>Correo electrónico</label>
                        <input autoFocus="off" id="email" type="email" value={this.email} onChange={this.handleChange} required></input>
                    </div>
                    <div className="amazon-sign-up__birthdate">
                        <label>Fecha nacimiento</label>
                        <input autoFocus="off" id="birthdate" type="date" value={this.birthdate} onChange={this.handleChange} required></input>
                    </div>
                    <div className="amazon-sign-up__password">
                        <label>Contraseña</label>
                        <input autoFocus="off" id="password" type="password" value={this.password} onChange={this.handleChange} placeholder="Como mínimo 6 caracteres" required></input>
                    </div>
                    <div className="amazon-sign-up__confirm-password">
                        <label>Confirma tu contraseña</label>
                        <input autoFocus="off" id="confirm-password" type="password" value={this.passwordConfirm} onChange={this.handleChange} required></input>
                    </div>
                    <div className="amazon-sign-up__submit-button">
                        <input autoFocus="off" type="submit" value="Crea tu cuenta de amazon" onClick={this.onSubmitForm}></input>
                    </div>
                    <div className="amazon-sign-up__footer">
                        Al identificarte, aceptas nuestras <a href="https://as.com/" target="_blank" rel="noreferrer"> Condiciones de uso</a>,
                        nuestro <a href="https://as.com/" target="_blank" rel="noreferrer"> Aviso de privacidad</a> y nuestras <a href="https://as.com/" target="_blank" rel="noreferrer"> Condiciones de Cookies y publicidad en Internet</a>.
                    </div>
                    <hr></hr>
                    <div className="amazon-sign-up__footer">
                       ¿Ya tienes una cuenta? <a href="https://as.com/" target="_blank" rel="noreferrer">Iniciar sesión</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default AmazonSignUp;
