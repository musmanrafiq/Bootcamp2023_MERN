import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function Header({ mainText, onButtonClick }) {


    return (
        <header style={{ 'backgroundColor': 'red' }}>
            <Link to="/">
                <button>
                    Home</button>
            </Link>
            <Link to="/users">Users</Link>
        </header>
    );
}

export default Header;