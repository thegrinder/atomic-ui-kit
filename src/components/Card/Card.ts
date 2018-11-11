import { HTMLProps } from 'react';
import styled from 'styled-components';

export const Card = styled.div<HTMLProps<HTMLDivElement>>`
  background: #fff;
  color: #666;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
`;
