import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
  EffectFade,
} from "swiper";

const Testimonial = () => {
  let data = [
    {
      image: require("../assets/testdemo.png"),
      name: "Thakur",
      degn: "Design Predident",
      desc: "This is one of the BEST THEMES I have ever worked with. The extra bells and whistles added to it are amazing. Elementor features add extra flavor. The customer support is very responsive and amazing.",
    },
    {
      image: require("../assets/testdemo.png"),
      name: "Thakur",
      degn: "Design Predident",
      desc: "This is one of the BEST THEMES I have ever worked with. The extra bells and whistles added to it are amazing. Elementor features add extra flavor. The customer support is very responsive and amazing.",
    },
    {
      image: require("../assets/testdemo.png"),
      name: "Thakur",
      degn: "Design Predident",
      desc: "This is one of the BEST THEMES I have ever worked with. The extra bells and whistles added to it are amazing. Elementor features add extra flavor. The customer support is very responsive and amazing.",
    },
    {
      image: require("../assets/testdemo.png"),
      name: "Thakur",
      degn: "Design Predident",
      desc: "This is one of the BEST THEMES I have ever worked with. The extra bells and whistles added to it are amazing. Elementor features add extra flavor. The customer support is very responsive and amazing.",
    },
    {
      image: require("../assets/testdemo.png"),
      name: "Thakur",
      degn: "Design Predident",
      desc: "This is one of the BEST THEMES I have ever worked with. The extra bells and whistles added to it are amazing. Elementor features add extra flavor. The customer support is very responsive and amazing.",
    },
    {
      image: require("../assets/testdemo.png"),
      name: "Thakur",
      degn: "Design Predident",
      desc: "This is one of the BEST THEMES I have ever worked with. The extra bells and whistles added to it are amazing. Elementor features add extra flavor. The customer support is very responsive and amazing.",
    },
  ];

  const Card = ({ val }) => {
    return (
      <div>
        <img src={val?.image} alt="testimonial" className="" />
        <div>
          <h3> {val?.name}</h3>
          <span>{val?.degn}</span>
        </div>
        <div>{val?.desc}</div>
      </div>
    );
  };

  return (
    <section>
      <div>
        <div>
          <span>Testimonial</span>
        </div>
        <h3>
          <span>What Says Our Happy Clients About us </span>
        </h3>
      </div>
      <div>
        We value the experimentation, the reformation of the message, and the
        smart incentives. We offer a variety of services and solutions Worldwide
        and this is at the heart of how we approach our.
      </div>
      <div className="slider_section">
        <Swiper
          // effect={"creative"}
          effect="Fade"
          speed={2000}
          slidesPerView={2}
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
          {data?.map((val, index) => {
            return (
              <SwiperSlide style={{ height: "564px" }} key={"image"}>
                <Card val={val} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
