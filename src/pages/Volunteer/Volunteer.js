import { useState, useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import "./Volunteer.css";
import { Link } from 'react-router-dom';
import "../../Data/firebaseConfig";
import{getFirestore, addDoc, collection} from "firebase/firestore";
import Modal from '../../components/Modal/Modal';

const Volunteer = ({setScrollI,setScrollJ}) => {
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


    const sendToDatabase = async(e)=>{
        e.preventDefault();
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

  return (
    <main id='Volunteer'>
        {loading !== 'blank' && <Modal setLoading={setLoading} loading={loading} text={'Thank you for Volunteering'}/>}
        <div className="containerW">
        <Link to="/"><img src="./assets/logo2.png" alt="" /></Link>
        <section className="sec-1">
            <h1>Become a Volunteer today!</h1>
            <p className='excited'>We are excited for you to join our community of volunteers. <br />Please complete the form below to join us and become a volunteer.</p>
            <form onSubmit={sendToDatabase}>
                <div>
                    <input required type="text" value={volunteer.firstName}  onChange={(e)=> setVolunteer({...volunteer, firstName: e.target.value})} placeholder="First name" />
                    <input required type="text" value={volunteer.lastName}  onChange={(e)=> setVolunteer({...volunteer, lastName: e.target.value})} placeholder="Last name" />
                </div>
                <input required type="email"  value={volunteer.email} onChange={(e)=> setVolunteer({...volunteer, email: e.target.value })} placeholder="Email" />
                <input required type="tel"  value={volunteer.phoneNumber} onChange={(e)=> setVolunteer({...volunteer, phoneNumber: e.target.value })} placeholder="Enter Phone Number" />
                <div>
                    <input required type="text"  value={volunteer.country} onChange={(e)=> setVolunteer({...volunteer, country: e.target.value })} placeholder="Country" />
                    <input required type="text"  value={volunteer.city} onChange={(e)=> setVolunteer({...volunteer, city: e.target.value })} placeholder="State" />
                </div>
                <textarea required placeholder="Tell us about you" value={volunteer.about}  onChange={(e)=> setVolunteer({...volunteer, about: e.target.value })} cols="30" rows="10"/>
                <button>Become A Volunteer</button>
            </form>
        </section>
        </div>
        <Footer setScrollI={setScrollI}  setScrollJ={setScrollJ}/> 
    </main>
  )
}

export default Volunteer