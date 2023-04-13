import './App.css';
import Header from './Header';
import Login from './Login';

function App() {

  function onButtonClick() {
    alert('Clicked')
  }
  return (
    <div className="App">
      <Header mainText="" onButtonClick={onButtonClick}></Header>
      <Login ></Login>
    </div>
  );
}

export default App;
