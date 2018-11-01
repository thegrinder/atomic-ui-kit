import { HTMLProps } from 'react';
import styled from 'styled-components';
import { textSizingStyle, textColorStyle } from '../textHelpers';

export interface IParagraphProps {
  colour?: string;
  sizing?: string;
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
