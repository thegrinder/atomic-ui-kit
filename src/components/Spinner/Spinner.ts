import { HTMLProps } from 'react';
import styled, { keyframes } from 'styled-components';
import { rem } from '../../helpers/utils';

export interface ISpinnerProps {
  size?: number;
  color?: string;
}

const loading = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.span<HTMLProps<ISpinnerProps & HTMLSpanElement>>`
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

export default Spinner;
