import { useState } from "react"

const Projects = ({num,head,text,i1,i2,i3,tag, arr}) => {
    const [view, setView] = useState(false);
  return (
    <div className="Projects">
        <section className="one">
            <p className="fancy">{num}</p>
            <div>
                <h3>{head}</h3>
            </div>
        </section>
        <section className="two">
            <img src={i1} alt={tag}/>
            <img src={i2} alt={tag}/>
            <img src={i3} alt={tag}/>
        </section>
        <section className="two">
            {
                view &&arr?.map((img)=>(
                        <img src={img} alt={tag}/>
                    ))
            }
        </section>
        <div className="button">
            <button onClick={()=> setView(!view)}>View all</button>
        </div>
    </div>
  )
}

export default Projects