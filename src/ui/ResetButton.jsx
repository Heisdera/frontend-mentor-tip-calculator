import styled from 'styled-components';

const ResetButton = styled.button`
  background: var(--strong-cyan);
  color: var(--very-dark-cyan);

  &:hover {
    background: var(--light-grayish-cyan);
  }

  &:active {
    background: var(--light-grayish-cyan);
  }

  &:focus {
    background: var(--light-grayish-cyan);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export default ResetButton;
