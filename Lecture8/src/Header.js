import logo from './logo.svg';

function Header({ mainText, onButtonClick }) {
    return (
        <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" style={{ 'width': '100px' }} />
            <button onClick={onButtonClick} >Test</button>
            {
                mainText && (
                    <p>{mainText}</p>)
            }
        </header>
    );
}

export default Header;