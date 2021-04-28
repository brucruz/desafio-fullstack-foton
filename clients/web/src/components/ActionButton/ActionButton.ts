import styled from "styled-components";

export const ActionButtonContainer = styled.li`
  list-style: none;

  flex: 1 0 auto;

  display: flex;
  justify-content: center;
  width: fit-content;

  cursor: pointer;

  padding: 20px 0;

  svg {
    margin-right: 10px;
    width: 16px;
    height: 16px;
  }

  span {
    font-family: var(--font-pro-display);
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: 1px;

    color: #3f4043;
  }

  &:hover {
    opacity: 0.7;
  }
`;
