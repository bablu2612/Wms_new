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
    <div>
      <div className="elementor-widget-container">
        <div className="ct-heading">
          <div className="ct-heading--inner">
            <div className="item--text-below"></div>
            <div className="item--sub-title style-line-leftright">
              <span> Blog </span>
            </div>
            <h3 className="item--title st-default">
              <span className="ct-text-inner">
                Trending IT{" "}
                <cite className="ct-text-highlight"> Solution </cite> Article
                &amp; Tips
              </span>
            </h3>
          </div>
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
                      className="btn btn_blue"
                      href="https://demo.casethemes.net/itfirm/regional-manager-limited-time-management/"
                      tabindex="0"
                    >
                      {" "}
                      <span>Read More</span>{" "}
                      <i className="ct-icon-plus size-sm space-left"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSection;
