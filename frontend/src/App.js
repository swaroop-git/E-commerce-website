import './App.css';
import {BrowserRouter, Routes , Route } from "react-router-dom";
import Login from "./components/login"
import Home from './components/Home';
import Addproduct from './components/AddProduct';
import GetProducts from "./components/GetProducts";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
      <Route path= '/add/product' element={<Addproduct/>} />
      <Route path= '/get/products' element={<GetProducts/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
