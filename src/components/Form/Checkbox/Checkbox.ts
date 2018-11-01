import { HTMLProps } from 'react';
import styled from 'styled-components';
import { miscInputStyles } from '../commonFormStyles';

export interface ICheckboxProps {
  invalid?: boolean;
}

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})<ICheckboxProps & HTMLProps<HTMLInputElement>>`
  ${miscInputStyles}
  border-radius: 0;
  &:checked {
    background-color: #000;
  }
`;

const defaultProps: Partial<ICheckboxProps> = {
  invalid: false,
};

Checkbox.defaultProps = defaultProps;

export default Checkbox;
