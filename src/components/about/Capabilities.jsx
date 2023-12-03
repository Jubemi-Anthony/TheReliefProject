
const Capabilities = ({image, text, head}) => {
  return (
    <div id="Capabilities">
        <img src={image} alt="b" />
        <h4>{head}</h4>
        <p>{text}</p>
    </div>
  )
}

export default Capabilities