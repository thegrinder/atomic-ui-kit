import { HTMLProps, ReactNode } from 'react';
import styled from 'styled-components';
import {
  btnActiveStyle,
  btnHoverStyle,
  btnNormalStyle,
  btnSizeStyle,
} from './buttonHelpers';

export type IStyledButtonType = 'default' | 'primary' | 'secondary' | 'danger';
export type IStyledButtonSize = 'small' | 'default' | 'large';

export interface IStyledButtonProps {
  btnType: IStyledButtonType;
  btnSize: IStyledButtonSize;
  left: ReactNode;
  right: ReactNode;
}

export const StyledButton = styled.button<IStyledButtonProps & HTMLProps<HTMLButtonElement>>`
  margin: 0;
  border: none;
  overflow: visible;
  position: relative;
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
