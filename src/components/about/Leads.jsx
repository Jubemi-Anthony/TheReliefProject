
const Leads = ({head, first, second, title}) => {
  return (
    <div id="Leads">
        <h2>{title}</h2>
        <h4>{head}</h4>
        <p>{first}</p>
        <p>{second}</p>
    </div>
  )
}

export default Leads