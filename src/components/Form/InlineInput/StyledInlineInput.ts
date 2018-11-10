import { HTMLProps } from 'react';
import styled from 'styled-components';
import { rem } from '../../../helpers/utils';
import {
  inlineInputActiveStyle,
  inlineInputDisabledStyle,
  inlineInputHoverStyle,
  inlineInputNormalStyle,
} from '../formHelpers';

export interface IStyledInlineInputProps {
  invalid?: boolean;
  submitting?: boolean;
}

export const StyledInlineInput = styled.input<IStyledInlineInputProps & HTMLProps<HTMLInputElement>>`
  margin: 0;
  border-radius: 0;
  -webkit-appearance: none;
  touch-action: manipulation;
  max-width: 100%;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  transition: .2s ease-in-out;
  transition-property: color, background-color, border;
  overflow: visible;

  vertical-align: middle;
  display: inline-block;
  height: ${rem(40)};
  padding: 0 ${rem(10)};
  ${({ submitting }) => submitting ? `padding-right : ${rem(36)};` : ''}
  ${inlineInputNormalStyle}
  &:hover {
    ${inlineInputHoverStyle}
  }
  &:focus {
    outline: none;
    ${inlineInputActiveStyle}
  }
  &:disabled {
    ${inlineInputDisabledStyle}
  }
`;

const defaultProps: Partial<IStyledInlineInputProps> = {
  invalid: false,
  submitting: false,
};

StyledInlineInput.defaultProps = defaultProps;

export default StyledInlineInput;
