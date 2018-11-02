import { css } from 'styled-components';
import { IBoxBgColor, IBoxBorderColor } from './ColorBox';

export const getBoxBgColor = (theme, bgColor: IBoxBgColor) => (
  theme.uiKit.colorBox.bgColors[bgColor]
);
export const colorBoxBgStyle = ({ theme, bgColor }) => (
  css`background-color: ${getBoxBgColor(theme, bgColor)};`
);

export const getBoxBorderColor = (theme, borderColor: IBoxBorderColor) => (
  theme.uiKit.colorBox.borderColors[borderColor]
);
export const colorBoxBorderStyle = ({ theme, borderColor }) => (
  css`border-color: ${getBoxBorderColor(theme, borderColor)};`
);
