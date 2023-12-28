import React from 'react'

const Contact = ({email,firstName,message}) => {
  return (
    <div className="row">
            <div className="col-sm-8">   
                <div className="media">
                    <div className="media-body">
                        <h3 className="media-heading"><span>{firstName}</span></h3>
                        <p>{message}</p>
                        <ul className="list-unstyled list-inline media-detail pull-left">
                            <li><i className="fa fa-envelope"></i>{email}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact