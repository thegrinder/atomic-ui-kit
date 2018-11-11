import * as React from 'react';
import styled from 'styled-components';

interface IChildrenWrapperOwnProps {
  submitting: boolean;
}

type IChildrenProps = React.HTMLProps<HTMLSpanElement> & IChildrenWrapperOwnProps;

export const ChildrenWrapper = styled.span<IChildrenProps>`
  opacity: ${({ submitting }) => submitting ? '0' : '100%'};
`;
