import { HTMLProps } from 'react';
import styled from 'styled-components';
import { miscInputStyles } from '../commonFormStyles';

interface IRadioOwnProps {
  invalid?: boolean;
}

export type IRadioProps = IRadioOwnProps & HTMLProps<HTMLInputElement>;

export const Radio = styled.input.attrs({
  type: 'radio',
})<IRadioProps>`
  ${miscInputStyles}
  border-radius: 50%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #fff;
    width: 25%;
    height: 25%;
    border-radius: 50%;
  }
`;

const defaultProps: Partial<IRadioProps> = {
  invalid: false,
};

Radio.defaultProps = defaultProps;
