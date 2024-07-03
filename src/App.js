import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import './App.css';

function App() {
  return <Router>
<nav>
  <Link to="/" className='link'>Trang chủ </Link>
  <Link to="/about" className='link'>Về chúng tôi</Link>
  <Link to="/contactus" className='link'>Liên hệ</Link>
</nav>

<Routes> 
  <Route path="/" element= { <Home/> } />
  <Route path="/about" element= { <About/> } />
  <Route path="/contactus" element= { <ContactUs/> }/>
</Routes>


  </Router>
}

export default App;
