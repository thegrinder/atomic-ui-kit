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

export interface IColorBoxProps {
  bgColor?: IBoxBgColor;
  borderColor?: IBoxBorderColor;
}

const ColorBox = styled.div<IColorBoxProps & HTMLProps<HTMLDivElement>>`
  ${colorBoxBgStyle}
  ${colorBoxBorderStyle}
`;

const defaultProps: Partial<IColorBoxProps> = {
  bgColor: 'transparent',
  borderColor: 'transparent',
};

ColorBox.defaultProps = defaultProps;

export default ColorBox;
