import styled from 'styled-components';

const Input = styled.input`
  background: var(--very-light-grayish-cyan);
  text-align: right;
  width: 100%;
  color: var(--very-dark-cyan);
  position: relative;
  padding-right: 4px;

  &:focus {
    outline: 2px solid var(--grayish-cyan);
  }
`;

export default Input;
