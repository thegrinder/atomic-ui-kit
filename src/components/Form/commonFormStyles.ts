import { css } from 'styled-components';
import { rem } from '../../helpers/utils';
import {
  inputActiveStyle, inputDisabledStyle, inputNormalStyle,
  miscActiveStyle, miscCheckedStyle, miscDisabledStyle,
  miscNormalStyle,
} from './formHelpers';

export const commonInputStyles = css`
  margin: 0;
  border-radius: 0;
  -webkit-appearance: none;
  touch-action: manipulation;
  max-width: 100%;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  transition: .2s ease-in-out;
  transition-property: color, background-color, border;
  ${inputNormalStyle}
  &:focus {
    outline: none;
    ${inputActiveStyle}
  }
  &:disabled {
    ${inputDisabledStyle}
  }
`;

export const miscInputStyles = css`
  touch-action: manipulation;
  -webkit-appearance: none;
  overflow: hidden;
  padding: 0;
  display: inline-block;
  height: ${rem(26)};
  width: ${rem(26)};
  margin-top: ${rem(-4)};
  vertical-align: middle;
  border-width: 1px;
  border-style: solid;
  transition: .2s ease-in-out;
  transition-property: background-color, border;
  cursor: pointer;
  ${miscNormalStyle}
  &:focus {
    outline: none;
    ${miscActiveStyle}
  }
  &:checked {
    ${miscCheckedStyle}
  }
  &:disabled {
    ${miscDisabledStyle}
    cursor: default;
  }
`;
