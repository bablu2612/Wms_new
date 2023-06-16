import styled from "styled-components";

const Faqstyle = styled.div`
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
    margin-bottom: 48px;
  }

  .wrap-qs {
    .slide_acc:not(:last-child) {
      margin-bottom: 20px;
    }
    .box_bx {
      display: block;
      background-color: #fafafa;
      font-size: 18px;
      font-weight: 600;
      color: #08203a;
      border: 1px solid #eaeaea;
      -webkit-border-radius: 5px;
      -khtml-border-radius: 5px;
      -moz-border-radius: 5px;
      -ms-border-radius: 5px;
      -o-border-radius: 5px;
      border-radius: 5px;
      padding: 13px 50px 13px 20px;
      position: relative;
      cursor: pointer;
      transition: 0.3s ease all;
      &:hover {
        background: #3630ff;
        border-color: #3630ff;
        color: #fff;
      }

      & + div {
        color: #666;
        line-height: 1.6;
        padding-top: 20px;
      }

      &:hover {
        .ct-accordion-icon-plus {
          &:before,
          &:after {
            background-color: #fff;
          }
          &:before {
            transform: rotate(90deg);
            opacity: 0;
          }
        }
      }
      .ct-accordion-icon-plus {
        position: absolute;
        top: 17px;
        right: 10px;
        z-index: 99;
        width: 15px;
        height: 15px;

        &:before,
        &:after {
          content: "";
          background-color: #333;
          -webkit-border-radius: 3px;
          -khtml-border-radius: 3px;
          -moz-border-radius: 3px;
          -ms-border-radius: 3px;
          -o-border-radius: 3px;
          border-radius: 3px;
          position: absolute;
          -webkit-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
          -khtml-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
          -moz-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
          -ms-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
          -o-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
          transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        }
        &:before {
          width: 2px;
          height: 14px;
          top: 0;
          left: 6px;
        }
        &:after {
          height: 2px;
          width: 14px;
          top: 6px;
          left: 0;
        }
      }
    }
  }
  form {
    .form-group {
      width: 100%;
    }
    .form-control {
      border-color: #eaeaea;
      background-color: #fafafa;
      -webkit-border-radius: 5px;
      -khtml-border-radius: 5px;
      -moz-border-radius: 5px;
      -ms-border-radius: 5px;
      -o-border-radius: 5px;
      border-radius: 5px;
      color: #666;
      font-size: 15px;
      padding-left: 18px;
      height: 55px;
      font-weight: 400;
      width: 100%;
      border: 1px solid #ececec;
      outline: none;
    }
    .d-flex {
      gap: 20px;
      margin-bottom: 20px;
    }
    .comment {
      textarea.form-control {
        height: 205px;
        resize: none;
        padding: 20px;
      }
    }
    .btn-wrap {
      margin-top: 20px;
    }
  }
`;

export default Faqstyle;
