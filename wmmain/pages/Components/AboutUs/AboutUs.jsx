import React from "react";
import styles from "./about.module.scss";

const AboutUs = () => {
  return (
    <section className={styles.main}>
      <div className={styles.mainInner}>
        <div className={styles.left}>
          <div className={styles.heading}>
            <span>About Us</span>
          </div>
          <div>
            <h3>
              <span>
                We Team of
                <cite> Experience </cite>
                It Specialities
              </span>
            </h3>
          </div>
          <div>
            Over 39,000 people work for us in more than 70 countries all This
            breadth of global coverage, combined with specialist.
          </div>
          <div>
            <div>Icon</div>
            <div>
              <h4>Expert Team Member</h4>
              <div>
                What separates theme from all other web design agencies is the
                ability to offer the most Friendly Experience you can imagine.
              </div>
            </div>
          </div>
          <div>
            <div>Icon</div>
            <div>
              <h4>Expert Team Member</h4>
              <div>
                What separates theme from all other web design agencies is the
                ability to offer the most Friendly Experience you can imagine.
              </div>
            </div>
          </div>
          <button>Explore +</button>
        </div>
        <div className={styles.right}>
          <div className={styles.banner}>
            <div className={styles.bannerInner}>
              <div className={styles.image}>
                <img src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h3-banner1-650x650.jpg" />
              </div>
              <div className={styles.counter}>
                <div className={styles.inner}>
                  <div>Science</div>
                  <div>2010</div>
                </div>
              </div>
              <div>We are a certified IT Service company.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
