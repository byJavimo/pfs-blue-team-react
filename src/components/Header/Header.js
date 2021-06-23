import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() { 
        return (
            <header className="App-header">
                <Link className="App-header-link" to="/amazon-sign-up" > Amazon Sign Up </Link>
                <Link className="App-header-link" to="/person" > Person </Link>
                <Link className="App-header-link" to="/counter" > Counter </Link>
                <Link className="App-header-link" to="/name-form" > Name form </Link>
                <Link className="App-header-link" to="/styled-component" > Styled Component </Link>
                <Link className="App-header-link" to="/refs" > Refs </Link>
                <Link className="App-header-link" to="/hooks" > Hooks </Link>
            </header>

        );
    } 
}

export default Header;