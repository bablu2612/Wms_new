import styled from "styled-components";

const AboutUsStyleCss = styled.div`
  .aboutUs_content {
    h4 {
      padding-right: 96px;
      position: relative;
      color: #3630ff;
      font-size: 20px;
      max-width: max-content;
      margin-bottom: 10px;
      &:after {
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
    & > h3 {
      font-family: "Poppins", Sans-serif;
      font-size: 36px;
      line-height: 48px;
      margin-bottom: 24px;
      @media (max-width: 1024px) {
        font-size: 32px;
        line-height: 42px;
      }
    }
    & > p {
      color: #666666;
      font-size: 20px;
      line-height: 30px;
      @media (max-width: 1024px) {
        font-size: 18px;
        line-height: 28px;
      }
    }
    .box_container {
      padding: 20px 30px;
      box-shadow: 0 0 16px rgba(138, 138, 138, 0.1);
      gap: 20px;

      .icon {
        background: #ebeaff;
      }
      h3 {
        margin-top: -4px;
        margin-bottom: 8px;
        color: #08203a;
        font-size: 18px;
        font-family: poppins;
      }
      p {
        color: #666666;
        font-size: 16px;
        line-height: 1.6;
      }
    }
    .boxes {
      margin: 40px 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
  .imageSection {
    position: relative;
    max-width: 555px;
    margin-left: auto;
    .ct-banner-counter {
      position: absolute;
      top: -10px;
      left: -90px;
      width: 170px;
      height: 170px;
      border: 10px solid #fff;
      border-radius: 170px;
      overflow: hidden;
      background: rgb(36, 57, 255);
      background: linear-gradient(
        90deg,
        rgba(36, 57, 255, 1) 0%,
        rgba(144, 0, 255, 1) 100%
      );
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-family: "Poppins", Sans-serif;
      box-shadow: 0 10px 60px rgba(0, 10, 80, 0.15);
    }
    .ct-banner-image {
      border-radius: 100%;
      position: absolute;
      top: 45px;
      left: -75px;
      right: 74px;
      border: 10px solid #fff;
      max-width: 450px;
      box-sizing: border-box;
      overflow: hidden;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .ct-counter-title {
      font-size: 18px;
      text-transform: uppercase;
      color: #fff;
      line-height: 1;
      white-space: nowrap;
      margin-bottom: 10px;
      font-family: "Poppins", Sans-serif;
    }
    .ct-counter-number-value {
      font-size: 44px;
      color: #fff;
      font-weight: 700;
      line-height: 1;
      font-family: "Poppins", Sans-serif;
    }
  }
  .item--title {
    position: absolute;
    bottom: 50px;
    right: 18px;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
    white-space: nowrap;
    -webkit-transform: rotate(-90deg) translate(100%, 0);
    -khtml-transform: rotate(-90deg) translate(100%, 0);
    -moz-transform: rotate(-90deg) translate(100%, 0);
    -ms-transform: rotate(-90deg) translate(100%, 0);
    -o-transform: rotate(-90deg) translate(100%, 0);
    transform: rotate(-90deg) translate(100%, 0);
    transform-origin: right bottom;
  }

  .ct-banner3 {
    height: 590px;
    position: relative;
    z-index: 1;
    margin-left: 80px;
    & > :after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-border-radius: 465px 0 5px 5px;
      -khtml-border-radius: 465px 0 5px 5px;
      -moz-border-radius: 465px 0 5px 5px;
      -ms-border-radius: 465px 0 5px 5px;
      -o-border-radius: 465px 0 5px 5px;
      border-radius: 465px 0 5px 5px;
      z-index: -1;
      overflow: hidden;
      background-image: url(https://demo.casethemes.net/itfirm/wp-content/themes/itsoft/assets/images/overlay-shape3.png);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
    }
    & > :before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-border-radius: 465px 0 5px 5px;
      -khtml-border-radius: 465px 0 5px 5px;
      -moz-border-radius: 465px 0 5px 5px;
      -ms-border-radius: 465px 0 5px 5px;
      -o-border-radius: 465px 0 5px 5px;
      border-radius: 465px 0 5px 5px;
      z-index: -2;
      background-image: -webkit-gradient(
        linear,
        left top,
        right top,
        from(#2439ff),
        to(#9000ff)
      );
      background-image: -webkit-linear-gradient(to left, #2439ff, #9000ff);
      background-image: -moz-linear-gradient(to left, #2439ff, #9000ff);
      background-image: -ms-linear-gradient(to left, #2439ff, #9000ff);
      background-image: -o-linear-gradient(to left, #2439ff, #9000ff);
      background-image: linear-gradient(to left, #2439ff, #9000ff);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#2439FF', endColorStr='#9000FF', gradientType='1');
    }
  }
`;

export default AboutUsStyleCss;
