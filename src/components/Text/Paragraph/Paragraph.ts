import { HTMLProps } from 'react';
import styled from 'styled-components';
import { textColorStyle, textSizingStyle } from '../textHelpers';

export type IParagraphColour =
  | 'white'
  | 'lightest'
  | 'light'
  | 'normal'
  | 'dark'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

export type IParagraphSizing =
  | 'small'
  | 'medium'
  | 'large';

export interface ITextOwnProps {
  colour?: IParagraphColour;
  sizing?: IParagraphSizing;
}

export type ITextProps = ITextOwnProps
  & HTMLProps<HTMLParagraphElement>
  & HTMLProps<HTMLSpanElement>
  & HTMLProps<HTMLDataListElement>;

export const Paragraph = styled.p<ITextProps>`
  display: block;
  margin: 0;
  padding: 0;
  ${textSizingStyle}
  ${textColorStyle}
`;

const defaultProps: Partial<ITextProps> = {
  colour: 'normal',
  sizing: 'medium',
};

Paragraph.defaultProps = defaultProps;
