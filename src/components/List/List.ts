import { HTMLProps } from 'react';
import styled from 'styled-components';

export const List = styled.ul<HTMLProps<HTMLUListElement>>`
  padding: 0;
  list-style: none;
`;
