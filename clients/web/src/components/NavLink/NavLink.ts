import styled from 'styled-components';

interface NavLinkContainerProps {
  selected: boolean;
}

export const NavLinkContainer = styled.li<NavLinkContainerProps>`
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;

  cursor: pointer;
  flex: 1 0 auto;

  svg {
    margin-bottom: 10.22px;
    color: ${props => (props.selected ? '#000000' : '#BFBEBF')};
  }

  span {
    font-family: var(--font-pro-display);
    font-size: 10px;
    line-height: 12px;
    color: ${props => (props.selected ? '#313131' : '#BFBEBF')};
  }
`;
