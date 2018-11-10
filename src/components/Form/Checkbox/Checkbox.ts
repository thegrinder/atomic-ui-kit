import { HTMLProps } from 'react';
import styled from 'styled-components';
import { miscInputStyles } from '../commonFormStyles';

export interface ICheckboxProps {
  invalid?: boolean;
}

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})<ICheckboxProps & HTMLProps<HTMLInputElement>>`
  ${miscInputStyles}
  border-radius: 0;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    top: 20%;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    height: 25%;
    transform: rotate(-50deg);
  }
`;

const defaultProps: Partial<ICheckboxProps> = {
  invalid: false,
};

Checkbox.defaultProps = defaultProps;
