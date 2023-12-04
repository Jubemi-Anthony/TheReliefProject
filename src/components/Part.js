
const Part = ({img, text}) => {
  return (
    <div className="partners">
        <img src={img} alt={text} />
        <h3>{text}</h3>
    </div>
  )
}

export default Part