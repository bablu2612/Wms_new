import React from "react";
import styles from "./OurPartner.module.scss";
import Image from "next/image";

const Ourpartner = () => {
  let imageData = [
    "/Banner/client1hover.png",
    "/Banner/client1hover.png",
    "/Banner/client1hover.png",
    "/Banner/client1hover.png",
    "/Banner/client1hover.png",
    "/Banner/client1hover.png",
  ];
  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        {imageData?.map((val) => {
          return <Image src={val} height={50} width={50} />;
        })}
      </div>
      <div className={styles.right}>
        <span>Our Partners</span>
        <h3>
          <span>Long Time Project, with Our </span>
          <cite>Best Partner</cite>
        </h3>
        <div>
          We’ve been lucky to collaborate with a long list of customers, located
          in and out of the country. Thanks to them we have grown as
          professionals.
        </div>
      </div>
    </div>
  );
};

export default Ourpartner;
