import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--very-dark-cyan);
  color: var(--white-color);

  &:hover {
    background-color: var(--strong-cyan);
    color: var(--very-dark-cyan);
  }
  &:active {
    background-color: var(--strong-cyan);
    color: var(--very-dark-cyan);
  }
  &:focus {
    background-color: var(--strong-cyan);
    color: var(--very-dark-cyan);
  }
`;

export default Button;
