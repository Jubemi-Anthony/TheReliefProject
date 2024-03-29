import Footer from "../../components/footer/Footer";
import Header from "../../components/navigation/Navigation";
import "./Contact.css";
import { useState, useEffect, useRef} from "react";
import "../../Data/firebaseConfig";
import{getFirestore, addDoc, collection} from "firebase/firestore";
import Modal from '../../components/Modal/Modal';
import emailjs from '@emailjs/browser';

const Contact = ({setScrollI,setScrollJ}) => {
    const [loading, setLoading] = useState('blank');
    const [choice, setChoice] = useState('email');

    const form = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [message, setMessage] = useState({
        firstName: '',
        email: '',
        message: '',
        date: Date.now()
    }) 
    const db = getFirestore();
    const sendToDatabase = async()=>{
        setLoading('loading');
        const docRef = await addDoc(collection(db, "Contacts"), message)
        setLoading('done');
        console.log(docRef);
        setMessage({
            firstName: '',
            email: '',
            message: '',
            date: Date.now()
        })
    }

    const sendEmail = () => {
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_PROJECT_ID, process.env.REACT_APP_EMAILJS_EMAIL_TEMPLATE_CONTACT, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
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
    <main id="Contact">
        {loading !== 'blank' && <Modal setLoading={setLoading} loading={loading} text={"Thank you for Contacting Us"}/>}
        <Header setScrollI={setScrollI} active={'Contact'}/>
        <section className="main">
            <div className="container">
                <div className="left">
                    <p className="how">Contact Us</p>
                    <div className="contacts">
                        <div className="contact">
                            <img src="https://cdn4.iconfinder.com/data/icons/helpdesk-support-business/128/help_desk_helpdesk_support_telephone_phone-33-64.png" alt="Contact Icon"/>
                            <p>+234 7068697324</p>
                        </div>
                        <div className="contact">
                            <img src="https://cdn4.iconfinder.com/data/icons/helpdesk-support-business/128/help_desk_helpdesk_support_telephone_phone-33-64.png" alt="Contact Icon"/>
                            <p>+234 7013467353</p>
                        </div>
                        <div className="contact">
                            <img src="https://cdn0.iconfinder.com/data/icons/orange-grey/32/02Orange_Black_Icon_set-64.png" alt="Contact Icon"/>
                            <p>mo@thereliefproject.org</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <form ref={form} onSubmit={doBoth}>
                        <div className="group">
                            <label>Full Name</label>
                            <input required type="text" name="firstName" value={message.firstName}  onChange={(e)=> setMessage({...message, firstName: e.target.value})} placeholder="Enter Full Name" />
                        </div>
                        <div className="group">
                            <label>How do you want us to contact you?</label>
                            <div className="choose">
                                <div onClick={()=>setChoice('email')} className="choice">
                                    <div className={choice === 'email' ? 'selected big' : 'big'}><div></div></div>
                                    <p>Through Email</p>
                                </div>
                                <div onClick={()=>setChoice('phone')} className="choice">
                                    <div className={choice === 'phone' ? 'selected big' : 'big'}><div></div></div>
                                    <p>Through Phone</p>
                                </div>
                            </div>
                            {
                                choice === 'email'? <input required name="email" type="email"  value={message.email} onChange={(e)=> setMessage({...message, email: e.target.value })} placeholder="Email" />:<input name="email" required type="tel"  value={message.email} onChange={(e)=> setMessage({...message, email: e.target.value })} placeholder="Phone Number" />
                            }
                        </div>
                        <div className="group">
                            <label>Message</label>
                            <textarea required name="message" placeholder="Drop a message" value={message.message}  onChange={(e)=> setMessage({...message, message: e.target.value })} cols="30" rows="10"/>
                        </div>
                        <button>
                            Send Message
                            <img src="https://cdn4.iconfinder.com/data/icons/communication-163/32/send-64.png" alt="send icon" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
        <Footer setScrollI={setScrollI}  setScrollJ={setScrollJ}/> 
    </main>
  )
}

export default Contact