import styled from "styled-components";

const TeamMemberStyle = styled.div`
  /* .mainTeamMember_class {
    background: url("https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h3-bg-section-03.jpg")
      no-repeat;
    background-size: cover;
  } */
  .ourPricing {
      display: block;
      background: ${props => `url(${require('../assets/OurPricing.jpg')})`} no-repeat;
      background-size: cover;
      padding: 80px 0px 130px 0px;
    }
    .preparing_class h3 {
    color: #FFFFFF;
    font-family: "Poppins", Sans-serif;
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 14px;
}  
.ct-video-button {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-transform: uppercase;
    color: #fff;
    font-size: 18px;
    display: inline-grid;
     place-content: center;
    position: relative;
    z-index: 1;
                svg.bi.bi-play-fill {
                width: 30px;
                height: 30px;
            }
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgba(36,57,255,1) 0%, rgba(144,0,255,1) 100%);
            -webkit-border-radius: 100%;
            -khtml-border-radius: 100%;
            -moz-border-radius: 100%;
            -ms-border-radius: 100%;
            -o-border-radius: 100%;
            border-radius: 100%;
            z-index: -1;
        }
    &:after {
        content: "";
        position: absolute;
        z-index: 0;
        left: 0;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-color: #3630ff;;
        border-radius: 50%;
        animation: pulse-border2 1500ms ease-out infinite;
        -webkit-animation: pulse-border2 1500ms ease-out infinite;
        z-index: -2;
        opacity: .65;
    }

    &:hover:after {
        -webkit-animation-play-state: paused;
        -moz-animation-play-state: paused;
        -o-animation-play-state: paused;
        animation-play-state: paused
    }
} 
  .clientReview {
    box-shadow: 0px 10px 50px 0px rgba(0, 10.000000000000036, 80, 0.05);
    transition: background 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s;
    padding: 39px 0px 39px 0px;
    z-index: 99;
    background: #fff;
    display: flex;
    max-width: 1170px;
    margin: -70px auto 0;
    justify-content: center;
    border-radius: 5px;
    .ct-counter-number {
      display: flex;
      white-space: nowrap;
      line-height: 1;
      font-size: 48px;
      font-weight: 700;
      color: #08203a;
      margin-bottom: 10px;
    }
    .ct-counter-title {
      font-size: 18px;
      color: #444;
      line-height: normal;
    }
    .small_box {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }
  }

  .clientReview {
    box-shadow: 0px 10px 50px 0px rgba(0, 10.000000000000036, 80, 0.05);
    transition: background 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s;
    padding: 39px 0px 39px 0px;
    z-index: 99;
    background: #fff;
    display: flex;
    max-width: 1170px;
    margin: -70px auto 0;
    justify-content: center;
    border-radius: 5px;
    h3 {
      display: flex;
      white-space: nowrap;
      line-height: 1;
      font-size: 48px;
      font-weight: 700;
      color: #08203a;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
      color: #444;
      line-height: normal;
    }
    .small_box {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      flex: 1;
      justify-content: center;
      position: relative;
      &:before {
        content: "";
        width: 3px;
        height: 80px;
        background-color: #e7e7e7;
        position: absolute;
        top: 50%;
        right: -1px;
        -webkit-transform: translate(0, -50%);
        -khtml-transform: translate(0, -50%);
        -moz-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        -o-transform: translate(0, -50%);
        transform: translate(0, -50%);
      }
    }

    .ourPricing {
      display: block;
    }

    .contain_video {
      width: 100%;
      display: flex;
      max-width: 1200px;
      margin: 0 auto;
    }
  }

  .card {
    justify-content: space-between;
    .grid-item {
      max-width: calc(100% / 5 - 20px);
      width: 100%;
      flex: auto;
    }

    .item--holder {
      -webkit-box-shadow: 0 10px 50px rgba(132, 132, 132, 0.1);
      -khtml-box-shadow: 0 10px 50px rgba(132, 132, 132, 0.1);
      -moz-box-shadow: 0 10px 50px rgba(132, 132, 132, 0.1);
      -ms-box-shadow: 0 10px 50px rgba(132, 132, 132, 0.1);
      -o-box-shadow: 0 10px 50px rgba(132, 132, 132, 0.1);
      box-shadow: 0 10px 50px rgba(132, 132, 132, 0.1);
      background-color: #fff;
      -webkit-border-radius: 10px;
      -khtml-border-radius: 10px;
      -moz-border-radius: 10px;
      -ms-border-radius: 10px;
      -o-border-radius: 10px;
      border-radius: 10px;
      padding: 32px 20px 36px;
      -webkit-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -khtml-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -moz-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -ms-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -o-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
    }

    .item--inner {
      position: relative;
      text-align: center;
      margin-bottom: 50px;
      &:hover {
        .item--holder-hover {
          opacity: 1;
          -webkit-transform: scaleY(1);
          -khtml-transform: scaleY(1);
          -moz-transform: scaleY(1);
          -ms-transform: scaleY(1);
          -o-transform: scaleY(1);
          transform: scaleY(1);
        }
      }
    }
    .item--title {
      /* margin-bottom: 8px;
      font-size: 20px;
      color: #08203a; */
    }
    .item--position {
      font-size: 14px;
      font-weight: 500;
      color: #666;
      margin-bottom: 18px;
    }
    .item--details {
      width: 40px;
      height: 40px;
      display: inline-block;
      background-color: #e1e0ff;
      font-size: 24px;
      font-weight: 500;
      line-height: 40px;
      border-radius: 100%;
      text-decoration: none;
      i {
        font-style: normal;
      }
    }
    .item--holder-hover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 99;
      -webkit-border-radius: 10px;
      -khtml-border-radius: 10px;
      -moz-border-radius: 10px;
      -ms-border-radius: 10px;
      -o-border-radius: 10px;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      opacity: 0;
      -webkit-transform: scaleY(0);
      -khtml-transform: scaleY(0);
      -moz-transform: scaleY(0);
      -ms-transform: scaleY(0);
      -o-transform: scaleY(0);
      transform: scaleY(0);
      transform-origin: bottom center;
      -webkit-transform-origin: bottom center;
      -ms-transform-origin: bottom center;
      -o-transform-origin: bottom center;
      -webkit-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -khtml-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -moz-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -ms-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      -o-transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      transition: 0.3s cubic-bezier(0.24, 0.74, 0.58, 1);
      .item--title {
        color: #fff;
        margin-bottom: 8px;
        font-size: 20px;
        a {
          font-size: 20px;
          color: #fff;
          font-family: "poppins";
          text-decoration: none;
          font-weight: 600;
        }
      }
      .item--desc {
        color: #fff;
        line-height: 1.5;
        margin-bottom: 20px;
      }
      &:before {
        content: "";
        -webkit-border-radius: 10px;
        -khtml-border-radius: 10px;
        -moz-border-radius: 10px;
        -ms-border-radius: 10px;
        -o-border-radius: 10px;
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.85;
        z-index: -1;
      }
      .item--position {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 18px;
      }

      .item--details {
        padding: 0 16px;
        color: #08203a;
        background: #fff;
        border-radius: 5px;
        font-size: 15px;
        line-height: normal;
        width: 100%;
        max-width: 140px;
        display: inline-grid;
        place-content: center;
      }
    }
  }
`;

export default TeamMemberStyle;
