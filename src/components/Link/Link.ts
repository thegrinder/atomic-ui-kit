import { HTMLProps } from 'react';
import styled from 'styled-components';
import { linkHoverStyle, linkNormalStyle } from './linkHelpers';

export type ILinkType = 'default' | 'muted';

export interface ILinkProps {
  linkType?: ILinkType;
}

const Link = styled.a<ILinkProps & HTMLProps<HTMLAnchorElement>>`
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

export default Link;
