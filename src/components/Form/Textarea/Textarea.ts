import { HTMLProps } from 'react';
import styled from 'styled-components';
import { rem } from '../../../helpers/utils';
import { commonInputStyles } from '../commonFormStyles';

export interface ITextareaProps {
  invalid?: boolean;
}

export const Textarea = styled.textarea<ITextareaProps & HTMLProps<HTMLTextAreaElement>>`
  ${commonInputStyles}
  padding: ${rem(4)} ${rem(10)};
  vertical-align: top;
  overflow: auto;
`;

const defaultProps: Partial<ITextareaProps> = {
  invalid: false,
};

Textarea.defaultProps = defaultProps;
