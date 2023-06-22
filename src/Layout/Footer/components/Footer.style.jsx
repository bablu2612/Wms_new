import styled from "styled-components";

const FooterStyleCss = styled.div`
  /* footer section css */
  background: url("https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h3-bg-footer.jpg")
    no-repeat;
  .footer_first_row p {
    color: #b2c0cd;
  }
  .main_footer_section {
    padding: 80px 0;
    .row > [class*="footer"] {
      max-width: calc(100% / 4);
      flex: calc(100% / 4);
      width: 100%;
      padding: 0 15px;
      p {
        color: #fff;
        font-weight: 400;
        position: relative;
      }
      span {
        color: #fff;
      }
    }
    .row {
      .footer_first_row {
        p {
          color: #b2c0cd;
        }
        img {
          margin-bottom: 30px;
        }
      }
      .footer_second_row {
        p {
          margin-bottom: 30px;
        }
      }
      .footer_Third_row {
        & > div {
          color: #fff;
          margin-bottom: 10px;
        }
        h4 {
          color: #fff;
          margin-bottom: 10px;
        }
      }
      .field_section {
        button {
          background: #3533fd;
          border: none;
          display: inline-flex;
          height: 100%;
          max-width: 100%;
          width: 100%;
          min-height: 55px;
          justify-content: center;
          align-items: center;
          border-radius: 0 5px 5px 0;
          cursor: pointer;
        }
        input[type="text"] {
          background-color: #fafafa;
          border-radius: 5px 0 0 5px;
          color: #666;
          font-size: 15px;
          height: 55px;
          font-weight: 400;
          padding: 0 15px;
          border: none;
          box-shadow: none;
          outline: none;
        }
      }
    }

    h3.blue_underline {
      color: #ffffff;
      font-family: "Poppins", Sans-serif;
      font-size: 22px;
      margin-bottom: 30px;
      position: relative;
      max-width: max-content;
      padding-right: 70px;
      &:before {
        content: "";
        background-color: #3630ff;
        width: 50px;
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
    }
  }
  /* end of footer section css */
`;

export default FooterStyleCss;
