import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
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
const[hamburgerOpen,setHamburgerOpen] =  useState(false);
const toggleHamburger=()=>{
  setHamburgerOpen(!hamburgerOpen)
  console.log("clicked")

}







  return (
    <div className="App">
      <nav className="navbar">
        //토글버튼을 div에 해도 되는지 이제 앎
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger/>
      </div>  
        <div>
          <p>My Art On Me</p>
        </div>
        <ul className="navbar-menu">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About us</NavLink>
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
     
      </nav>
     


      <Routes>
        {/* whenever the url ends with "/" , Home component must be rendered */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
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

//reference
//https://www.google.com/search?q=react+hamburger+menu+tutorial&oq=react+hamburger+&aqs=chrome.2.69i57j0i512j0i30l8.10721j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_NLTWYrTGLZ6ZptQP7reDwA418
