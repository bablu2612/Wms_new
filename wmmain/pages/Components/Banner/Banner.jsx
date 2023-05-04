import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import styles from "./Banner.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";

const Banner = () => {
  const data = ["/Banner/1.JPEG", "/Banner/2.JPG", "/Banner/3.JPEG"];

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.creative}>
          <span>We are Creative</span>
        </div>
        <div className={styles.bestIt}>
          <h3>
            <span>
              "Best IT"
              <cite>"Solution"</cite>
              "Company"
            </span>
          </h3>
        </div>
        <div>
          Get the most of reduction in your team’s operating creates amazing
          UI/UX experiences.
        </div>
        <div>
          <buton>About Us +</buton>
          <buton>Our Servies+</buton>
        </div>
      </div>
      <div className={styles.right}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Pagination]}
        >
          {data?.map((val, index) => {
            return (
              <SwiperSlide key={index}>
                <Image height={300} width={300} src={val} alt="bannerImage" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
