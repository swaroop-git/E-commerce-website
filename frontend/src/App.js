import './App.css';
import {BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "./components/login"
import Home from './components/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

// const [product, setProduct] = useState([])

// useEffect(()=> {
//   axios.get('http://localhost:3001/products')
//   .then(res => {
//     console.log(res.data.data)
//     setProduct(res.data.data);
//   })
//   .catch(err => {
//     console.log(err);
//   })
// },[])

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
