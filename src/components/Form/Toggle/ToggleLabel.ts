import { HTMLProps } from 'react';
import styled from 'styled-components';

const ToggleLabel = styled.label<HTMLProps<HTMLLabelElement>>`
  display: inline-block;
  width: 100%;
`;

export default ToggleLabel;
