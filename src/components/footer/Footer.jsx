import { Link } from "react-router-dom"
import "./footer.css";
const Footer = ({setScrollI, setScrollJ}) => { 
  return (
        <footer>
            <div className="container">
            <section className="grid">
                <div className="together-1">
                    <Link to="/">
                    <img className="logo" src="./assets/logo.png" alt="Logo"/>
                    </Link>
                    <p className="hereAt">The Relief Project is a project delivered yearly by The Relief Team. Our goal? Impact/</p>
                </div>
                <div className="together">
                    <div>
                        <h3>About</h3>
                        <ul>
                            <li onClick={()=> setScrollI('who')}><Link to="/">who we are</Link></li>
                            <li onClick={()=> setScrollI('do')}><Link to="/">what we do</Link></li>
                            <li onClick={()=> setScrollI('what')}><Link to="/">what we hope to achieve</Link></li>
                            <li><Link to="/volunteer">become a volunteer</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Projects</h3>
                        <ul className="ballad">
                            <li onClick={()=> setScrollJ(1)}><Link to="/project">The Relief Project 1.0</Link></li>
                            <li onClick={()=> setScrollJ(2)}><Link to="/project">The Relief Project 2.0</Link></li>
                            <li onClick={()=> setScrollJ(3)}><Link to="/project">The Relief Project 3.0</Link></li>
                            <li onClick={()=> setScrollJ(4)}><Link to="/project">The Relief Project 4.0</Link></li>
                            <li onClick={()=> setScrollJ(5)}><Link to="/project">The Relief Project 5.0</Link></li>
                            <li><Link to="/project">More...</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>
                                <img src="./assets/Email.png" alt="email" />
                                <p className="last">thereliefproject@gmail.com</p>
                            </li>
                            <li>
                                <img src="./assets/Phone.png" alt="phone" />
                                <p>(+234) 802 087 9102</p>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src="./assets/Web.png" alt="Logo of website"/>
                                    <p className="last">www.thereliefproject.org</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bottom">
                <p>© 2023 The Relief Project. All Rights Reserved</p>
                <div className="socials">
                    <img src="./assets/twitter.png" alt="twitter" />
                    <img src="./assets/facebook.png" alt="facebook" />
                    <img src="./assets/instagram.png" alt="instagram" />
                </div>
                <div className="builds">
                    <p>Designed by: <span><a href="https://twitter.com/kewwy11103">Grateful Erhisohwode</a></span></p>    
                    <p>Built by: <span><a href="https://www.linkedin.com/in/jubemi-anthony-pajiah-626b7323b/">Jubemi Anthony</a></span></p>
                </div>
            </section>
            </div>
        </footer>
    )
}

export default Footer