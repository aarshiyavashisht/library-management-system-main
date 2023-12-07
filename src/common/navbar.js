import React from 'react';
import './navbar.css'
function sideMenu(side) {
    var menu = document.getElementById('side-menu');
    if(side===0) {
      menu.style = 'transform: translateX(0vh); position:fixed;';
    }
    else {
      menu.style = 'transform: translateX(-100%);';
    }
    side++;
  }
  const Navigation = () => {
    const openLoginPage = () => {
      const popupWindow = window.open('popup.html', 'loginPage', 'width=600,height=400');
      if (popupWindow) {
        popupWindow.focus();
      }
    };
  return (
    <nav>
      <div className="logo">
        <img height="200px" width="2000px" src="/images/BOOKNOOKlogo-removebg-preview.png" alt="logo" />
      </div>
    
    
      <ul>
        <li><a className="active" href="">Home</a></li>
        <li><a href="#services_section">S Book</a></li>
        <li><a href="#contactus_section">Contact</a></li>
        
      </ul>
      <label htmlFor="myInput" className="labela">
        <span className="labela-title">Search Here</span>
        <input id="myInput" className="input" name="text" placeholder="Type here..." type="text" />
      </label>
      <a className="get-started" onClick={openLoginPage}>Get Started</a>
      <img src="images/icon/menu.png" className="menu" onClick={() => sideMenu(0)} alt="menu" />
    </nav>
  );
}

export default Navigation;
