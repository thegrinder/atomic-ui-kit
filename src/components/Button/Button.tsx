import * as React from 'react';
import { Spinner } from '../Spinner/Spinner';
import { ChildrenWrapper } from './ChildrenWrapper';
import { SpinnerWrapper } from './SpinnerWrapper';
import {
  IStyledButtonSize,
  IStyledButtonType,
  StyledButton,
} from './StyledButton';

export type IButtonType = IStyledButtonType;
export type IButtonSize = IStyledButtonSize;

interface IButtonOwnProps {
  btnType?: IButtonType;
  btnSize?: IButtonSize;
  left?: React.ReactNode;
  right?: React.ReactNode;
  submitting?: boolean;
}

export type IButtonProps = IButtonOwnProps & React.HTMLProps<HTMLButtonElement>;

export const Button: React.ComponentType<IButtonProps> = React.forwardRef(
  (
    { left, right, btnType, btnSize, submitting, children, ref, ...rest },
    innerRef: any
  ) => (
    <StyledButton
      left={left}
      right={right}
      btnSize={btnSize}
      btnType={btnType}
      ref={innerRef}
      {...rest}
    >
      {submitting && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
      <ChildrenWrapper submitting={submitting}>
        {left && left}
        {children}
        {right && right}
      </ChildrenWrapper>
    </StyledButton>
  )
);

const defaultProps: Partial<IButtonProps> = {
  btnSize: 'default',
  btnType: 'default',
  left: null,
  right: null,
  submitting: false
};

Button.defaultProps = defaultProps;
