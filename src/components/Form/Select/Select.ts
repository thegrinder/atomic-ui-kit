import { HTMLProps } from 'react';
import styled from 'styled-components';
import { rem } from '../../../helpers/utils';
import { commonInputStyles } from '../commonFormStyles';
import { inputDisabledStyle } from '../formHelpers';

interface ISelectOwnProps {
  invalid?: boolean;
}

export type ISelectProps = ISelectOwnProps & HTMLProps<HTMLSelectElement>;

export const Select = styled.select<ISelectProps>`
  ${commonInputStyles}
  text-transform: none;
  padding: 0 ${rem(10)};
  vertical-align: middle;
  display: inline-block;
  height: ${rem(40)};
  background-color: #fff;
  &:disabled {
    ${inputDisabledStyle}
  }
`;

const defaultProps: Partial<ISelectProps> = {
  invalid: false,
};

Select.defaultProps = defaultProps;
