import { HTMLProps } from 'react';
import styled from 'styled-components';
import { rem } from '../../../helpers/utils';
import { toggleCheckedStyle, toggleNormalStyle } from '../formHelpers';

interface IToggleCheckboxOwnProps {
  h: number;
}

type IToggleCheckboxProps = IToggleCheckboxOwnProps & HTMLProps<HTMLInputElement>;

export const ToggleCheckbox = styled.input.attrs({
  type: 'checkbox',
})<IToggleCheckboxProps>`
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
