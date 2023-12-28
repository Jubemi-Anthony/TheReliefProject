import "./Admin.css";
import Contact from "./Contact";
import Transactions from "./Transactions";
import Volunteer from "./Volunteer";
import{getFirestore, collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";

const ADMIN = () => {
    const db = getFirestore();
    const [volunteers, setVolunteers] = useState([])
    const [contacts, setContacts] = useState([])
    const [donations, setDonations] = useState([])

    const [choice, setChoice] = useState('volunteers')

    useEffect(() => {
        const fetchVolunteers = async () =>{
            const querySnapShot = await(getDocs(collection(db, "Volunteer")));
            const tempoaryArr = []
            querySnapShot.forEach((doc) => (
                tempoaryArr.push(doc.data())
            ))
            setVolunteers(tempoaryArr);
        }
        const fetchContacts = async () =>{
            const querySnapShot = await(getDocs(collection(db, "Contacts")));
            const tempoaryArr = []
            querySnapShot.forEach((doc) => (
                tempoaryArr.push(doc.data())
            ))
            setContacts(tempoaryArr);
        }
        const fetchDonations = async () =>{
            const querySnapShot = await(getDocs(collection(db, "Transactions")));
            const tempoaryArr = []
            querySnapShot.forEach((doc) => (
                tempoaryArr.push(doc.data())
            ))
            setDonations(tempoaryArr);
            
        }
        fetchDonations()
        fetchContacts()
        fetchVolunteers()
    }, [])
    
  return (
    <div>
    <section className="content-item" id="comments">
      <div className="container">   
        <div className="options">
        <h1 onClick={()=> setChoice('volunteers')} className={choice === 'volunteers'? 'orange': ''}>VOLUNTEERS</h1>
        <h1 onClick={()=> setChoice('contacts')} className={choice === 'contacts'? 'orange': ''}>CONTACTS</h1>
        <h1 onClick={()=> setChoice('donate')} className={choice === 'donate'? 'orange': ''}>TRANSACTIONS</h1>
        </div>
        {choice === 'volunteers'? volunteers.length === 0 ? <h1 className="NOTHING">NOTHING IN HERE</h1> :
            volunteers.map((volunteer) =>(
                <Volunteer
                    email = {volunteer?.email}
                    lastName = {volunteer?.lastName}
                    firstName = {volunteer?.firstName}
                    phoneNumber = {volunteer?.phoneNumber}
                    country = {volunteer?.country}
                    city = {volunteer?.city}
                    about = {volunteer?.about}
                />
            )) : choice === 'contacts'?  contacts.length === 0 ? <h1 className="NOTHING">NOTHING IN HERE</h1> :
            contacts.map((contact)=>(
                <Contact
                    email={contact?.email}
                    firstName={contact?.firstName}
                    message={contact?.message}
                />
            )) : donations.length === 0 ? <h1 className="NOTHING">NOTHING IN HERE</h1> :
            donations.map(donation =>(
                <Transactions
                    email={donation?.email}
                    name={donation?.name}
                    reference={donation?.reference}
                    amount={donation?.amount}
                    comment={donation?.comment}
                />
            ))
        }
    </div>
</section>
    </div>
  )
}

export default ADMIN