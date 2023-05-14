import { useState, useEffect, useRef } from 'react';
import CountTo from '../CountTo';
import Link from 'next/link';
import aboutData from '@data/Digital/about.json';

const About = () => {
  const numbersSectionRef = useRef(null);
  const [position, setPosition] = useState({ from: 300, to: 500 });

  useEffect(() => {
    const numbersSection = numbersSectionRef.current;
    const numbersSectionHeight = numbersSection.offsetHeight;
    const numbersSectionTop = numbersSection.offsetTop;

    const Position = { from: numbersSectionTop - numbersSectionHeight - 100, to: numbersSectionTop + numbersSectionHeight };

    setPosition(Position);
  }, []);

  return (
    <section className="about style-1" data-scroll-index="1">
      <div className="container">
        <div className="content">
          <div className="about-logos d-flex align-items-center justify-content-between border-bottom border-1 brd-light pb-20">
            { 
              aboutData.logos.map((logo, index) => (
                <a href="#" className="logo wow fadeInUp" data-wow-delay={index * 0.2 + "s"} key={index}>
                  <img src={logo} alt="" />
                </a>
              ))
            }
          </div>
          <div className="about-info">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="title">
                  <h3 className=" wow fadeInUp slow">Accelerating your
Enterprise Application Development</h3>
                  <small className="wow fadeInUp slow fw-bold"></small>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info">
                  <h6 className=" wow fadeInUp slow">
                  Established in 2013, Dezyne Technologies is an IT Services and Consultancy company
                  </h6>
                  <h6 className=" wow fadeInUp slow">
                  With over 50+ years of collective experience in the team (Worked with Global organizations like STMicroelectronics Pvt Ltd, Synopsis Pvt Ltd, Conexant Systems, Cadence Design Systems Pvt Ltd and, NEC Technologies to name a few). We specialize into providing elegant and intuitive solution in the areas of Mobile Application Development, Web Application Development, Cloud Solutions, IoT Solutions, Embedded System Design and Data Analytics.
                  </h6>
                  <Link href="/page-about-5">
                    <a className="btn btn-outline-light mt-5 sm-butn wow fadeInUp slow">
                      <span>more about us</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="about-numbers" ref={numbersSectionRef}>
            <div className="row">
              {
                aboutData.numbers.map((item, index) => (
                  <div className="col-lg-3 col-sm-6" key={index}>
                    <div className="num-item wow fadeInUp" data-wow-delay="0">
                      <div className="num">
                        <CountTo className="counter" from={0} to={item.number} speed={1500} position={position} />
                        { item.operator && (<span>{typeof item.operator === 'string' ? item.operator : <i className="fas fa-plus"></i>}</span>) }
                      </div>
                      <div className="inf">
                        { item.info }
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <img src="/assets/img/about/num_shap.png" alt="" className="about_shap" />
        </div>
      </div>
    </section>
  )
}

export default About