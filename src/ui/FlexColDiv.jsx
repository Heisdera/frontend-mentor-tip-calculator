import styled from 'styled-components';
import FlexRowDiv from './FlexRowDiv';

const FlexColDiv = styled(FlexRowDiv)`
  flex-direction: column;
  gap: 20px;
  align-items: normal;

  @media (min-width: 768px) {
    gap: 30px;
  }
`;

export default FlexColDiv;
