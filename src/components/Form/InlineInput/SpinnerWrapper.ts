import { HTMLProps } from 'react';
import styled from 'styled-components';
import { rem } from '../../../helpers/utils';

export const SpinnerWrapper = styled.div<HTMLProps<HTMLDivElement>>`
  position: absolute;
  right: ${rem(8)};
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;
