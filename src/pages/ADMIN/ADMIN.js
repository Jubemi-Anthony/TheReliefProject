import "./Admin.css";

const ADMIN = () => {
  return (
    <div>
    <section className="content-item" id="comments">
      <div className="container">   
        <h1>VOLUNTEERS</h1>
        <div className="row">
            <div className="col-sm-8">   
                <div className="media">
                    <div className="media-body">
                        <h3 className="media-heading"><span>Onyinye</span> Uchenna-Ezegbunam </h3>
                        <p>My name is Onyinye and I’ve always wanted an opportunity to help people and make the world a better place. I worked in a hospital and customer support too. </p>
                        <ul className="list-unstyled list-inline media-detail pull-left">
                            <li><i className="fa fa-phone"></i>09027003298</li>
                            <li><i className="fa fa-envelope"></i>onyinyewinnie98@gmail.com</li>
                        </ul>
                        <ul className="list-unstyled list-inline media-detail pull-right">
                            <li><i className="fa fa-globe"></i>Nigeria</li>
                            <li><i className="fa fa-location-arrow"></i>Lagos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default ADMIN