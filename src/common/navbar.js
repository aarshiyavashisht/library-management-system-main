import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";


function sideMenu(side) {
  var menu = document.getElementById("side-menu");
  if (side === 0) {
    menu.style = "transform: translateX(0vh); position:fixed;";
  } else {
    menu.style = "transform: translateX(-100%);";
  }
  side++;
}

const Navigation = () => {
  const openLoginPage = () => {
    const popupWindow = window.open(
      "popup.html",
      "loginPage",
      "width=600,height=400"
    );
    if (popupWindow) {
      popupWindow.focus();
    }
  };

  return (
        <nav>
          <div className="logo">
            <img
              height="200px"
              width="200px"
              src="/images/BOOKNOOKlogo-removebg-preview.png"
              alt="logo"
            />
          </div>

          <ul>
          <li><Link to="/Home">Home</Link></li><br/>
            <li><Link to="/BooksPage">Books</Link></li><br/>
            {/* <li><Link to="/MembersPage">Members</Link></li><br/>
            <li><Link to="/StaffPage">Staff</Link></li> */}
          </ul>

          

          <Link to="/login" className="get-started" >Get Started</Link>
          <img src="images/icon/menu.png" className="menu" onClick={() => sideMenu(0)} alt="menu" />
        </nav>

        
   
  );
};

export default Navigation;
