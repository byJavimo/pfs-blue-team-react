import React , {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Person from './components/Person.js';
import Counter from './components/Counter/Counter.js';
import NameForm from './components/NameForm.js';
import StyledComponent from './components/StyledComponent/StyledComponent.js';
import AmazonSignUp from './components/AmazonSignUp/AmazonSignUp.js';
import Refs from './components/Refs/Refs.js';
import Hooks from './components/Hooks/Hooks.js';
import Header from './components/Header/Header.js'

class Router extends Component {

    render() { 
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/person" exact >
                        <Person name="Pedro" surname="Ramírez" age={33}></Person>
                    </Route> 
                    <Route path="/counter" component={Counter} exact/> 
                    <Route path="/name-form" component={NameForm} exact/> 
                    <Route path="/styled-component" component={StyledComponent} exact/> 
                    <Route path="/refs" component={Refs} exact/>
                    <Route path="/hooks" component={Hooks} exact/> 
                    <Route path="/amazon-sign-up" component={AmazonSignUp} exact/> 
                    <Route path="*" component={AmazonSignUp} exact/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router