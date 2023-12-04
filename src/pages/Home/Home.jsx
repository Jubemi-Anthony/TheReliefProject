import Capabilities from "../../components/about/Capabilities";
import Leads from "../../components/about/Leads";
import "./Home.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RecentProjects from "../../components/RecentProjects";
import { useRef, useState, useEffect } from "react";
import Stats from "../../components/Stats";
import Part from "../../components/Part";

const Home = ({setScrollI, scrollI, setScrollJ}, props) => {  
  const aboutRef = useRef(null);
  const whatRef = useRef(null);
  const doRef = useRef(null);
  const [show,setShow] = useState(false);
  useEffect(() => {
    if(scrollI === 'who'){
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
      setScrollI(null);
    }
    if(scrollI === 'what'){
      whatRef.current.scrollIntoView({ behavior: 'smooth' })
      setScrollI(null);
    }
    if(scrollI === 'do'){
      doRef.current.scrollIntoView({ behavior: 'smooth' })
      setScrollI(null);
    }
}, [scrollI, setScrollI]);


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 200 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 10 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0 // this is needed to tell the amount of px that should be visible.
    }
  }
  return (
    <main id="About">
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
        <section className="sec-1">
          <div className="container">
            <div className="left">
              <p className="big"> The Relief Project</p>
            </div>
            <div className="right">
              <h1>Transforming Lives, One Act of Kindness at a Time</h1>
              <p className="here">At The Relief Project, we are committed to making meaningful impact on the lives of those in need. Rooted in compassion and driven by a shared vision of positive change. <br /> The world is desperately in need of humanity, and for those who are struggling to makes ends meet, we must be there.</p>
            </div>
          </div>
        </section>
        <div id="bigx">
        <section className="sec-x">
          <iframe src="https://drive.google.com/file/d/1hkHwXaJM1ZgSLjuOC-RGdaRIqdFilLyt/preview" width="90%" height="500" allow="autoplay"></iframe>
        </section>
        </div>
        <div id="smallx">
        <section className="sec-x">
          <iframe src="https://drive.google.com/file/d/1hkHwXaJM1ZgSLjuOC-RGdaRIqdFilLyt/preview" width="90%" height="300" allow="autoplay"></iframe>
        </section>
        </div>
        <section className="sec-4">
          <div ref={aboutRef} className="container">
          <div className="hold hold-2">
              <Leads
                title={'Who We Are'}
                head="We are The Relief Team"
                first="We are a team of individuals who serve and give-of ourselves and our resources. We are employees and employers of  labor, men, women and youth."
                second="We are ordinary people who have chosen to make an extraordinary difference"
              />
              <img src="./assets/sec-2.png" alt="Man" className="image" />
            </div>
          </div>
          <div ref={doRef} className="container">
            <div className="hold oran">
              <img src="./assets/wwd1.png" alt="Man" className="image" />
              <Leads
                title={'Women and Child Welfare'}
                first="While our relief projects benefit the entire community, we prioritize addressing the unique needs of women and children in riverine communities. Recognizing their vulnerabilities, our interventions are designed to enhance the well-being and resilience of these populations."
              />
            </div>
            <div className="hold oran hold-2">
              <Leads
                title={'Health and Well-being'}
                first="Supporting healthcare initiatives is crucial for enhancing community well-being. As advocated for body and mind wellness, we invite trained medical personnel to drive medical outreaches at our communities."
                second="Our commitment extends to proactive measures like vaccinations and disease prevention to safeguard the overall health of the communities."
              />
              <img src="./assets/wwd2.png" alt="Man" className="image" />
            </div>
            <div className="hold oran">
              <img src="./assets/wwd3.png" alt="Man" className="image" />
              <Leads
                title={'Education and Empowerment'}
                first="In keeping with our commitment to enhance individual and collective growth, vocational empowerment and educational scholarships are provided to the indigents as available."
              />
            </div>
            <div className="hold oran hold-2">
              <Leads
                title={'Transforming Lives, One Act of Kindness at a Time'}
                first="The world is desperately in need of humanity, and for those who are struggling to make ends meet, hoping for a joy break, or even trying to find some meaning, we try our best to be there. We take every opportunity to invest joy into the lives of the people we come across; whether through a christmas party, a listening ear, or an offer of employment."
                second="At The Relief Project, we are committed to being humane."
              />
              <img src="./assets/xpp82.png" alt="Man" className="image" />
            </div>
            <div ref={whatRef} className="hold">
              <img id="imagee" src="./assets/hope.png" alt="Man" className="image" />
              <Leads
                title={'What do we hope to Achieve?'}
                first="To empower women and children in low-income communities to be all that they can be, at school, at home and in their day to day activities"
              />
            </div>
          </div>
        </section>
        <section className="sec-j">
          <div className="container">
            <div className="stats">
              <Stats number={8-1} text={'Communities'}/>
              <Stats number={5-1} text={'Indigents'}/>
              <Stats number={40-1} text={'Volunteers'}/>
            </div>
          </div>
        </section>
        <section className="sec-3">
          <div className="container">
            <h2>Our Beacons</h2>
            <div className="grid">
              <Capabilities image="./assets/v1.png" head="Love" text="Embracing compassion and empathy, we believe in the transformative power of love. It is the driving force behind every action, creating a positive impact on the lives of those in need." />
              <Capabilities image="./assets/v2.png" head="Service" text="Committed to selfless service, we dedicate ourselves to uplifting communities. Through acts of kindness and dedication, we strive to make a meaningful difference in the lives of the underserved." />
              <Capabilities image="./assets/v3.png" head="Equality" text="Advocating for justice and fairness, we stand firmly for equality. Everyone deserves access to opportunities, resources, and respect, fostering a world where every individual is valued."/>
            </div>
            <div className="flex">
              <Capabilities image="./assets/v4.png" head="Community" text="Nurturing a sense of belonging, we celebrate the strength of community. Together, we create supportive networks that empower individuals and foster an environment where everyone can thrive." />
              <Capabilities image="./assets/v5.png" head="Collaboration" text="Believing in the power of teamwork, we actively collaborate with partners and communities. Through shared efforts, we amplify our impact, working hand in hand to create lasting positive change." />
            </div>
          </div>
        </section>
        <section className="sec-q">
          <div className="container">
            <h6 id="ooo">Our Partners</h6>
          </div>
            <marquee>
            <div className="part">
            <Part img="./assets/partners/molfix.jpeg" text="Molfix"/>
            <Part img="./assets/partners/moped.jpeg" text="Moped"/>
            <Part img="./assets/partners/LOGO.svg" text="My Medicine"/>
            <Part img="./assets/partners/sanitary.jpeg" text="SanitaryAid"/>
            <Part img="./assets/partners/advantage.jpeg" text="Advantage Health Africa"/>
            </div>
            </marquee>
        </section>
        <div id="paul"></div>
        <section className="sec-4">
        <div className="container">
          <h2  style={{textAlign: 'center', marginBottom: '20px'}}>Our Work So Far</h2>
          <p className="weThe">Some of Our Popular <span>Causes</span></p>
        </div>
        <div className="container-1">
          <div className="grid">
        <Carousel 
          responsive={responsive}
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          partialVisible={true}
          >
            <RecentProjects
              text="On a compassionate Good Friday in 2016, we visited Idi-ori's Dustbin Village in Ajegunle, serving 700 residents with vital food, clothing, and comfort essentials."
              img="./assets/1/21.jpeg"
              head="Our Outreach to Idi-ori's Dustbin Village"
              tag="1.0"
            />
            <RecentProjects
              text="On December 27, 2016, we reached out to Ajoke in Iwaya, Lagos State, benefiting around a thousand individuals. Our mission focused on delivering essential food, clothing, and educational assistance to the community."
              img="./assets/2/1.jpg"
              head="Ajoke Iwaya Support Mission"
              tag="2.0"
            />
            <RecentProjects
              text="On April 14, 2017, our outreach team visited the fire-ravaged community of Kadara Adekunle in Yaba, Lagos. In the aftermath of the tragedy, we assisted over 800 resilient individuals in rebuilding their lives by providing essential food, clothing, and household items."
              img="./assets/3/1a.jpg"
              head="Aid for Kadara Adekunle"
              tag="3.0"
            />
            <RecentProjects
              text="On Good Friday, March 30, 2018, our Relief Project assisted 800 indigents in Sagbokoji, a riverine settlement in Lagos. We provided essential household items, especially for kids from Otodo-Gbame."
              img="./assets/4/1.jpg"
              head="Sagbokoji Relief"
              tag="4.0"
            />
            <RecentProjects
              text="On Good Friday, April 19, 2019, we aided Tarkwa Bay in Lagos, providing essentials and training 50 women in soap production. Reached around a thousand indigents from nearby communities."
              img="./assets/5/7.jpeg"
              head="Tarkwa Bay Support"
              tag="5.0"
            />
            <RecentProjects
              text="The Relief project reached out to the people of Agala during the pandemic with the aim of providing foodstuff and health supplies needed during the pandemic."
              img="./assets/rp1.png"
              head="Our donation to families during the pandemic period"
              tag = "6.0"
            />
            <RecentProjects
              text="The Relief project reached out to the people of Agbagdo during the Christmas period, supplied them with the necessary food items, free medical checkups and more"
              img="./assets/rp2.png"
              head="The Relief project outreach to the people of Abagdo community."
              tag = "7.0"
            />
            <RecentProjects
              text="The Relief project reached out to the people of Ogogoro village during the Christmas period, donated books to kids and ran medical test for the elderly people."
              img="./assets/rp3.png"
              head="Our Christmas outreach to the people of Ogogoro village"
              tag = "8.0"
            />
          </Carousel>
          </div>
        </div>
        <div className="hold-1">
          <Link to="/donate">
          <p className="donate">
            Donate
            <img src="./assets/Vector.png" alt="Donate" />
          </p>
          </Link>
        </div>
      </section>
      <section className="sec-5">
        <div className="left">
          <div className="container voluunterHome">
          <p style={{textAlign: 'left'}} id="become">Want to Volunteer? <br /> We would love to have you!</p>
          <p className="lastChild">Join us today to create a better life and future.</p>
          <Link to="/volunteer"><div className="getStarted">Get Started <img src="./assets/Forward.png" alt="forward" /></div></Link>
          </div>
        </div>
        <div className="right">
          <img src="./assets/sec-7.png" alt="people" />
        </div>
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
    </main>
  )
}

export default Home