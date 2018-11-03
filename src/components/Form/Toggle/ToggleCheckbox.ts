import { HTMLProps } from 'react';
import styled from 'styled-components';
import { rem } from '../../../helpers/utils';
import { toggleCheckedStyle, toggleNormalStyle } from '../formHelpers';

export interface IToggleCheckboxProps {
  h: number;
}

const ToggleCheckbox = styled.input.attrs({
  type: 'checkbox',
})<IToggleCheckboxProps & HTMLProps<HTMLInputElement>>`
  display: none;
  & + span {
    ${toggleNormalStyle}
  }
  &:checked + span {
    ${toggleCheckedStyle}
  }
  & + span:before {
    left: ${rem(4)};
  }
  &:checked + span:before {
    left: calc(100% - ${({ h }) => rem(h - 4)});
  }
`;

export default ToggleCheckbox;
