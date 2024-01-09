import styled from 'styled-components';

const Input = styled.input`
  background: var(--very-light-grayish-cyan);
  text-align: right;
  width: 100%;
  color: var(--very-dark-cyan);
  padding-right: 4px;

  &:hover {
    outline: 2px solid var(--strong-cyan);
  }

  &:focus {
    outline: 2px solid var(--strong-cyan);
  }
`;

export default Input;
