import { HTMLProps, ReactNode } from 'react';
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
  btnType: IBtnType;
  btnSize: IBtnSize;
  left: ReactNode;
  right: ReactNode;
}

const StyledButton = styled.button<IButtonProps & HTMLProps<HTMLButtonElement>>`
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
  ${({ left }) => left ? 'padding-left: 0;' : ''}
  ${({ right }) => right ? 'padding-right: 0;' : ''}
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

export default StyledButton;
