import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { rem } from '../../helpers/utils';

const increase = keyframes`
  from { left: -15%; width: 5%; }
  to { left: 130%; width: 100%; }
`;

const decrease = keyframes`
  from { left: -80%; width: 80%; }
  to { left: 110%; width: 10%; }
`;

interface IInfiniteProgressBarOwnProps {
  colour?: string;
  bgColor?: string; 
}

export type IInfiniteProgressBarProps = IInfiniteProgressBarOwnProps & React.HTMLProps<HTMLDivElement>;

export const InfiniteProgressBar = styled.div<IInfiniteProgressBarProps>`
  position: relative;
  height: ${rem(5)};
  overflow-x: hidden;
  background: ${props => props.bgColor};
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: ${props => props.colour};
    height: ${rem(5)};
    width: 10%;
    left: -15%;
  }
  &:after {
    animation: ${increase} 2s infinite;
  }
  &:before {
    animation: ${decrease} 2s 0.5s infinite;
  }
`;

const defaultProps: Partial<IInfiniteProgressBarProps> = {
  colour: '#4a8df8',
  bgColor: '#d8eafc',
};

InfiniteProgressBar.defaultProps = defaultProps;
