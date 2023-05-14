import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <header className="section-padding style-1" data-scroll-index="0">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-6">
              <div className="info">
                <div className="section-head mb-60">
                 
                  <h2>
                    Perfect IT solutions <span className="fw-normal">For your Bussniess</span>
                  </h2>
                </div>
                <div className="text">
                  We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.
                </div>
                <div className="bttns mt-5">
                  <Link href="/page-services-5">
                    <a className="btn btn-dark">
                      <span>Schedule Meeting<br/>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
</svg>
                      </span>
                    </a>
                  </Link>
                  <a href="https://youtu.be/pGbIOC83-So?t=21" className="vid-btn" onClick={openVideo}>
                    <i className="bi bi-play wow heartBeat infinite slow"></i>
                    <span>Play <br /> </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="img">
                <img src="/assets/img/header big.png" alt="main" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/header/head_shape_r.png" alt="" className="head-shape-r wow" />
      <img src="/assets/img/header/head_shape_l.png" alt="" className="head-shape-l wow" />
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="pGbIOC83-So"
              onClose={() => setOpen(false)}
            />
          )
      }
    </header>
  )
}

export default Header