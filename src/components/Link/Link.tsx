import * as React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import styled from 'styled-components';
import { linkHoverStyle, linkNormalStyle } from './linkHelpers';

export type ILinkType = 'default' | 'muted';

interface ILinkOwnProps {
  linkType?: ILinkType;
}

export type ILinkProps = ILinkOwnProps & RouterLinkProps;

export const Link = styled<ILinkProps>(({ linkType, ...rest }) => <RouterLink {...rest} />)`
  cursor: pointer;
  touch-action: manipulation;
  text-decoration: none;
  font-family: inherit;
  ${linkNormalStyle}
  &:hover {
    ${linkHoverStyle}
    outline: none;
    text-decoration: underline;
  }
`;

const defaultProps: Partial<ILinkProps> = {
  linkType: 'default',
};

Link.defaultProps = defaultProps;
