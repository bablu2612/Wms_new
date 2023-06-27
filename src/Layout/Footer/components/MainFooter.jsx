const MainFooter = () => {
  return (
    <div className="main_footer_section">
      <div className="container">
        <div className="row">
          <div className="footer_first_row">
            <img
              src={require("../../assets/wisemindSection.png")}
              alt="image"
            />
            <p>
              We work with a passion of taking challenges and creating new ones
              in advertising sector.
            </p>
          </div>
          <div className="footer_second_row">
            <h3 className="blue_underline">Newsletter</h3>
            <p>Subscribe our newsletter to get our latest update & news.</p>
            <div className="field_section d-flex">
              <input type="text" placeholder="Your mail address" />
              <button>icon</button>
            </div>
            <div className="socialMediaIcons"></div>
          </div>
          <div className="footer_Third_row">
            <h3 className="blue_underline">Official info</h3>
            <div className="location">
              <span>icon</span>
              <span>lorem ipsum india</span>
            </div>
            <div className="mobile">
              <span>icon</span>
              <span>1-888-452-1505</span>
            </div>

            <h4>Open Hours:</h4>
            <div className="mobile">
              <span>icon</span>
              <span> Mon-Sat: 8am - 5pm </span>
            </div>
          </div>
          <div className="footer_fourth_row">
            <h3 className="blue_underline">Gallery</h3>
            <img src="" alt="gallery" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
