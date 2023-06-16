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
      font-family: "Poppins", Sans-serif;
      font-size: 36px;
      line-height: 48px;
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
  }
`;

export default Testimonialstyle;
