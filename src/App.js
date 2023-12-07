import React from "react";
// import "./App.css";
import Navigation from "./common/navbar";
import Home from "./pages/Home";
import BooksPage from "./pages/BooksPage";
import MembersPage from "./pages/MembersPage";
import StaffPage from "./pages/StaffPage";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <div>
          <Navigation />

          <Routes>
          <Route exact path="/Home" element={<Home/> } />
          <Route path="/BooksPage" element={<BooksPage/>} />
          <Route path="/MembersPage" element={<MembersPage/> } />
          <Route path="/StaffPage" element={<StaffPage/>} />
          <Route path="/Login" element={<Login/>}/>
        </Routes>  


        </div>
      </div>
    </Router>
  );
}

export default App;
