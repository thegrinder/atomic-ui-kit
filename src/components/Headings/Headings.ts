import { HTMLProps } from 'react';
import styled from 'styled-components';
import { headingSizingStyle, headingColorStyle } from './headingHelpers';

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
  sizing: 'h1',
  colour: 'dark',
};

H1.defaultProps = H1DefaultProps;

export const H2 = H1.withComponent('h2');

const H2DefaultProps: Partial<IHeadingProps> = {
  sizing: 'h2',
  colour: 'dark',
};

H2.defaultProps = H2DefaultProps;

export const H3 = H1.withComponent('h3');

const H3DefaultProps: Partial<IHeadingProps> = {
  sizing: 'h3',
  colour: 'dark',
};

H3.defaultProps = H3DefaultProps;

export const H4 = H1.withComponent('h4');

const H4DefaultProps: Partial<IHeadingProps> = {
  sizing: 'h4',
  colour: 'dark',
};

H4.defaultProps = H4DefaultProps;

export const H5 = H1.withComponent('h5');

const H5DefaultProps: Partial<IHeadingProps> = {
  sizing: 'h5',
  colour: 'dark',
};

H5.defaultProps = H5DefaultProps;

export const H6 = H1.withComponent('h6');

const H6DefaultProps: Partial<IHeadingProps> = {
  sizing: 'h6',
  colour: 'dark',
};

H6.defaultProps = H6DefaultProps;
