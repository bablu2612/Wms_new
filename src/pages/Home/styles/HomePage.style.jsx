import styled from "styled-components";

const HomePageStyleCss = styled.div`
  .mainHomepage_class {
    background: ${props => `url(${require('../assets/backgroundAboutus.jpg')})`}
      no-repeat;
    .boxes {
      margin-top: 40px;
    }
  }
`;

export default HomePageStyleCss;
