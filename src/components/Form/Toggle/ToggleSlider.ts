import { HTMLProps } from 'react';
import styled from 'styled-components';
import { rem } from '../../../helpers/utils';

interface IToggleSliderOwnProps {
  disabled: boolean;
  h: number;
}

type IToggleSliderProps = IToggleSliderOwnProps & HTMLProps<HTMLSpanElement>;

export const ToggleSlider = styled.span<IToggleSliderProps>`
  position: relative;
  display: inline-block;
  width: 100%;
  height: ${({ h }) => rem(h)};
  border-radius: 9999px;
  transition: background-color .2s;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  &:before {
    content: '';
    position: absolute;
    top: 0;
    transition: left .2s;
    bottom: 0;
    margin: auto;
    height: ${({ h }) => rem(h - 8)};
    width: ${({ h }) => rem(h - 8)};
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 100%;
  }
`;
