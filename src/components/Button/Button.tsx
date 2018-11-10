import * as React from 'react';
import StyledButton, { IStyledButtonSize, IStyledButtonType } from './StyledButton';

export type IButtonType = IStyledButtonType;
export type IButtonSize = IStyledButtonSize;

export interface IButtonProps {
  btnType?: IButtonType;
  btnSize?: IButtonSize;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const Button: React.ComponentType<React.HTMLProps<HTMLButtonElement> & IButtonProps> = React.forwardRef((
  { left, right, btnType, btnSize, children, ref, ...rest }, innerRef: any
) => (
  <StyledButton
    left={left}
    right={right}
    btnSize={btnSize}
    btnType={btnType}
    ref={innerRef}
    {...rest}
  >
    {left && left}
    {children}
    {right && right}
  </StyledButton>
));

const defaultProps: Partial<IButtonProps> = {
  btnSize: 'default',
  btnType: 'default',
  left: null,
  right: null,
};

Button.defaultProps = defaultProps;
