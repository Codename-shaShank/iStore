// import React from 'react';
// import {Switch,Route} from "react-router-dom";
// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar";
// import ProductList from "./components/ProductList";
// import Details from "./components/Details";
// import Cart from "./components/Cart";
// import Default from "./components/Default";
// import Modal from './components/Modal';
// import { Home } from './components/Home';
// import  About from './components/About';
// import Sell from './components/Sell';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Login from './components/Login';
// // import Login from './components/Login';

// function App() {
//   return (
//     <React.Fragment>
//     <div>
       
//       <Navbar />
//       <ToastContainer />
//       <Switch>
//         <Route path="/buy" component={ProductList} />
//         <Route path="/about" component={About} />
//         <Route path="/sell" component={Sell} />
//         <Route path="/cart" component={Cart} />
//         <Route path="/details" component={Details} />
//         <Route path="/home" component={Home} />
//         <Route component={Default} />
//         <Route path="/" element={Login} />
//       </Switch>
//       <Modal />
//     </div>
//     </React.Fragment>
//   );
// }

// export default App;






import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import { Home } from './components/Home';
import About from './components/About';
import Sell from './components/Sell';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      
      <ToastContainer />
      <Routes>
      <Route path='/register' element={<Register/>} />
        <Route path="/buy" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<Details />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <Modal />
    </div>
  );
}

export default App;

