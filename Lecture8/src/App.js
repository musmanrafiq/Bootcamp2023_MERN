import './App.css';
import Header from './Header';

function App() {

  function onButtonClick() {
    alert('Clicked')
  }
  return (
    <div className="App">
      <Header mainText="" onButtonClick={onButtonClick}></Header>
    </div>
  );
}

export default App;
