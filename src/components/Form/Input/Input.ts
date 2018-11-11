import { HTMLProps } from 'react';
import styled from 'styled-components';
import { rem } from '../../../helpers/utils';
import { commonInputStyles } from '../commonFormStyles';

interface IInputOwnProps {
  invalid?: boolean;
}

export type IInputProps = IInputOwnProps & HTMLProps<HTMLInputElement>;

export const Input = styled.input<IInputProps>`
  ${commonInputStyles}
  vertical-align: middle;
  display: inline-block;
  height: ${rem(40)};
  padding: 0 ${rem(10)};
  overflow: visible;
`;

const defaultProps: Partial<IInputProps> = {
  invalid: false,
};

Input.defaultProps = defaultProps;
