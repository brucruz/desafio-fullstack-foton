import styled from 'styled-components';
import device from '../../utils/devices';

export const BookCardsListContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  display: grid;
  grid-template-columns: 105px 105px;
  grid-row-gap: 12px;
  justify-content: space-between;

  @media ${device.mobileM} {
    grid-template-columns: 105px 105px 105px;
  }

  @media ${device.tablet} {
    grid-template-columns: 105px 105px 105px 105px;
  }
`;
