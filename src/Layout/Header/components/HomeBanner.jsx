import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
  EffectFade,
} from "swiper";

const HomeBanner = () => {
  return (
    <div className="banner_main_section d-flex container">
      <div className="creactiveSection">
        <h3>We Are Creative</h3>
        <h2>
          {" "}
          Best It <span>Solution</span> Company
        </h2>
        <p>
          Get the most of reduction in your team's oprtation creates amazing
          UI/UX experiences.
        </p>
        <div className="buttonSections d-flex">
          <button className="btn btn_purple">
            About Us <span>+</span>
          </button>
          <button className="btn btn_blue">
            Our services <span>+</span>
          </button>
        </div>
        <img
          src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h3-shape1.png"
          className="animated_shape"
        />
      </div>
      <div className="slider_section">
        <Swiper
          // effect={"creative"}
          effect="Fade"
          speed={2000}
          slidesPerView={1}
          pagination={true}
          // modules={[EffectFade,Navigation, Pagination, EffectCreative, Autoplay]}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
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
              image: require("../assets/headerSlider.jpg"),
              title: "Gastroenterioiogy",
            },
            {
              image: require("../assets/headerSliderTwo.jpg"),
              title: "Allergist",
            },
            {
              image: require("../assets/headerSliderThree.jpg"),
              title: "Psychiatrist",
            },
          ]?.map(({ image, title }, index) => (
            <SwiperSlide style={{ height: "564px" }} key={"image" + index}>
              <img src={image} className="w-100" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;
