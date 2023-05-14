import Link from 'next/link';
import chooseUsData from '@data/Digital/chooseus.json';

const ChooseUs = () => {
  return (
    <section className="choose-us section-padding pt-0 style-1" data-scroll-index="3">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head mb-60">
                <h6 className="color-main text-uppercase wow fadeInUp">Why choose us</h6>
                <h2 className="wow fadeInUp">
                Our Perspective  <span className="fw-normal">On Enterprise Applications</span>
                </h2>
              </div>
              <div className="text">
              With the advances in AI and commericial availability of good quality code generators; low-code or no-code is going to the industry norm. We at Dezyne, help our partners adopt the same for accelerated application development saving dollars and time.
              </div>
              <ul>
                {
                  chooseUsData.map((item, index) => (
                    <li className="wow fadeInUp" key={index}>
                      <span className="icon">
                        <i className="bi bi-check2"></i>
                      </span>
                      <h6>
                        { item }
                      </h6>
                    </li>
                  ))
                }
              </ul>

              <Link href="/page-about-5">
                <a className="btn butn-gard border-0 text-white wow fadeInUp">
                  <span>How We Works</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/choose_us/choose_lines.svg" alt="" className="choose-us-img" />
      <img src="/assets/img/choose_us/choose us img1.png" alt="" className="choose-us-brands" />
      <img src="" alt="" className="choose-us-bubbles" />
    </section>
  )
}

export default ChooseUs