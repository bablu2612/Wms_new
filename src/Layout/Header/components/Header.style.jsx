import styled from "styled-components";

const HeaderStyleCss = styled.div`
  // Header styles

  * {
    box-sizing: border-box;
  }
  .Header_section {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 15px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 9;
    .welcomeOurIt_class {
      display: flex;
      justify-content: space-between;

      .contect_info {
        display: flex;
        gap: 20px;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  .welcomeOurIt_class {
    padding: 10px 0;
    margin-bottom: 10px;
    color: #fff;
    .welcomeText {
      p {
        color: #000;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0px 15px 75px 0px rgba(138, 138, 138, 0.15);
    transition: background 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s;
    border-radius: 5px;
    .logo {
      font-size: 24px;
      font-weight: bold;
      a {
        color: #333;
      }
    }

    .toggle {
      border: none;
      background-color: transparent;
      padding: 0;
      cursor: pointer;
      display: block;
      position: relative;
      height: 24px;
      width: 24px;

      .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 2px;
        width: 100%;
        background-color: #333;

        &:before,
        &:after {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          background-color: #333;
        }

        &:before {
          transform: rotate(45deg);
        }

        &:after {
          transform: rotate(-45deg);
        }
      }
    }

    nav {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      background-color: #fff;
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;

        li {
          padding: 10px;
          &:last-child {
            border-bottom: none;
          }

          a {
            color: #333;
            text-decoration: none;
          }
        }
      }
    }

    // Media queries
    @media (min-width: 768px) {
      .toggle {
        display: none;
      }

      nav {
        position: static;
        width: auto;
        transform: none;
        background-color: transparent;

        ul {
          flex-direction: row;
          height: auto;
          justify-content: flex-end;
          gap: 25px;
          li {
            padding: 0px;

            &:last-child {
              border-bottom: none;
            }

            a {
              font-size: 16px;
              font-weight: bold;
              text-transform: uppercase;
              color: #333;
              text-decoration: none;

              &:hover {
                color: #372fff;
              }
            }
          }
        }
      }
    }
  }
`;

export default HeaderStyleCss;
