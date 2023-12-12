import React from "react";
import Navigation from "./common/navbar";
import Home from "./pages/Home";
import BooksPage from "./pages/BooksPage";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Nav } from "react-bootstrap";



function App() {
  return (
    <div>
    <Router>
        <div>
          <Routes>
          <Route exact path="/" element={<Home/> } />
          <Route exact path="/Home" element={<Home/> } />
          <Route path="/BooksPage" element={<BooksPage/>} />
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
    </div>

  );
}

export default App;
