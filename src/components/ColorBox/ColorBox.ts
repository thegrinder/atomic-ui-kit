import { HTMLProps } from 'react';
import styled from 'styled-components';
import { colorBoxBgStyle, colorBoxBorderStyle } from './colorBoxHelpers';

export interface IColorBoxProps {
  bgColor?: string;
  borderColor?: string;
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
