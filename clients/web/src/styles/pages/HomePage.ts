import styled from 'styled-components';

export const HomePageContainer = styled.section`
  max-width: 500px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
`;

export const HomePageContent = styled.section`
  margin: 50px 20px 80px 19px;
`;

export const HomePageHello = styled.div`
  margin-top: 30px;
  margin-bottom: -4px;

  font-family: var(--font-pro-display);
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;

  color: #54565a;

  span:first-child {
    color: #ff6978;
    font-weight: 600;
  }

  span:last-child {
    margin-left: 11px;
  }
`;
