import { css } from 'styled-components';
import { IHeadingColour, IHeadingSizing } from './Headings';

export const getHeadingSizing = (theme, sizing: IHeadingSizing) => (
  theme.uiKit.heading.sizings[sizing]
);
export const headingSizingStyle = ({ theme, sizing }) => (
  css`font-size: ${getHeadingSizing(theme, sizing)};`
);

export const getHeadingColor = (theme, colour: IHeadingColour) => (
  theme.uiKit.heading.colours[colour]
);
export const headingColorStyle = ({ theme, colour }) => (
  css`color: ${getHeadingColor(theme, colour)};`
);
