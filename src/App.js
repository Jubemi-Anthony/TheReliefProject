import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import './App.css';
import Project from "./pages/Project/Project";
import Donate from "./pages/Donate/Donate";
import { useState} from "react";
import Volunteer from "./pages/Volunteer/Volunteer";
import ADMIN from "./pages/ADMIN/ADMIN";

function App() {
  const [scrollI, setScrollI] = useState(null);
  const [scrollJ, setScrollJ] = useState(null);
  return (
    <div id="body">
      <Routes>
        <Route path="/" element= {<Home scrollI={scrollI} setScrollI={setScrollI} setScrollJ={setScrollJ}/>}/>
        <Route path="contact" element= {<Contact setScrollI={setScrollI} setScrollJ={setScrollJ}/>}/>
        <Route path="project" element= {<Project scrollJ={scrollJ} setScrollI={setScrollI} setScrollJ={setScrollJ}/>}/>
        <Route path="donate" element= {<Donate setScrollI={setScrollI} setScrollJ={setScrollJ}/>} />
        <Route path="volunteer" element= {<Volunteer setScrollI={setScrollI} setScrollJ={setScrollJ}/>} />
        <Route path = "admin-00-4112310310-xx" element= {<ADMIN/>} />
      </Routes>
    </div>
  );
}

export default App;
