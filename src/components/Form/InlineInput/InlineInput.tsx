import * as React from 'react';
import styled from 'styled-components';
import StyledInlineInput from './StyledInlineInput';
import Spinner from '../../Spinner/Spinner';
import { rem } from '../../../helpers/utils';

export interface IInlineInputProps {
  submitting?: boolean;
  disabled?: boolean;
  invalid?: boolean;
}

const Wrapper = styled.div`
  position: relative;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  right: ${rem(8)};
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const InlineInput: React.SFC<IInlineInputProps & React.HTMLProps<HTMLInputElement>> = (
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
  submitting: false,
  disabled: false,
  invalid: false,
};

InlineInput.defaultProps = defaultProps;

export default InlineInput;
