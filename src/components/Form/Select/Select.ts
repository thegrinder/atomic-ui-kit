import { HTMLProps } from 'react';
import styled from 'styled-components';
import { commonInputStyles } from '../commonFormStyles';
import { inputDisabledStyle } from '../formHelpers';
import { rem } from '../../../helpers/utils';

export interface ISelectProps {
  invalid?: boolean;
}

const Select = styled.select<ISelectProps & HTMLProps<HTMLSelectElement>>`
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

export default Select;
