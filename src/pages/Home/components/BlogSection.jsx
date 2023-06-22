import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
  EffectFade,
} from "swiper";

const BlogSection = () => {
  return (
    <div className="wrap_blog py-80">
      <div className="container">
        <div className="container_blog">
          <div class="teamMember_title heading_head">
            <h3>
              <span> Blog </span>
            </h3>
            <h2>
              Trending IT <span class="color_purple">Solution</span>
              <br /> Article &amp; Tips
            </h2>
          </div>
        </div>
        <div className="sliderSection">
          <Swiper
            // effect={"creative"}
            effect="Fade"
            speed={2000}
            slidesPerView={3}
            pagination={true}
            // modules={[EffectFade,Navigation, Pagination, EffectCreative, Autoplay]}
            modules={[EffectFade, Navigation, Pagination]}
            creativeEffect={{
              prev: {
                // shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            //   onSlideChange={() => console.log("slide change")}
            //   onSwiper={(swiper) => console.log(swiper)}
          >
            {[
              {
                id: 1,
                image: require("../assets/BlogImageOne.jpg"),
                para: "Regional Manager & limited time management.",
              },
              {
                id: 2,
                image: require("../assets/BlogImageTwo.jpg"),
                para: "Revitalising your people in to a retail downturn.",
              },
              {
                id: 3,
                image: require("../assets/BlogImageThree.jpg"),
                para: "Organisational teams of the are just like families",
              },
              {
                id: 4,
                image: require("../assets/BlogImageFour.jpg"),
                para: "Virtual Classroom Software Development for Teaching.",
              },
              {
                id: 5,
                image: require("../assets/BlogImageFive.jpg"),
                para: "Digital Transformation in Healthcare in 2021: 7 Keys.",
              },
              {
                id: 6,
                image: require("../assets/BlogImageSix.jpg"),
                para: "Know The Difference! Food Delivery Apps Vs Food.",
              },
            ]?.map(({ image, para, id }, index) => (
              <SwiperSlide style={{ height: "564px" }} key={id}>
                <div className="grid-item-inner ">
                  <div className="item--featured">
                    <a
                      href="https://demo.casethemes.net/itfirm/regional-manager-limited-time-management/"
                      tabindex="0"
                    >
                      <img
                        className=""
                        src={image}
                        width="600"
                        height="405"
                        alt="h2-blog1"
                      />
                    </a>
                    <div className="item-date">
                      <div className="item-date-inner">
                        <div className="item-date--day">08</div>
                        <div className="item-date--month">Dec</div>
                      </div>
                    </div>
                  </div>
                  <div className="item--holder">
                    <div className="item--meta">
                      <div className="item-author">
                        <a
                          href="https://demo.casethemes.net/itfirm/author/admin/"
                          tabindex="0"
                        >
                          <span className="item-icon-box">
                            <i className="caseicon-user"></i>
                          </span>{" "}
                          Rayan Colins
                        </a>
                      </div>
                      <div className="item-comment">
                        <span className="item-icon-box">
                          <i className="caseicon-comment"></i>
                        </span>{" "}
                        2 Comments
                      </div>
                    </div>
                    <h4 className="item--title">
                      <a
                        href="https://demo.casethemes.net/itfirm/regional-manager-limited-time-management/"
                        tabindex="0"
                      >
                        Regional Manager &amp; limited time management.
                      </a>
                    </h4>
                    <div className="item--content">
                      {" "}
                      With over a decade experience, we’ve established ourselves
                      as one of the pioneering agencies in the region.…
                    </div>
                    <div className="item--readmore">
                      <a
                        className="btn btn_blue btn-dark1"
                        href="https://demo.casethemes.net/itfirm/regional-manager-limited-time-management/"
                        tabindex="0"
                      >
                        <span>Read More +</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
