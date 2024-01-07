import styled from 'styled-components';

const Container = styled.main`
  background-color: #fff;
  border-radius: 24px;
  display: grid;
  gap: 24px;
  padding: 28px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Container;
