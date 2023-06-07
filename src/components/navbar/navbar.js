import React from 'react';
import './../../styles/navbar.css'
import ScrollReveal from 'scrollreveal';
function Header() {
    React.useEffect(() => {
        ScrollReveal().reveal('.header')
    }, [])
  return (
    <header className="header">
      <a href="#" className="header__logo">Fun Fact</a>
      
      <i className='bx bx-menu header__toggle' style={{ color: 'white' }} id="header-toggle"></i>
      
      <nav className="nav" id="nav-menu">
        <div className="nav__content bd-grid">
          <a href="#" className="nav__perfil">
            <div className="nav__img">
              <img src="assets/imgs/perfil.jpg" alt="" />
            </div>
            
            <div>
              <span className="nav__name">Fun Fact</span>
            </div>
          </a>
          
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item"><a href="#" className="active">Merkle Trees</a></li>
              
              <li className="nav__item dropdown">
                <a href="#" className="nav__link dropdown__link">Change difficulty <i className='bx bx-chevron-down dropdown__icon'></i></a>
                
                <ul className="dropdown__menu">
                  <li className="dropdown__item"><a href="#age5" className="nav__link">Age 5</a></li>
                  <li className="dropdown__item"><a href="#age10" className="nav__link">Age 10</a></li>
                  <li className="dropdown__item"><a href="#age17" className="nav__link">Age 17</a></li>
                </ul>
              </li>
              
              <li className="nav__item dropdown">
                <a href="catalog.html" className="nav__link dropdown__link">Catalog <i className='bx bx-chevron-down dropdown__icon'></i></a>
                
                <ul className="dropdown__menu">
                  <li className="dropdown__item"><a href="#" className="nav__link">Programming</a></li>
                  <li className="dropdown__item"><a href="#" className="nav__link">This</a></li>
                  <li className="dropdown__item"><a href="#" className="nav__link">That</a></li>
                  <li className="dropdown__item"><a href="#" className="nav__link">Others</a></li>
                </ul>
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
