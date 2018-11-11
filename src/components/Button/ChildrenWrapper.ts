import * as React from 'react';
import styled from 'styled-components';

export interface ISpinnerWrapperProps {
  submitting: boolean;
}

const SpinnerWrapper = styled.span<React.HTMLFactory<HTMLSpanElement> & ISpinnerWrapperProps>`
  opacity: ${({ submitting }) => submitting ? '0' : '100%'};
`;

export default SpinnerWrapper;
