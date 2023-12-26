import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./Donate.css";
import { useState, useEffect } from "react";
// import PaystackProp from "@paystack/inline-js";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import "../../Data/firebaseConfig";
import{getFirestore, addDoc, collection} from "firebase/firestore";
import Modal from '../../components/Modal/Modal';
import Button from "../../components/Button";

const Donate = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const [loading, setLoading] = useState('blank');
    
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [amount, setAmount] = useState(5000);
    const [comment, setComment] = useState('')
    const [repeat, setRepeat] = useState(false);
    const [showDonate, setShowDonate] = useState(false);
    const db = getFirestore();


    const [status, setStatus] = useState(0)
    const sendToDatabase = async(e,n,a,r)=>{
        const docRef = await addDoc(collection(db, "Transactions"), {
            email: e,
            name: n,
            amount: a,
            reference: r,
            comment: comment
        })
        console.log(docRef);
    }

    
    const config = {
        public_key: 'FLWPUBK_TEST-329012b05e7544af8e531a84ecf6684e-X',
        tx_ref: Date.now(),
        amount: amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: email,
           phone_number: '',
          name: firstName,
        },
        customizations: {
          title: 'The Relief Project',
          description: 'Donate to The Relief Project',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };
    const handleFlutterPayment = useFlutterwave(config);
    const payWithFlutter = (e)=>{
        e.preventDefault();
        if(amount === ''){
            alert('Amount Is Empty');
            return;
        }
        handleFlutterPayment({
            callback: (response) => {
            if(response.status === 'completed'){
                sendToDatabase(response.customer.email, response.customer.name, response.amount, response.tx_ref)
                setLoading('done');
                setAmount(5000);
                setFirstName('');
                setEmail('');
                setComment('');
            }else{
                alert('Not Comppleted!')
            }
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
        });
    }

    const widthRange = (status/1000000) * 100;

  return (
    <main id="Donate">
        {loading !== 'blank' && <Modal setLoading={setLoading} loading={loading} text={'Thank you for Donating'}/>}

        <section className="main-left">
            <div className="container">
                <div className="top-head">
                    <Link to="/">
                        <img src="./assets/logo2.png" alt="Logo" />
                    </Link>
                </div>
            </div>
            {
                showDonate === false &&
                <div className="container">
                <div className="main-body">
                    <h1>Your generosity helps us drive our mission, and get help to the people who need it most.🧡</h1>
                    <section>
                    <div className="range"><div className="value" style={{width: `${widthRange}%`}}></div></div>
                    <div className="gotten">
                        <p>₦{status} <span>raised</span></p>
                        <p>₦1,000,000</p>
                    </div>
                    </section>
                    <img className="me-an0" src="./assets/donate.png" alt="section 2" />
                </div>
                <div className="end-body">
                    <h3>Recent donations</h3>
                    <div className="donations000">
                        {/* <div className="s000">
                            <p><span>Jubemi Anthony</span> made their regular donation</p>
                            <p>₦1,000</p>
                        </div> */}
                    </div>
                </div>
            </div>
            }
        </section>
        <aside id="big-donate">
        <div className="container">
                <p className="h3">Secure Donation</p>
                <div className="donations">
                    <div className="top">
                        <button onClick={()=> setRepeat(false)} className={!repeat ? 'matching' : ''}>Give Once</button>
                        <button onClick={()=> setRepeat(true)} className={repeat ? 'matching' : ''}>
                            Monthly
                            <img src="https://cdn2.iconfinder.com/data/icons/valentine-day-16/512/609_heart_love_valentine_valentines_day_valentine_valentines_day_love-64.png" alt="heart" />
                        </button>
                    </div>
                    <div className="middle">
                        <Button amount={amount} setAmount={setAmount} number={1000} text={'1,000'}/>
                        <Button amount={amount} setAmount={setAmount} number={5000} text={'5,000'}/>
                        <Button amount={amount} setAmount={setAmount} number={10000} text={'10,000'}/>
                        <Button amount={amount} setAmount={setAmount} number={50000} text={'50,000'}/>
                        <Button amount={amount} setAmount={setAmount} number={100000} text={'100,000'}/>
                        <Button amount={amount} setAmount={setAmount} number={1000000} text={'1,000,000'}/>
                    </div>
                    <div className="end">
                        <p>₦</p>
                        <input type="number" value={amount} placeholder="Other Amount" onChange={(e)=> setAmount(e.target.value)}/>
                    </div>
                    <div className="inputs">
                        <input type="text" placeholder="Full Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                        <input type="email" placeholder="Email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <p>Designate to children in Nigeria who need it most</p>
                    <textarea value={comment} onChange={(e)=> setComment(e.target.value)} placeholder="Add a comment"/>
                    <button onClick={payWithFlutter} className="submit">Donate</button>
                </div>
            </div>
        </aside>
        {showDonate === false && <button onClick={()=> setShowDonate(!showDonate)} className="submit2">Donate</button>}
        {
            showDonate &&
            <aside>
            <div className="container">
                <img onClick={()=> setShowDonate(!showDonate)} src="https://cdn3.iconfinder.com/data/icons/multimedia-orange-ui/68/Left-64.png" alt="back" className="icon" />
                <p className="h3">Secure Donation</p>
                <div className="donations">
                    <div className="top">
                        <button onClick={()=> setRepeat(false)} className={!repeat ? 'matching' : ''}>Give Once</button>
                        <button onClick={()=> setRepeat(true)} className={repeat ? 'matching' : ''}>
                            Monthly
                            <img src="https://cdn2.iconfinder.com/data/icons/valentine-day-16/512/609_heart_love_valentine_valentines_day_valentine_valentines_day_love-64.png" alt="heart" />
                        </button>
                    </div>
                    <div className="middle">
                        <Button amount={amount} setAmount={setAmount} number={1000} text={'1,000'}/>
                        <Button amount={amount} setAmount={setAmount} number={5000} text={'5,000'}/>
                        <Button amount={amount} setAmount={setAmount} number={10000} text={'10,000'}/>
                        <Button amount={amount} setAmount={setAmount} number={50000} text={'50,000'}/>
                        <Button amount={amount} setAmount={setAmount} number={100000} text={'100,000'}/>
                        <Button amount={amount} setAmount={setAmount} number={1000000} text={'1,000,000'}/>
                    </div>
                    <div className="end">
                        <p>₦</p>
                        <input type="number" value={amount} placeholder="Other Amount" onChange={(e)=> setAmount(e.target.value)}/>
                    </div>
                    <div className="inputs">
                        <input type="text" placeholder="Full Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                        <input type="email" placeholder="Email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <p>Designate to children in Nigeria who need it most</p>
                    <textarea value={comment} onChange={(e)=> setComment(e.target.value)} placeholder="Add a comment"/>
                    <button onClick={payWithFlutter} className="submit">Donate</button>
                </div>
            </div>
        </aside>
        }
    </main>
  )
}

export default Donate