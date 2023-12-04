import "./navigation.css"
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navigation({active, setScrollI}) {
  const [show,setShow] = useState(false);

    return (
        <header>
            <div className="container">
            <img src="./assets/logo2.png" alt="logo" className="logo" />
            <nav>
                <div>
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div onClick={()=>setScrollI('who')}>
                    <Link>
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
                <div className="right">
                <div onClick={()=> setShow(!show)} className="burger">
                <img onClick={()=> setShow(!show)} id="toggle" src={show === true ? 'https://cdn1.iconfinder.com/data/icons/chunk/16/X-64.png' : 'https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-64.png'} alt="close/open" />
                </div>
                <Link to="/volunteer">
                    <button id="big-sign">
                        Become A Volunteer
                    </button>
                </Link>
            </div>
            </nav>
            
            </div>
            {
                show && 
                <div id="small-screen">
            <div>
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div onClick={()=>setScrollI('who')}>
                    <Link>
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
            }
        </header>
    )
}