const Volunteer = ({email,lastName,firstName,country,city,about,phoneNumber}) => {
    
  return (
    <div className="row">
            <div className="col-sm-8">   
                <div className="media">
                    <div className="media-body">
                        <h3 className="media-heading"><span>{firstName}</span> {lastName}</h3>
                        <p>{about}</p>
                        <ul className="list-unstyled list-inline media-detail pull-left">
                            <li><i className="fa fa-phone"></i>{phoneNumber}</li>
                            <li><i className="fa fa-envelope"></i>{email}</li>
                        </ul>
                        <ul className="list-unstyled list-inline media-detail pull-right">
                            <li><i className="fa fa-globe"></i>{country}</li>
                            <li><i className="fa fa-location-arrow"></i>{city}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Volunteer