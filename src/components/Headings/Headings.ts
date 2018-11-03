import { HTMLProps } from 'react';
import styled from 'styled-components';
import { headingColorStyle, headingSizingStyle } from './headingHelpers';

export type IHeadingSizing =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type IHeadingColour =
  | 'white'
  | 'lightest'
  | 'light'
  | 'normal'
  | 'dark'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

export interface IHeadingProps {
  sizing?: IHeadingSizing;
  colour?: IHeadingColour;
}

export const H1 = styled.h1<IHeadingProps & HTMLProps<HTMLHeadingElement>>`
  display: block;
  margin: 0;
  padding: 0;
  ${headingSizingStyle}
  ${headingColorStyle}
`;

const H1DefaultProps: Partial<IHeadingProps> = {
  colour: 'dark',
  sizing: 'h1',
};

H1.defaultProps = H1DefaultProps;

export const H2 = H1.withComponent('h2');

const H2DefaultProps: Partial<IHeadingProps> = {
  colour: 'dark',
  sizing: 'h2',
};

H2.defaultProps = H2DefaultProps;

export const H3 = H1.withComponent('h3');

const H3DefaultProps: Partial<IHeadingProps> = {
  colour: 'dark',
  sizing: 'h3',
};

H3.defaultProps = H3DefaultProps;

export const H4 = H1.withComponent('h4');

const H4DefaultProps: Partial<IHeadingProps> = {
  colour: 'dark',
  sizing: 'h4',
};

H4.defaultProps = H4DefaultProps;

export const H5 = H1.withComponent('h5');

const H5DefaultProps: Partial<IHeadingProps> = {
  colour: 'dark',
  sizing: 'h5',
};

H5.defaultProps = H5DefaultProps;

export const H6 = H1.withComponent('h6');

const H6DefaultProps: Partial<IHeadingProps> = {
  colour: 'dark',
  sizing: 'h6',
};

H6.defaultProps = H6DefaultProps;
