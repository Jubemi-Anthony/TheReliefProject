import "./navigation.css"
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navigation({active, setScrollI}) {
  const [show,setShow] = useState(false);

    return (
        <header>
            <div className="container">
           <div className="loggo">
           <Link to="/">
            <img src="./assets/logo2.png" alt="logo" className="logo" />
           </Link>
           </div>
            <nav>
                <div className="notActive">
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div className="notActive" onClick={()=>setScrollI('who')}>
                    <Link to="/">
                        About Us
                    </Link>
                </div>
                <div className={active === 'Project' ? 'active' : 'notActive'}>
                    <Link to="/project">
                        Projects
                    </Link>
                </div>
                <div className={active === 'Contact' ? 'active' : 'notActive'}>
                    <Link to="/contact">
                        Contact Us
                    </Link>
                </div>
                <div className="right">
                <Link to="/volunteer">
                    <button id="big-sign">
                        Become A Volunteer
                    </button>
                </Link>
            </div>
            </nav>
            <div onClick={()=> setShow(!show)} className="burger">
                <img onClick={()=> setShow(!show)} id="toggle" src={show === true ? 'https://cdn1.iconfinder.com/data/icons/chunk/16/X-64.png' : 'https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-64.png'} alt="close/open" />
                </div>
            </div> 
            <div className={!show && 'borrid'} id="small-screen">
            <div>
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div onClick={()=>setScrollI('who')}>
                    <Link to="/">
                        About Us
                    </Link>
                </div>
                <div>
                    <Link to="/project">
                        Projects
                    </Link>
                </div>
                <div>
                    <Link to="/contact">
                        Contact Us
                    </Link>
                </div>
                <div>
                    <Link to="/donate">
                        Donate
                    </Link>
                </div>
                <Link to="/volunteer">
                    <button>
                        Become A Volunteer
                    </button>
                </Link>
            </div>
        </header>
    )
}