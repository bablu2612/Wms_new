import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
  EffectFade,
} from "swiper";
import Testimonialstyle from "../styles/Testimonial.style";
import { Rating } from "@mui/material";

const Testimonial = () => {
  let data = [
    {
      image: require("../assets/testdemo.png"),
      rating: 5,
      name: "eClientCare Inc",
      desc: "had a great experience working with him, but because of budget constraints i have to end the contract.",
    },
    {
      image: require("../assets/testdemo.png"),
      rating: 5,
      name: "Osman Khan",
      desc: "They was amazing. He has excellent knowledge of API and integration. He gets on with the job and doesn't stop until he is finished. I will definitely be using him in the future. Highly Reccomend",
    },
    {
      image: require("../assets/testdemo.png"),
      name: "David Lee",
      rating: 5,
      desc: "Amazing dev please hire if you need help with a big or small project bablu is a fast worker and amazing problem solver.",
    },
    {
      image: require("../assets/testdemo.png"),
      name: "Jade Shah",
      rating: 5,
      desc: "They are very professional freelancers. He is very much committed with the job given.",
    },
    {
      image: require("../assets/testdemo.png"),
      name: "Jake",
      rating: 5,
      desc: "Bablu has been a valuable part of my development team. Will definitely use him again in the future.",
    },
    {
      image: require("../assets/testdemo.png"),
      name: "Offek K",
      rating: 5,
      desc: "Was great working with him. Very responsive and does all that is required very quickly. He did the best work possible and was able to complete suggestions mid-work as well. Very satisfied and will definitely work with again. Highly recommend!",
    },
  ];

  const Card = ({ val }) => {
    return (
      <div className="item--inner">
        <div class="item--icon">“</div>
        <div className="item--holder">
          <div className="item--image">
            <img src={val?.image} alt="testimonial" className="" />
          </div>
          <div className="item--meta">
            <div>
              <Rating
                name="simple-controlled"
                value={val?.rating}
                readOnly
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
              />
            </div>
            <h3>{val?.name}</h3>
          </div>
        </div>
        <div className="item--description el-empty">{val?.desc}</div>
      </div>
    );
  };

  return (
    <Testimonialstyle>
      <section className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="headingtest">
                <h4> Testimonial</h4>
                <h3 className="mb-0">What Says Our Happy Clients About us</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="value_wrap">
                We value the experimentation, the reformation of the message,
                and the smart incentives. We offer a variety of services and
                solutions Worldwide and this is at the heart of how we approach
                our.
              </div>
            </div>
          </div>
          <div className="row">
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
          </div>
        </div>
      </section>
    </Testimonialstyle>
  );
};

export default Testimonial;
