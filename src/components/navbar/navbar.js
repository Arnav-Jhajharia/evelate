import React from 'react';
import './../../styles/navbar.css'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Header({type, name, navbar}) {
    // React.useEffect(() => {
    //     ScrollReveal().reveal('.header')
    // }, [])

    console.log(type)


  /*===== ACTIVE AND REMOVE MENU =====*/
// const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
    const toggle = document.getElementById('header-toggle')
    const nav = document.getElementById('nav-menu')
    if(toggle && nav){
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
    }

}

  return (
    <header className="header">
      <Link to="/" className="header__logo">Evelate</Link>
      
      <FaBars onClick = {linkAction}className="hamburger-icon header__toggle" color='white' id="header-toggle"/>
      
      <nav className="nav" id="nav-menu">
        <div className="nav__content bd-grid">
          <a href="#" className="nav__perfil">
         
            
            <div>
              <span className="nav__name"><Link to="/">Evelate</Link></span>
            </div>
          </a>
          
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item"><a href="#" className="active">{name}</a></li>
              {/* {(type != 'catalog')?
              <li className="nav__item dropdown">
                <a href="#" className="nav__link dropdown__link">Change difficulty <i className='bx bx-chevron-down dropdown__icon'></i></a>
                
                <ul className="dropdown__menu">
                  <li className="dropdown__item"><a href="#age5" className="nav__link">Age 5</a></li>
                  <li className="dropdown__item"><a href="#age10" className="nav__link">Age 10</a></li>
                  <li className="dropdown__item"><a href="#age17" className="nav__link">Age 17</a></li>
                </ul>
              </li>:<></>
              } */}
         {navbar}<br />
           {/* </div> */}
              <li className="nav__item dropdown">
                <Link to = {'/catalog'} className="nav__link dropdown__link">Catalog <i className='bx bx-chevron-down dropdown__icon'></i></Link>
                
               
              </li>
              
              <li className="nav__item"><a href="#" className="nav__link">About</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
