import styled from 'styled-components';

const ResultSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  padding: 4px 6px;
  background: var(--very-dark-cyan);
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  padding: 32px 28px 24px;
  font-size: 14px;
  color: var(--white-color);

  @media (min-width: 768px) {
    padding: 40px 30px 32px;
  }
`;

export default ResultSection;
