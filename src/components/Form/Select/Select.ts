import { HTMLProps } from 'react';
import styled from 'styled-components';
import { commonInputStyles } from '../commonFormStyles';
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
  background-color: #000;
  background-repeat: no-repeat;
  background-position: 100% 50%;
  &:disabled {
    background-color: #000;
  }
`;

const defaultProps: Partial<ISelectProps> = {
  invalid: false,
};

Select.defaultProps = defaultProps;

export default Select;
