import { HTMLProps } from 'react';
import styled, { keyframes } from 'styled-components';
import { rem } from '../../helpers/utils';

interface ISpinnerOwnProps {
  size?: number;
  color?: string;
}

export type ISpinnerProps = ISpinnerOwnProps & HTMLProps<HTMLSpanElement>;

const loading = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.span<ISpinnerProps>`
  width: ${props => rem(props.size)};
  height: ${props => rem(props.size)};
  border-radius: 100%;
  border: 2px solid ${props => props.color};
  border-bottom-color: transparent;
  animation: ${loading} 0.75s 0s infinite linear;
  vertical-align: middle;
  display: inline-block;
`;

const defaultProps: Partial<ISpinnerProps> = {
  color: '#fff',
  size: 20,
};

Spinner.defaultProps = defaultProps;
