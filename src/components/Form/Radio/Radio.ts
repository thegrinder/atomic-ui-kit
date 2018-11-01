import { HTMLProps } from 'react';
import styled from 'styled-components';
import { miscInputStyles } from '../commonFormStyles';

export interface IRadioProps {
  invalid?: boolean;
}

const Radio = styled.input.attrs({
  type: 'radio',
})<IRadioProps & HTMLProps<HTMLInputElement>>`
  ${miscInputStyles}
  border-radius: 50%;
  &:checked {
    background-color: #000;
  }
`;

const defaultProps: Partial<IRadioProps> = {
  invalid: false,
};

Radio.defaultProps = defaultProps;

export default Radio;
