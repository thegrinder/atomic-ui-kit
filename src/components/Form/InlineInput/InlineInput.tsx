import * as React from 'react';
import styled from 'styled-components';
import { rem } from '../../../helpers/utils';
import { Spinner } from '../../Spinner/Spinner';
import { SpinnerWrapper } from './SpinnerWrapper';
import { StyledInlineInput } from './StyledInlineInput';
import { Wrapper } from './Wrapper';

interface IInlineInputOwnProps {
  submitting?: boolean;
  disabled?: boolean;
  invalid?: boolean;
}

export type IInlineInputProps = IInlineInputOwnProps & React.HTMLProps<HTMLInputElement>;

export const InlineInput: React.SFC<IInlineInputProps> = (
  { submitting, disabled, ref, ...rest }
) => (
  <Wrapper>
    <StyledInlineInput
      submitting={submitting}
      disabled={submitting || disabled}
      {...rest}
    />
    {submitting && <SpinnerWrapper><Spinner color="#ccc"/></SpinnerWrapper>}
  </Wrapper>
);

const defaultProps: Partial<IInlineInputProps> = {
  disabled: false,
  invalid: false,
  submitting: false,
};

InlineInput.defaultProps = defaultProps;
