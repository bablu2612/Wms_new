import React from 'react';
import AboutUsStyleCss from '../styles/AboutUs.style';

function AboutUsSection() {
    return (
        <AboutUsStyleCss className='main_aboutUs_section'>
            <div className='aboutUs_content'>
                <h4>About Us <span></span></h4>
                <h3>We Team of Experience It Specialities</h3>
                <p>Over 39,000 people work for us in more than 70 countries all This breadth of global coverage, combined with specialist.</p>
                <div className='boxes'>
                    <div className='box_container'>
                        <div className='icon'>icon</div>
                        <div className='box_content'>
                            <h3>Cloud Based Services Free Spaces</h3>
                            <p>We understand the importance of approaching each work integrally and believe in the power of simple and easy communication.</p>
                        </div>
                    </div>
                    <div className='box_container'>
                        <div className='icon'>icon</div>
                        <div className='box_content'>
                            <h3>Expert Team Member</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <button>Explore More</button>
            </div>
            <div className='imageSection'>
                <div class="widget-container">
                    <div className="ct-banner ct-banner3">
                        <div class="ct-banner-inner">
                            <div class="ct-banner-image">
                                <img className="" src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h3-banner1-650x650.jpg" width="650" height="650" alt="h3-banner1" />
                            </div>
                            <div class="ct-banner-counter">
                                <div class="ct-counter-inner">
                                    <div class="ct-counter-title el-empty">Science</div>
                                    <div class="ct-counter-number-value" data-duration="2000" data-to-value="2010" data-delimiter="">2010</div>
                                </div>
                            </div>
                            <div class="item--title el-empty">We are a certified IT Service company.</div>
                        </div>
                    </div>
                </div>
            </div>
        </AboutUsStyleCss>
    )
}

export default AboutUsSection;