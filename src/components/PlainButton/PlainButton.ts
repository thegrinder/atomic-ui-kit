import { HTMLProps } from 'react';
import styled from 'styled-components';

export interface IPlainButtonProps {
  btnColor?: string;
  btnHoverColor?: string;
}

const PlainButton = styled.button<IPlainButtonProps & HTMLProps<HTMLButtonElement>>`
  touch-action: manipulation;
  margin: 0;
  border: none;
  overflow: visible;
  text-transform: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  fill: currentcolor;
  line-height: 0;
  outline: none;
  transition: .1s ease-in-out;
  transition-property: color, opacity;
  opacity: ${props => (
    props.btnColor === 'inherit' && props.btnHoverColor === 'inherit' ? '.4' : '1'
  )};
  color: ${props => props.btnColor};
  &:focus,
  &:hover {
    opacity: 1;
    color: ${props => props.btnHoverColor};
  }
`;

const defaultProps: Partial<IPlainButtonProps> = {
  btnColor: '#999',
  btnHoverColor: '#666',
};

PlainButton.defaultProps = defaultProps;

export default PlainButton;
