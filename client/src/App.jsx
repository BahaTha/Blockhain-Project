import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Navbar, Welcome, Footer, Services, Transactions, MyDashboard } from "./components";

const App = () => (
  <Router>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
      </div>
      
      <Routes>
        <Route exact path='/' element={
        <div className="gradient-bg-welcome">
          < Welcome />
          <Services />
          <Transactions />
      </div>
      }></Route>
        <Route exact path='/dashboard' element={
          <div >
        < MyDashboard />
        </div>
        }></Route>
        {/* <Route exact path='/contact' element={< Contact />}></Route> */}
          </Routes>
    <Footer />
    </div>
  </Router>
);

export default App;
