import footerInfo from '@data/Digital/footer.json';

const Footer = () => {
  return (
    <footer className="style-1">
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="foot_info">
                <a href="#" className="logo mb-3">
                  <img src="/assets/img/dezyne footer.png" alt="footerlogo" />
                </a>
                <div className="text mb-4">
                Dezyne Technologies is a young IT services design house formed in 2013, providing services in the area of enterprise application development, mobile application development,custom software solutions for document/workflow management. <br /> 
                </div>
                <ul className="mb-4">
                  <li className="d-flex">
                    <i className="bi bi-house me-3"></i>
                    <a href="#">
                      <span>{ footerInfo.address }</span>
                    </a>
                  </li>
                  <li className="d-flex">
                    <i className="bi bi-envelope me-3"></i>
                    <a href="#">
                      <span>{ footerInfo.email }</span>
                    </a>
                  </li>
                  <li className="d-flex">
                    <i className="bi bi-phone me-3"></i>
                    <a href="#">
                      <span>{ footerInfo.phone }</span>
                    </a>
                  </li>
                </ul>
                <div className="social_icons">
                
                  <a href="https://www.facebook.com/DezyneTechnologies" target='_blank'>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/dezyne-technologies-pvt-ltd/" target='_blank'>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="links">
                <div className="cont">
                  <h6 className="link_title">
                    Services
                  </h6>
                  <ul>
                    {
                      footerInfo.services.map((item, index) => (
                        <li key={index}>
                          <a href="#">{ item }</a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="links">
                <div className="cont">
                  <h6 className="link_title">
                    Information
                  </h6>
                  <ul>
                    {
                      footerInfo.information.map((item, index) => (
                        <li key={index}>
                          <a href="#">{ item }</a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="foot_subscribe">
                <h6 className="link_title">
                  Newsletter
                </h6>
                <p>
                  Register now to get latest updates on  promotions & coupons.
                </p>
                <div className="input-group my-4">
                  <input type="text" className="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="button-addon2" />
                  <button className="btn butn-gard border-0 text-white px-3" type="button" id="button-addon2">
                    <span>Subscribe</span>
                  </button>
                </div>
                <p className="fst-italic">By subscribing, you accepted the our <a href="#" className="text-decoration-underline"> Policy</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="foot">
              <p>
                © 2023 Copyrights by <a href="#" className="text-white text-decoration-underline">Dezyne Technologies</a> All Rights Reserved 
    
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/footer/foot_l.png" alt="" className="foot_l" />
      <img src="/assets/img/footer/foot_r.png" alt="" className="foot_r" />
    </footer>
  )
}

export default Footer