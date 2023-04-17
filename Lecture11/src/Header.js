import React, { useState } from 'react';
import logo from './logo.svg';

function Header({ mainText, onButtonClick }) {

    const [arr1, setArr1] = useState([]);

    const onChangeHandler = (e) => {
        debugger;
        arr1.push(1);
        setArr1([...arr1])
    }
    return (
        <header>

            {
                arr1.map((x) => (<p key={x}>{x}</p>))
            }
            <button onClick={onChangeHandler}>Check data</button>
        </header>
    );
}

export default Header;