import React from "react";
import Header from './component/Header';
import Footer from './component/Footer';
import Exercise1 from './component/Exercise1';
import Exercise2 from './component/Exercise2';
import Exercise3 from './component/Exercise3';
import './css/styles.css';
import { Routes, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    var name = 'Danang';

    return (
      <div>
        <Header name={name}/>
        <Routes>
          <Route exact path="/my-app/exercise1" element={<Exercise1/>} />
          <Route exact path="/my-app/exercise2" element={<Exercise2/>} />
          <Route exact path="/my-app/exercise3" element={<Exercise3/>} />
        </Routes>
        <Footer/>
      </div>
    )
  }
}

export default App;
