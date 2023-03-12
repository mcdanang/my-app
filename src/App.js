import React from "react";
import Header from './component/Header';
import Footer from './component/Footer';
import Exercise1 from './component/Exercise1';
import Exercise2 from './component/Exercise2';
import Exercise3 from './component/Exercise3';
import './css/styles.css';
import { Routes, Route } from 'react-router-dom';
import Ex5Input from "./component/Exercise5/Ex5Input";
import Ex5List from "./component/Exercise5/Ex5List";
import Shop from "./component/ShopCart/Shop";
import Cart from "./component/ShopCart/Cart";
import Users from "./component/User/Users";
import Register from "./component/User/Register";

class App extends React.Component {
  render() {

    return (
      <div>
        <Header width={'500px'}/>
        <Routes>
          <Route exact path="/my-app/exercise1" element={<Exercise1/>} />
          <Route exact path="/my-app/exercise2" element={<Exercise2/>} />
          <Route exact path="/my-app/exercise3" element={<Exercise3/>} />
          <Route exact path="/my-app/exercise5/input" element={<Ex5Input/>} />
          <Route exact path="/my-app/exercise5/list" element={<Ex5List/>} />
          <Route exact path="/my-app/shop" element={<Shop/>} />
          <Route exact path="/my-app/cart" element={<Cart/>} />
          <Route exact path="/my-app/users" element={<Users/>} />
          <Route exact path="/my-app/register" element={<Register/>} />
        </Routes>
        <Footer/>
      </div>
    )
  }
}

export default App;
