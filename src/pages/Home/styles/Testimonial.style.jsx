import styled from "styled-components";

const Testimonialstyle = styled.div`
  section.testimonial {
    background: url("https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h3-bg-section-05.jpg")
      no-repeat;
    background-size: cover;
    padding: 80px 0;
    h4 {
      padding-right: 96px;
      position: relative;
      color: #3630ff;
      font-size: 20px;
      max-width: max-content;
      margin-bottom: 10px;
      &:before {
        content: "";
        background-color: #3630ff;
        width: 80px;
        height: 3px;
        position: absolute;
        top: 50%;
        right: 0;
        -webkit-transform: translate(0, -50%);
        -khtml-transform: translate(0, -50%);
        -moz-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        -o-transform: translate(0, -50%);
        transform: translate(0, -50%);
      }
    }
    h3 {
      color: #ffffff;
      font-family: "Poppins", Sans-serif;
      font-size: 36px;
      line-height: 48px;
      margin-bottom: 0px;
    }
    .item--inner {
      &:before {
        content: "";
        position: absolute;
        bottom: -21px;
        left: 27px;
        right: 27px;
        height: 21px;
        -webkit-border-radius: 0 0 5px 5px;
        -khtml-border-radius: 0 0 5px 5px;
        -moz-border-radius: 0 0 5px 5px;
        -ms-border-radius: 0 0 5px 5px;
        -o-border-radius: 0 0 5px 5px;
        border-radius: 0 0 5px 5px;
        background-color: rgba(255, 255, 255, 0.25);
        z-index: -1;
      }
    }

    .container {
      .row {
        align-items: flex-end;
      }
    }
    .value_wrap {
      color: #c7d5e1;
      font-size: 17px;
      line-height: normal;
    }

    .item--description {
      font-size: 16px;
      line-height: 1.6;
      color: #666;
    }
    .item--holder {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      margin-bottom: 18px;
    }
    .item--image {
      padding: 2px;
      position: relative;
      min-width: 90px;
      width: 90px;
      height: 90px;
      overflow: hidden;
      z-index: 1;
      display: block;
      margin: 0 auto 0 0;
      img {
        border: 9px solid #fff;
        -webkit-border-radius: 70px;
        -khtml-border-radius: 70px;
        -moz-border-radius: 70px;
        -ms-border-radius: 70px;
        -o-border-radius: 70px;
        border-radius: 70px;
      }
    }

    .item--position {
      color: #fff;
    }

    .item--icon {
      font-family: auto;
      font-size: 162px;
      font-weight: 700;
      position: absolute;
      top: -60px;
      right: 22px;
      line-height: 1;
      transform: rotate(180deg);
      opacity: 0.3;
      -webkit-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -khtml-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -moz-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -ms-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -o-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
    }
    .item--inner {
      background-color: #fff;
      padding: 30px 40px 37px 30px;
      margin-top: 30px;
      margin-bottom: 50px;
      -webkit-box-shadow: 0 22px 27px rgba(0, 5, 36, 0.1);
      -khtml-box-shadow: 0 22px 27px rgba(0, 5, 36, 0.1);
      -moz-box-shadow: 0 22px 27px rgba(0, 5, 36, 0.1);
      -ms-box-shadow: 0 22px 27px rgba(0, 5, 36, 0.1);
      -o-box-shadow: 0 22px 27px rgba(0, 5, 36, 0.1);
      box-shadow: 0 22px 27px rgba(0, 5, 36, 0.1);
      -webkit-border-radius: 5px;
      -khtml-border-radius: 5px;
      -moz-border-radius: 5px;
      -ms-border-radius: 5px;
      -o-border-radius: 5px;
      border-radius: 5px;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        bottom: -21px;
        left: 27px;
        right: 27px;
        height: 21px;
        -webkit-border-radius: 0 0 5px 5px;
        -khtml-border-radius: 0 0 5px 5px;
        -moz-border-radius: 0 0 5px 5px;
        -ms-border-radius: 0 0 5px 5px;
        -o-border-radius: 0 0 5px 5px;
        border-radius: 0 0 5px 5px;
        background-color: rgba(255, 255, 255, 0.25);
        z-index: -1;
      }
    }

    .item--image::before,
    .item--inner .item--icon {
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#2439ff),
        to(#9000ff)
      );
      background-image: -webkit-linear-gradient(to left, #2439ff, #9000ff);
      background-image: -moz-linear-gradient(to left, #2439ff, #9000ff);
      background-image: -ms-linear-gradient(to left, #2439ff, #9000ff);
      background-image: -o-linear-gradient(to left, #2439ff, #9000ff);
      background-image: linear-gradient(to left, #2439ff, #9000ff);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#2439FF', endColorStr='#9000FF');
    }
    .item--image:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -webkit-border-radius: 90px;
      -khtml-border-radius: 90px;
      -moz-border-radius: 90px;
      -ms-border-radius: 90px;
      -o-border-radius: 90px;
      border-radius: 90px;
    }
    .slider_section {
      width: 100%;
      .swiper-slide {
        padding: 0 15px;
        height: 400px !important;
      }
    }
  }
`;

export default Testimonialstyle;
