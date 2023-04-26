import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Users from './Pages/Users';
import Layout from './Pages/Layout';

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/Users' element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
