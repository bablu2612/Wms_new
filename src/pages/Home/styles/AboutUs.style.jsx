import styled from "styled-components";

const AboutUsStyleCss = styled.div`
  .aboutUs_content {
    h4 {
      padding-right: 96px;
      position: relative;
      color: #3630ff;
      font-size: 20px;
      max-width: max-content;
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
    }
    & > p {
      color: #666666;
      font-size: 20px;
      line-height: 30px;
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
  }
`;

export default AboutUsStyleCss;
