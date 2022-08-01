export default {
  fontSizes: {
    '12px': 'calc(12rem / 16)',
    '13px': 'calc(13rem / 16)',
    '14px': 'calc(14rem / 16)',
    '16px': 'calc(16rem / 16)',
    '18px': 'calc(18rem / 16)',
    '24px': 'calc(24rem / 16)',
    '28px': 'calc(28rem / 16)',
    '36px': 'calc(36rem / 16)',
    '48px': 'calc(48rem / 16)',
    //-------------------
    smallText: '$12px',
    articleDate: '$13px',
    footerMenu: '$14px',
    topicS: '$16px',
    input: '$16px',
    topicM: '$20px',
    label: '$16px',
    description: '$16px',
    titleS: '$18px',
    titleM: '$24px',
  },
  fontWeights: {
    light: 400,
    normal: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {},
  letterSpacings: {},
  fonts: {
    headerFont: 'Lora, sans-serif',
    bodyFont: 'Inter, sans-serif',
  },
};

export const typoUtils = {
  boldHeader: (size: number | string) => ({
    fontFamily: '$headerFont',
    fontWeight: '$bold',
    fontSize: size,
  }),
  boldBody: (size: number | string) => ({
    fontFamily: '$bodyFont',
    fontWeight: '$bold',
    fontSize: size,
  }),
  semiBoldBody: (size: number | string) => ({
    fontFamily: '$bodyFont',
    fontWeight: '$semiBold',
    fontSize: size,
  }),
  normalBody: (size: number | string) => ({
    fontFamily: '$bodyFont',
    fontWeight: '$normal',
    fontSize: size,
  }),
  lightBody: (size: number | string) => ({
    fontFamily: '$bodyFont',
    fontWeight: '$light',
    fontSize: size,
  }),
};

export const globalTypo = {
  [`input, textarea, select`]: {
    fontSize: '$16px',
    '&::placeholder': {
      color: '#7c7c7c',
    },
  },
  label: { fontSize: '$16px' },
};
