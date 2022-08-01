export const reset = {
  [`*, *::before, *::after`]: {
    boxSizing: 'border-box',
    // background: rgb(0, 100, 0 / 0.05) !important, // for debugging

    '@media (prefers-reduced-motion: reduce)': {
      'animation-duration': '0.01ms !important',
      'animation-iteration-count': '1 !important',
      'transition-duration': '0.01ms !important',
      'scroll-behavior': 'auto !important',
    },

    '*': {
      margin: 0,
    },

    [`html, body`]: {
      height: '100%',
    },

    body: {
      lineHeight: 1.5,
      '-webkit-font-smoothing': 'antialiased',
    },

    [`img, picture, video, canvas, svg`]: {
      display: 'block',
      maxWidth: '100%',
    },

    [`input, button, textarea, select`]: {
      font: 'inherit',
    },

    [`p, h1, h2, h3, h4, h5, h6`]: {
      overflowWrap: 'break-word',
    },

    ul: {
      listStyleType: 'none',
    },

    [`#root, #__next`]: {
      isolation: 'isolate',
    },
    a: { textDecoration: 'none' },
    'a, button': {
      cursor: 'pointer',
    },
  },
};

export const utilityClass = {
  '.sreen-reader-only': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap' /* added line */,
    border: '0',
  },
};

export const commonStyle = {
  [`input, button, textarea, select, div, a`]: {
    '&:focus-visible': {
      outline: '$primary500 auto 1px',
      'outline-offset': '-0.5px',
    },
  },
};
