import './App.css';
import {BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "./components/login"
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
