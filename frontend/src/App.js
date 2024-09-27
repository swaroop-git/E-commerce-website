import './App.css';
import {BrowserRouter, Routes , Route } from "react-router-dom";
import Login from "./components/login"
import Home from './components/Home';
import Addproduct from './components/AddProduct';
import GetProducts from "./components/GetProducts";
import GetProduct from './components/GetProduct';
import SignUp from './components/signUp';
import UserCart from './components/UserCart';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/SignUp' element={<SignUp/>} />
      <Route path='/home' element={<Home/>} />
      <Route path= '/add/product' element={<Addproduct/>} />
      <Route path= '/get/products' element={<GetProducts/>} />
      <Route path= '/get/product/:id' element={<GetProduct/>} />
      <Route path= '/get/cart' element={<UserCart/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
