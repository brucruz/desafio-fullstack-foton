import styled from "styled-components";

export const BookCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  cursor: pointer;

  &:hover {
    span {
      color: #ff6978;
    }
  }
`;

export const BookCardTitle = styled.span`
  margin-top: 9px;

  font-family: var(--font-pro-display);
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
`;

export const BookCardAuthor = styled.span`
  margin-top: 5px;

  font-family: var(--font-roboto);
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 12px;

  color: rgba(49, 49, 49, 0.8);
`;
