import { HTMLProps } from 'react';
import styled from 'styled-components';
import { colorBoxBgStyle, colorBoxBorderStyle } from './colorBoxHelpers';

export type IBoxBgColor =
  | 'transparent'
  | 'white'
  | 'lightGray'
  | 'gray'
  | 'lightPrimary'
  | 'primary'
  | 'lightSuccess'
  | 'success'
  | 'lightWarning'
  | 'warning'
  | 'lightDanger'
  | 'danger';

export type IBoxBorderColor =
  | 'transparent'
  | 'white'
  | 'gray'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

interface IColorBoxOwnProps {
  bgColor?: IBoxBgColor;
  borderColor?: IBoxBorderColor;
}

export type IColorBoxProps = HTMLProps<HTMLDivElement> & IColorBoxOwnProps;

export const ColorBox = styled.div<IColorBoxProps>`
  ${colorBoxBgStyle}
  ${colorBoxBorderStyle}
`;

const defaultProps: Partial<IColorBoxProps> = {
  bgColor: 'transparent',
  borderColor: 'transparent',
};

ColorBox.defaultProps = defaultProps;
