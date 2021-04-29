import styled from 'styled-components';

export const BookDetailPageContainer = styled.section`
  max-width: 500px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

export const BookDetailPageBanner = styled.div`
  height: 282px;
  position: relative;
`;

export const BookDetailPageBannerMask = styled.div`
  background: #fff6e5;
  border-radius: 0px 0px 10px 0px;

  height: 282px;

  .small-circle {
    position: absolute;
    width: 48px;
    height: 48px;
    right: calc(242.39px - 151px);
    top: 218.11px;
  }

  .big-circle {
    position: absolute;
    width: 100px;
    height: 100px;
    right: calc(339.82px - 375px);
    top: -34.45px;
  }

  svg {
    margin-top: 55px;
    margin-left: 33px;
    cursor: pointer;
  }
`;

export const BookDetailPinkCircle = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  left: 46px;
  top: 125px;

  background: #ff6978;
  border-radius: 50%;
`;

export const BookDetailFullBlackCircle = styled.div`
  position: absolute;
  width: 63px;
  height: 63px;
  left: 73px;
  top: 115px;

  background: #00173d;
  border-radius: 50%;
`;

export const BookDetailEmptyBlackCircle = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  right: calc(248px - 151px);
  top: 86px;

  border: 2px solid #4550a7;
  border-radius: 50%;
`;

export const BookDetailPageThumbnail = styled.div`
  position: absolute;
  right: calc(50% - 151px / 2);
  left: calc(50% - 151px / 2);
  bottom: -36px;
`;

export const BookDetails = styled.section`
  margin-top: 67px;
  margin-bottom: 140px;
  margin-left: 21px;
  margin-right: 20px;

  h1 {
    font-family: var(--font-pro-display);
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 1.5px;

    color: #36383a;

    span {
      font-weight: 400;
    }

    margin-bottom: 7px;
  }

  h2 {
    font-family: var(--font-pro-display);
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.670588px;

    color: #ff6978;

    margin-bottom: 10px;
  }

  p {
    font-family: var(--font-pro-text);
    font-size: 14px;
    line-height: 25px;
    /* or 179% */

    letter-spacing: 0.2px;
    color: rgba(49, 49, 49, 0.6);

    white-space: pre-wrap;
  }
`;
