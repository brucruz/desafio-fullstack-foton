import styled from "styled-components";

export const ActionBarContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ffffff;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;

  li + li {
    border-left: 1px solid rgba(151, 151, 151, 0.2);
  }
`;
