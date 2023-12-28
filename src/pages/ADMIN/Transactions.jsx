import React from 'react'

const Transactions = ({email,name,comment,amount, reference}) => {
    
    return (
      <div className="row">
              <div className="col-sm-8">   
                  <div className="media">
                      <div className="media-body">
                          <h3 className="media-heading"><span>{name}</span></h3>
                          <p>{comment}</p>
                          <ul className="list-unstyled list-inline media-detail pull-left">
                              <li><i className="fa fa-envelope"></i>{email}</li>
                              <li><i className="fa fa-money"></i>₦{amount}</li>
                              <li><i className="fa fa-money"></i>Reference ID: {reference}</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
    )
  }

export default Transactions