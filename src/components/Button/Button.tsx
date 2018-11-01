import * as React from 'react';
import StyledButton, { IBtnType, IBtnSize } from './StyledButton';

export interface IButtonProps {
  btnType?: IBtnType;
  btnSize?: IBtnSize;
  left?: React.ReactNode;
  right?: React.ReactNode;
}


const Button: React.SFC<IButtonProps> = (
  { left, right, btnType, btnSize, children, ...rest }
) => (
  <StyledButton
    left={left}
    right={right}
    btnSize={btnSize}
    btnType={btnType}
    {...rest}
  >
    {left && left}
    {children}
    {right && right}
  </StyledButton>
);

const defaultProps: Partial<IButtonProps> = {
  btnType: 'default',
  btnSize: 'default',
  left: null,
  right: null,
};

Button.defaultProps = defaultProps;

export default Button;
