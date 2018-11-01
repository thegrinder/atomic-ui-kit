import { HTMLProps } from 'react';
import styled from 'styled-components';
import {
  btnNormalStyle,
  btnHoverStyle,
  btnActiveStyle,
  btnSizeStyle,
} from './buttonHelpers';

export type IBtnType = 'default' | 'primary' | 'secondary' | 'danger';
export type IBtnSize = 'small' | 'default' | 'large';

export interface IButtonProps {
  btnType?: IBtnType;
  btnSize?: IBtnSize;
}

const Button = styled.button<IButtonProps & HTMLProps<HTMLButtonElement>>`
  margin: 0;
  border: none;
  overflow: visible;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: .1s ease-in-out;
  transition-property: color, background-color, border-color;
  touch-action: manipulation;
  cursor: pointer;
  outline: none;
  border-width: 1px;
  border-style: solid;
  letter-spacing: 1px;
  ${btnSizeStyle}
  ${btnNormalStyle}
  &:hover,
  &:focus {
    ${btnHoverStyle}
  }
  &:active {
    ${btnActiveStyle}
  }
  &:disabled {
    ${btnNormalStyle}
    opacity: .6;
    cursor: default;
  }
`;

const defaultProps: Partial<IButtonProps> = {
  btnType: 'default',
  btnSize: 'default',
};

Button.defaultProps = defaultProps;

export default Button;
