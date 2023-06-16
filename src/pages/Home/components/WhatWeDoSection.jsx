import _ from "lodash";
import React from "react";
import WhatweDosectionstyle from "../styles/WhatweDosection.style";

function WhatWeDoSection() {
  const CardContent = [
    {
      id: 1,
      image: require("../assets/WWDImageFirst.jpg"),
      para: "Our goal is to propel your to business forward...",
      button: "Read more +",
      heading: "Backup & Recovery",
    },
    {
      id: 2,
      image: require("../assets/WWDImageSecond.jpg"),
      para: "Our goal is to propel your to business forward...",
      button: "Read more +",
      heading: "VoIP Solutions",
    },
    {
      id: 3,
      image: require("../assets/WWDImageThird.jpg"),
      para: "Our goal is to propel your to business forward...",
      button: "Read more +",
      heading: "Consulting Planning",
    },
    {
      id: 4,
      image: require("../assets/WWDImageFourth.jpg"),
      para: "Our goal is to propel your to business forward...",
      button: "Read more +",
      heading: "IT Consultency",
    },
  ];
  return (
    <WhatweDosectionstyle>
      <div className="whatWe_doMain_class py-80">
        <div className="container">
          <div className="heading_head">
            <h3>
              <span>What We Do</span>
            </h3>
            <h2>
              We Run all kinds of Service <br /> that your{" "}
              <span class="color_purple">Success </span>
            </h2>
          </div>
          <div className="card">
            {_.map(CardContent, ({ id, image, button, heading, para }) => (
              <div className="grid-item">
                <div className="grid-item-inner">
                  <div className="item--featured">
                    <a href="https://demo.casethemes.net/itfirm/service/backup-recovery/">
                      <img
                        className="no-lazyload "
                        src={image}
                        width="220"
                        height="220"
                        alt="service7"
                        title="service7"
                      />
                    </a>
                    <div className="item--icon">
                      <i className="flaticon-data-network">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-hdd-network"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8.5v3a1.5 1.5 0 0 1 1.5 1.5h5.5a.5.5 0 0 1 0 1H10A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5H.5a.5.5 0 0 1 0-1H6A1.5 1.5 0 0 1 7.5 10V7H2a2 2 0 0 1-2-2V4zm1 0v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1zm6 7.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5z" />
                        </svg>
                      </i>
                    </div>
                  </div>
                  <div className="item--holder">
                    <h3 className="item--title">
                      <a href="https://demo.casethemes.net/itfirm/service/backup-recovery/">
                        {heading}
                      </a>
                    </h3>
                    <div className="item--content">{para}</div>
                    <div className="item-readmore">
                      <a
                        className="btn btn-dark1 btn_blue"
                        href="https://demo.casethemes.net/itfirm/service/backup-recovery/"
                      >
                        Read more +
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              // <div className='cardContainer' key={id}>
              //     <div className='imageSection'>
              //         <img src={image} />
              //         <div className='icon'>
              //             circle
              //         </div>
              //     </div>
              //     <div className='cardContent'>
              //         <h3>{heading}</h3>
              //         <p>{para}</p>
              //         <button>{button}</button>
              //     </div>
              // </div>
            ))}
          </div>
          <div className="text-center">
            <button className="btn btn_blue">More Service +</button>
          </div>
        </div>
      </div>
    </WhatweDosectionstyle>
  );
}

export default WhatWeDoSection;
