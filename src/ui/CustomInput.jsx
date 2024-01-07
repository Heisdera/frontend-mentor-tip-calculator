import styled from 'styled-components';
import Input from './Input';

const CustomInput = styled(Input)`
  padding-right: 4px;

  &::placeholder {
    padding-right: 8px;
  }
`;

export default CustomInput;
