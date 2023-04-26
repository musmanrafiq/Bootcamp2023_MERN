import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import { ApplicationContext } from './Pages/Layout';

function Header({ mainText, onButtonClick }) {

    const userName = useContext(ApplicationContext);

    return (
        <header style={{ 'backgroundColor': 'red' }}>
            <Link to="/">
                <button>
                    Home</button>
            </Link>
            <Link to="/users">Users</Link>

            <div>{userName}</div>
        </header>
    );
}

export default Header;