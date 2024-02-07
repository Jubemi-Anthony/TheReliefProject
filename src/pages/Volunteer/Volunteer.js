import { useState, useEffect, useRef } from 'react'
import Footer from '../../components/footer/Footer'
import "./Volunteer.css";
import "../../Data/firebaseConfig";
import{getFirestore, addDoc, collection} from "firebase/firestore";
import Modal from '../../components/Modal/Modal';
import Header from "../../components/navigation/Navigation";
import emailjs from '@emailjs/browser';


const Volunteer = ({setScrollI,setScrollJ}) => {
    const form = useRef();

    const [loading, setLoading] = useState('blank');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const [volunteer, setVolunteer] = useState({
        firstName: '',
        lastName: '',
        email: '',
        about: '',
        country: '',
        city: '',
        phoneNumber: '' 
    })

    const db = getFirestore();


    const sendToDatabase = async()=>{
        setLoading('loading');
        const docRef = await addDoc(collection(db, "Volunteer"), volunteer)
        setLoading('done');
        console.log(docRef);
        setVolunteer({
            firstName: '',
            lastName: '',
            email: '',
            about: '',
            country: '',
            city: '',
            phoneNumber: '' 
        })
    }
    const sendEmail = () => {
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_PROJECT_ID, process.env.REACT_APP_EMAILJS_EMAIL_TEMPLATE_VOLUNTEER, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    const doBoth = (e)=>{
        e.preventDefault();
        sendEmail()
        sendToDatabase()
    }
  return (
    <main id='Volunteer'>
        <Header setScrollI={setScrollI} active={'Volunteer'}/>
        {loading !== 'blank' && <Modal setLoading={setLoading} loading={loading} text={'Thank you for Volunteering'}/>}
        <div className="containerW">
        {/* <Link to="/"><img src="./assets/logo2.png" alt="" /></Link> */}
        <section className="sec-1">
            <h1>Become a Volunteer today!</h1>
            <p className='excited'>We are excited for you to join our community of volunteers. <br />Please complete the form below to join us and become a volunteer.</p>
            <form ref={form} onSubmit={doBoth}>
                <div>
                    <input required type="text" name='firstName' value={volunteer.firstName}  onChange={(e)=> setVolunteer({...volunteer, firstName: e.target.value})} placeholder="First name" />
                    <input required type="text" name='lastName' value={volunteer.lastName}  onChange={(e)=> setVolunteer({...volunteer, lastName: e.target.value})} placeholder="Last name" />
                </div>
                <input required type="email" name='email'  value={volunteer.email} onChange={(e)=> setVolunteer({...volunteer, email: e.target.value })} placeholder="Email" />
                <input required type="tel"  name='tel' value={volunteer.phoneNumber} onChange={(e)=> setVolunteer({...volunteer, phoneNumber: e.target.value })} placeholder="Enter Phone Number" />
                <div>
                    <input required type="text" name='country'  value={volunteer.country} onChange={(e)=> setVolunteer({...volunteer, country: e.target.value })} placeholder="Country" />
                    <input required type="text" name='city' value={volunteer.city} onChange={(e)=> setVolunteer({...volunteer, city: e.target.value })} placeholder="State" />
                </div>
                <textarea required placeholder="Tell us about you" name='about' value={volunteer.about}  onChange={(e)=> setVolunteer({...volunteer, about: e.target.value })} cols="30" rows="10"/>
                <button>Become A Volunteer</button>
            </form>
        </section>
        </div>
        <Footer setScrollI={setScrollI}  setScrollJ={setScrollJ}/> 
    </main>
  )
}

export default Volunteer