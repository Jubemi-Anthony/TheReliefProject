
const RecentProjects = ({img,head,text}) => {
    return (
      <div className="RecentProjects">
          <img src={img} alt="" />
          <div className="bottom">
              <h3>{head}</h3>
              <p>{text}</p>
          </div>
      </div>
    )
  }
  
  export default RecentProjects