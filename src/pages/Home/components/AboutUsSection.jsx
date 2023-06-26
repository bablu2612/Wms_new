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
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cloud-arrow-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                    />
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                  </svg>
                </div>
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
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                </div>
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
                      src={require('../assets/aboutImage.jpg')}
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
