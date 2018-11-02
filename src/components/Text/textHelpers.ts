import { css } from 'styled-components';
import { IParagraphColour, IParagraphSizing } from './Paragraph/Paragraph';

export const getTextSizing = (theme, sizing: IParagraphSizing) => (
  theme.uiKit.text.sizings[sizing]
);
export const textSizingStyle = ({ theme, sizing }) => (
  css`font-size: ${getTextSizing(theme, sizing)};`
);

export const getTextColor = (theme, colour: IParagraphColour) => (
  theme.uiKit.text.colours[colour]
);
export const textColorStyle = ({ theme, colour }) => (
  css`color: ${getTextColor(theme, colour)};`
);
