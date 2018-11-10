import * as React from 'react';
import StyledButton, { IBtnSize, IBtnType } from './StyledButton';

export interface IButtonProps {
  btnType?: IBtnType;
  btnSize?: IBtnSize;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const Button: React.ComponentType<React.HTMLProps<HTMLButtonElement> & IButtonProps> = React.forwardRef((
  { left, right, btnType, btnSize, children, ref, ...rest }, innerRef: any
) => (
  <StyledButton
    left={left}
    right={right}
    btnSize={btnSize}
    btnType={btnType}
    innerRef={innerRef}
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

export default Button;
