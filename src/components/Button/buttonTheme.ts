import { rem } from '../../helpers/utils';

const buttonTheme = {
  btnSizes: {
    default: {
      fontSize: rem(12),
      lineHeight: rem(38),
      padding: `0 ${rem(30)}`,
    },
    large: {
      fontSize: rem(14),
      lineHeight: rem(53),
      padding: `0 ${rem(40)}`,
    },
    small: {
      fontSize: rem(10),
      lineHeight: rem(28),
      padding: `0 ${rem(15)}`,
    },
  },
  btnTypes: {
    danger: {
      active: {
        backgroundColor: '#ec2147',
        borderColor: 'transparent',
        color: '#fff',
      },
      hover: {
        backgroundColor: '#ee395b',
        borderColor: 'transparent',
        color: '#fff',
      },
      normal: {
        backgroundColor: '#f0506e',
        borderColor: 'transparent',
        color: '#fff',
      },
    },
    default: {
      active: {
        backgroundColor: 'transparent',
        borderColor: '#999',
        color: '#222',
      },
      hover: {
        backgroundColor: 'transparent',
        borderColor: '#b2b2b2',
        color: '#222',
      },
      normal: {
        backgroundColor: 'transparent',
        borderColor: '#e5e5e5',
        color: '#222',
      },
    },
    primary: {
      active: {
        backgroundColor: '#0e6dcd',
        borderColor: 'transparent',
        color: '#fff',
      },
      hover: {
        backgroundColor: '#0f7ae5',
        borderColor: 'transparent',
        color: '#fff',
      },
      normal: {
        backgroundColor: '#1e87f0',
        borderColor: 'transparent',
        color: '#fff',
      },
    },
    secondary: {
      active: {
        backgroundColor: '#080808',
        borderColor: 'transparent',
        color: '#fff',
      },
      hover: {
        backgroundColor: '#151515',
        borderColor: 'transparent',
        color: '#fff',
      },
      normal: {
        backgroundColor: '#222',
        borderColor: 'transparent',
        color: '#fff',
      },
    },
  },
};

export default buttonTheme;
