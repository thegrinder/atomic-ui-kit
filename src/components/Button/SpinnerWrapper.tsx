import * as React from 'react';
import styled from 'styled-components';

const SpinnerWrapper = styled.span<React.HTMLFactory<HTMLSpanElement>>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export default SpinnerWrapper;
