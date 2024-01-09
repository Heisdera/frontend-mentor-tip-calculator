import styled from 'styled-components';

const Input = styled.input`
  background: var(--very-light-grayish-cyan);
  text-align: right;
  width: 100%;
  color: var(--very-dark-cyan);
  padding-right: 4px;

  &.error {
    outline: 2px solid coral;
  }

  &.error:focus {
    outline: 2px solid coral;
  }

  &:hover {
    outline: 2px solid var(--strong-cyan);
  }

  &:focus {
    outline: 2px solid var(--strong-cyan);
  }
`;

export default Input;
