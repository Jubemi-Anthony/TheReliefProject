import { Link } from "react-router-dom";
import "./Modal.css";
import { ClipLoader } from 'react-spinners';
import { useEffect } from "react";

const Modal = ({text, loading, setLoading}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  return (
    <section id="Modal">
        <div className="inside">
            <img onClick={()=> setLoading('blank')} className="cancel" src="https://cdn3.iconfinder.com/data/icons/neutro-interface/32/close-circle-64.png" alt="cancel" />
            <img src="./assets/logo2.png" alt="Logo"/>
            {loading === 'loading' && 
                <ClipLoader
                    size={100}
                    color="#FF9A00"
                />
            }
            {loading === 'done' &&
                <div className="cover">
                    <h2>{text}</h2>
                    <div className="choice">
                        <Link to="/">Home Page</Link>
                        <Link to="/project">View Our Projects</Link>
                    </div>
                </div>
            }
        </div>
    </section>
  )
}

export default Modal