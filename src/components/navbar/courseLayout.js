import React, { useEffect, useState } from 'react';
import './../../styles/navbar.css'
import './../../styles/component.css'
import allMessages from './../../helpers/const/merkle';
import Navbar2 from './navbar'
import ScrollReveal from 'scrollreveal';
import Footer from './Footer'

const messages = [
  // Your messages array here
];

const Layout = (props) => {
  let [n, setN] = useState(1);
  const [data, setData] = useState([]);
  
//   function isInViewport(element) {
   useEffect(() => {
    ScrollReveal().reveal('#footer')
   })

  return (
    <React.Fragment>
      <Navbar2 name = {props.name} navbar = {props.navbar}/>
        
    
                {props.children}
        {/* <script src="assets/js/main.js"></script> */}
        <div id='footer'>
          <Footer /></div>
    </React.Fragment>   
  );
};

export default Layout;
