import React from "react";
import AboutUsStyleCss from "../styles/AboutUs.style";

function AboutUsSection() {
  return (
    <AboutUsStyleCss className="main_aboutUs_section container py-80">
      <div className="row">
        <div className="col-md-6">
          <div className="aboutUs_content">
            <h4>About Us</h4>
            <h3>
              We Team of <span className="color_purple">Experience </span>It
              Specialities
            </h3>
            <p>
              Over 39,000 people work for us in more than 70 countries all This
              breadth of global coverage, combined with specialist.
            </p>
            <div className="boxes">
              <div className="box_container d-flex">
                <div className="icon">icon</div>
                <div className="box_content">
                  <h3>Cloud Based Services Free Spaces</h3>
                  <p>
                    We understand the importance of approaching each work
                    integrally and believe in the power of simple and easy
                    communication.
                  </p>
                </div>
              </div>
              <div className="box_container d-flex">
                <div className="icon">icon</div>
                <div className="box_content">
                  <h3>Expert Team Member</h3>
                  <p>
                    What separates theme from all other web design agencies is
                    the ability to offer the most Friendly Experience you can
                    imagine.
                  </p>
                </div>
              </div>
            </div>
            <button class="btn btn_blue">
              Explore More <span>+</span>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="imageSection">
            <div class="widget-container">
              <div className="ct-banner ct-banner3">
                <div class="ct-banner-inner">
                  <div class="ct-banner-image">
                    <img
                      className=""
                      src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h3-banner1-650x650.jpg"
                      alt="h3-banner1"
                    />
                  </div>
                  <div class="ct-banner-counter">
                    <div class="ct-counter-inner">
                      <div class="ct-counter-title el-empty">Science</div>
                      <div class="ct-counter-number-value">2010</div>
                    </div>
                  </div>
                  <div class="item--title el-empty">
                    We are a certified IT Service company.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutUsStyleCss>
  );
}

export default AboutUsSection;
