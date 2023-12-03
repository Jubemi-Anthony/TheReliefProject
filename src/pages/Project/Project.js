import "./Project.css";
import Header from "../../components/navigation/Navigation";
import Projects from "../../components/Projects";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { relief1, relief2, relief3, relief5, relief6, relief4, relief8, relief7 } from "../../Data/project";

const Project = ({setScrollI,scrollJ,setScrollJ}) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  useEffect(() => {
    if(scrollJ === 1){
      ref1.current.scrollIntoView({ behavior: 'smooth' })
      setScrollJ(null);
    }
    if(scrollJ === 2){
      ref2.current.scrollIntoView({ behavior: 'smooth' })
      setScrollJ(null);
    }
    if(scrollJ === 3){
      ref3.current.scrollIntoView({ behavior: 'smooth' })
      setScrollJ(null);
    }
    if(scrollJ === 4){
      ref4.current.scrollIntoView({ behavior: 'smooth' })
      setScrollJ(null);
    }
    if(scrollJ === 5){
      ref5.current.scrollIntoView({ behavior: 'smooth' })
      setScrollJ(null);
    }
}, [scrollJ, setScrollJ]);

  return (
    <main id="Project">
        <div className="top">
            <Header setScrollI={setScrollI} active={'Project'}/>
        </div>
        <section className="sec-2">
            <h2>The Journey so Far</h2>
            <p>Welcome to the heart of our humanitarian initiatives. At The Relief Project, we are on a mission to bring positive change to communities around the world. Our projects are the embodiment of hope, resilience, and the unwavering belief in the power of collective compassion.</p>
        </section>
        <section className="sec-3">
            <div ref={ref1}>
            <Projects
                num = {'01'}
                head = {'Dustbin Village'}
                i1 = {'./assets/KK19srgA1.png'}
                i2 = {'./assets/jD1m2_VA1.png'}
                i3 = {'./assets/reli334n.png'}
                arr = {relief1}
            />
            </div>
            <div ref={ref2}>
            <Projects
                num = {'02'}
                head = {'Ajoke Iwaya outreach'}
                i1 = {'./assets/xpp21.png'}
                i2 = {'./assets/xpp22.png'}
                i3 = {'./assets/xpp23.png'}
                arr = {relief2}
            />    
            </div>
            <div ref={ref3}>
            <Projects
                num = {'03'}
                head = {'Kadara Adekunle outreach'}
                i1 = {'./assets/xpp31.png'}
                i2 = {'./assets/xpp32.png'}
                i3 = {'./assets/xpp33.png'}
                arr = {relief3}
            />    
            </div>
            <div ref={ref4}>
            <Projects
                num = {'04'}
                head = {'Sagbokoji outreach'}
                i1 = {'./assets/xpp41.png'}
                i2 = {'./assets/xpp42.png'}
                i3 = {'./assets/xpp43.png'}
                arr = {relief4}
                />    
            </div>
            <div ref={ref5}>
            <Projects
                num = {'05'}
                head = {'Tarkwa Bay community'}
                i1 = {'./assets/xpp51.png'}
                i2 = {'./assets/xpp52.png'}
                i3 = {'./assets/xpp53.png'}
                arr = {relief5}
            />    
            </div>
            <Projects
                num = {'06'}
                head = {'Agala community'}
                i1 = {'./assets/xpp61.png'}
                i2 = {'./assets/xpp62.png'}
                i3 = {'./assets/xpp63.png'}
                arr = {relief6}
            />
            <Projects
                num = {'07'}
                head = {'Abagbo community'}
                i1 = {'./assets/xpp71.png'}
                i2 = {'./assets/xpp72.png'}
                i3 = {'./assets/xpp73.png'}
                arr = {relief7}
            /> 
            <Projects
                num = {'08'}
                head = {'Ogogoro Village'}
                i1 = {'./assets/xpp81.png'}
                i2 = {'./assets/xpp82.png'}
                i3 = {'./assets/xpp83.png'}
                arr = {relief8}
            />
        </section>
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
                            <li onClick={()=> setScrollJ(1)}>The Relief Project 1.0</li>
                            <li onClick={()=> setScrollJ(2)}>The Relief Project 2.0</li>
                            <li onClick={()=> setScrollJ(3)}>The Relief Project 3.0</li>
                            <li onClick={()=> setScrollJ(4)}>The Relief Project 4.0</li>
                            <li onClick={()=> setScrollJ(5)}>The Relief Project 5.0</li>
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
                    <p>Designed by: <span>Grateful Erhisohwode</span></p>    
                    <p>Built by: <span><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jubemi-anthony-pajiah-626b7323b/">Jubemi Anthony</a></span></p>
                </div>
            </section>
            </div>
        </footer>
    </main>
  )
}

export default Project