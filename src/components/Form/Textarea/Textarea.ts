import { HTMLProps } from 'react';
import styled from 'styled-components';
import { rem } from '../../../helpers/utils';
import { commonInputStyles } from '../commonFormStyles';

interface ITextareaOwnProps {
  invalid?: boolean;
}

export type ITextareaProps = ITextareaOwnProps & HTMLProps<HTMLTextAreaElement>;

export const Textarea = styled.textarea<ITextareaProps>`
  ${commonInputStyles}
  padding: ${rem(4)} ${rem(10)};
  vertical-align: top;
  overflow: auto;
`;

const defaultProps: Partial<ITextareaProps> = {
  invalid: false,
};

Textarea.defaultProps = defaultProps;
