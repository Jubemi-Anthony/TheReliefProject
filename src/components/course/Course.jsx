
const Course = ({title, description, oldPrice, newPrice, length}) => {
  return (
    <div className="Course-Card">
        <img src="/about/Rectangle648.png" alt="head-card" />
        <div className="priceLength">
            <p className="length">{length}-Day Course</p>
            <div className="prices">
                <p>₦{oldPrice}</p>
                <p>₦{newPrice}</p>
            </div>
        </div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
        <div className="buttons">
            <button>Enrol Now</button>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Course