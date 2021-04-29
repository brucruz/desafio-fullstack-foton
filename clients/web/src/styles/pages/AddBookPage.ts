import styled from 'styled-components';

export const AddBookPageContainer = styled.section`
  max-width: 500px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
`;

export const AddBookPageContent = styled.section`
  margin: 53px 19px 0px 16px;
`;

export const AddBookPageForm = styled.form`
  h1 {
    font-family: var(--font-pro-display);
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #ff6978;

    margin-bottom: 57px;
    margin-left: 10px;
  }
`;

export const AddBookPageInputs = styled.div`
  margin-left: 4px;
  margin-bottom: 39px;

  & > div + div {
    margin-top: 38px;
  }
`;

export const AddBookButtonContainer = styled.div``;
