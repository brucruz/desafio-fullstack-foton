import styled from 'styled-components';
import device from '../../utils/devices';

export const SnackbarContainerWrapper = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 20px;
  right: 20px;
  left: 20px;

  overflow: hidden;

  @media ${device.tablet} {
    left: auto;
  }
`;
