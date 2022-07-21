import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Brands from "./components/Brands";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Hamburger from "./components/Hamburger";
import{useState, useEffect} from "react"
// NavLink: a component for setting the URL and
// providing navigation between components
// in our app
// without triggering a page refresh

function App() {
const[isOpen,setIsOpen] =  useState(false);
const toggleHamburger=()=>{
  setIsOpen(!isOpen)
  console.log("hamburgerBtnClicked")
}







  return (
    <div className="App">
      <nav className="navbar">
       
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger/>
      </div>  
        <div>
          <p>My Art On Me</p>
        </div>
        <ul className={isOpen? "showMenu":"hideMenu"}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/brands"}>Brands</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/search"}>Search</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
        <ul className="navbar-ul">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/brands"}>Brands</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/search"}>Search</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <div ><img className = "heart" alt ="likeBtn" src="img/heart.png"/></div>
          </ul>
         
      </nav>
     


      <Routes>
        {/* whenever the url ends with "/" , Home component must be rendered */}
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/posts" element={<Posts postsData={data} />} />
        <Route path="/posts/:post_id" element={<Post {...data} />} />
        <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

export default App;

//reference toggle button (hamburger)
//https://www.google.com/search?q=react+hamburger+menu+tutorial&oq=react+hamburger+&aqs=chrome.2.69i57j0i512j0i30l8.10721j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_NLTWYrTGLZ6ZptQP7reDwA418
