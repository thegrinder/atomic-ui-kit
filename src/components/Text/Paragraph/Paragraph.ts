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

export interface IParagraphProps {
  colour?: IParagraphColour;
  sizing?: IParagraphSizing;
}

const Paragraph = styled.p<IParagraphProps & HTMLProps<HTMLParagraphElement>>`
  display: block;
  margin: 0;
  padding: 0;
  ${textSizingStyle}
  ${textColorStyle}
`;

const defaultProps: Partial<IParagraphProps> = {
  colour: 'normal',
  sizing: 'medium',
};

Paragraph.defaultProps = defaultProps;

export default Paragraph;
