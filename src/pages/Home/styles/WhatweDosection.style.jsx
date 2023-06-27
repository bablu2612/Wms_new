import styled from "styled-components";

const WhatweDosectionstyle = styled.div`
  .whatWe_doMain_class {
    background: url(https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h3-bg-section-02.jpg)
      no-repeat;
    background-size: cover;
    .card {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      @media (max-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .grid-item-inner {
      position: relative;
      z-index: 1;
      margin-top: 0;
      margin-bottom: 50px;
      @media (max-width: 991px) {
        padding-top: 20px;
      }
      &:before {
        content: "";
        position: absolute;
        top: 95px;
        left: 0;
        width: 100%;
        bottom: 100px;
        background-color: #fff;
        z-index: -2;
        transform: skewY(-16deg);
        -webkit-box-shadow: 0 20px 50px rgba(0, 10, 80, 5%);
        -khtml-box-shadow: 0 20px 50px rgba(0, 10, 80, 5%);
        -moz-box-shadow: 0 20px 50px rgba(0, 10, 80, 5%);
        -ms-box-shadow: 0 20px 50px rgba(0, 10, 80, 5%);
        -o-box-shadow: 0 20px 50px rgba(0, 10, 80, 5%);
        box-shadow: 0 20px 50px rgba(0, 10, 80, 5%);
      }
      &:after {
        content: "";
        height: 60%;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: -1;
        -webkit-box-shadow: 0 35px 35px rgba(0, 10, 80, 5%);
        -khtml-box-shadow: 0 35px 35px rgba(0, 10, 80, 5%);
        -moz-box-shadow: 0 35px 35px rgba(0, 10, 80, 5%);
        -ms-box-shadow: 0 35px 35px rgba(0, 10, 80, 5%);
        -o-box-shadow: 0 35px 35px rgba(0, 10, 80, 5%);
        box-shadow: 0 35px 35px rgba(0, 10, 80, 5%);
        -webkit-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        -khtml-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        -moz-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        -ms-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        -o-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      }
      .item--holder {
        padding: 30px 20px 32px 30px;
      }
      .item--featured {
        max-width: 220px;
        max-height: 220px;
        padding: 5px;
        position: relative;
        z-index: 1;
        margin: 0 auto 0;
        &:before {
          content: "";
          z-index: -1;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 220px;
          background-color: #fff;
          -webkit-box-shadow: 0 20px 50px rgba(0, 10, 80, 5%);
          -khtml-box-shadow: 0 20px 50px rgba(0, 10, 80, 5%);
          -moz-box-shadow: 0 20px 50px rgba(0, 10, 80, 5%);
          -ms-box-shadow: 0 20px 50px rgba(0, 10, 80, 5%);
          -o-box-shadow: 0 20px 50px rgba(0, 10, 80, 5%);
          box-shadow: 0 20px 50px rgba(0, 10, 80, 5%);
        }
        &:after {
          content: "";
          z-index: -1;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 220px;
          background-image: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(#2439ff),
            to(#9000ff)
          );
          background-image: -webkit-linear-gradient(
            to bottom,
            #2439ff,
            #9000ff
          );
          background-image: -moz-linear-gradient(to bottom, #2439ff, #9000ff);
          background-image: -ms-linear-gradient(to bottom, #2439ff, #9000ff);
          background-image: -o-linear-gradient(to bottom, #2439ff, #9000ff);
          background-image: linear-gradient(to bottom, #2439ff, #9000ff);
          filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#2439FF', endColorStr='#9000FF');
          opacity: 0;
          transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        }
      }
      img {
        width: 100%;
        border-radius: 220px;
        height: 100%;
        object-fit: cover;
      }
      .item--title {
        margin-bottom: 14px;
        a {
          font-size: 20px;
          color: #08203a;
          font-family: "Poppins", Sans-serif;
        }
      }

      .item--content {
        line-height: 1.5;
        color: #666;
        margin-bottom: 20px;
      }
    }

    .grid-item-inner:hover {
      .item--icon {
        color: #fff;
      }
      .item--icon:after {
        -webkit-transform: scale(0);
        -khtml-transform: scale(0);
        -moz-transform: scale(0);
        -ms-transform: scale(0);
        -o-transform: scale(0);
        transform: scale(0);
      }
      .item--featured:after {
        opacity: 1;
      }
    }

    .item--icon {
      position: absolute;
      bottom: 10px;
      right: 15px;
      height: 60px;
      width: 60px;
      text-align: center;
      color: #08203a;
      z-index: 1;
      -webkit-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -khtml-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -moz-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -ms-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -o-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      i {
        display: grid;
        width: 100%;
        height: 100%;
        place-content: center;
        svg {
          height: 30px;
          width: 30px;
        }
      }
      &:after {
        content: "";
        position: absolute;
        top: 3px;
        right: 3px;
        bottom: 3px;
        left: 3px;
        -webkit-border-radius: 100%;
        -khtml-border-radius: 100%;
        -moz-border-radius: 100%;
        -ms-border-radius: 100%;
        -o-border-radius: 100%;
        border-radius: 100%;
        z-index: -1;
        background-color: #fff;
        -webkit-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        -khtml-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        -moz-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        -ms-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        -o-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
        transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      }
      &:before {
        background-image: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(#2439ff),
          to(#9000ff)
        );
        background-image: -webkit-linear-gradient(to bottom, #2439ff, #9000ff);
        background-image: -moz-linear-gradient(to bottom, #2439ff, #9000ff);
        background-image: -ms-linear-gradient(to bottom, #2439ff, #9000ff);
        background-image: -o-linear-gradient(to bottom, #2439ff, #9000ff);
        background-image: linear-gradient(to bottom, #2439ff, #9000ff);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#2439FF', endColorStr='#9000FF');
        content: "";
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-border-radius: 220px;
        -khtml-border-radius: 220px;
        -moz-border-radius: 220px;
        -ms-border-radius: 220px;
        -o-border-radius: 220px;
        border-radius: 220px;
      }
    }
  }
`;

export default WhatweDosectionstyle;
