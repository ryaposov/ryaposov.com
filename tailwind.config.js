/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

const plugin = require('tailwindcss/plugin')

const spacing = {
  initial: 'initial',
  auto: 'auto',
  inherit: 'inherit',
  0: '0px',
  1: '1px',
  2: '2px',
  3: '3px',
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  28: '28px',
  32: '32px',
  36: '36px',
  40: '40px',
  44: '44px',
  48: '48px',
  52: '52px',
  56: '56px',
  60: '60px',
  64: '64px',
  68: '68px',
  72: '72px',
  76: '76px',
  80: '80px',
  84: '84px',
  88: '88px',
  92: '92px',
  96: '96px',
  100: '100px',
  104: '104px',
  108: '108px',
  112: '112px',
  116: '116px',
  120: '120px',
  124: '124px',
  128: '128px',
  132: '132px',
  136: '136px',
  140: '140px',
  144: '144px',
  148: '148px',
  152: '152px',
  156: '156px',
  160: '160px',
  164: '164px',
  168: '168px',
  172: '172px',
  176: '176px',
  180: '180px',
  184: '184px',
  188: '188px',
  192: '192px',
  196: '196px',
  200: '200px',
  220: '220px',
  320: '320px',
  700: '700px',
  760: '760px',
  840: '840px',
  880: '880px',
}

module.exports = {
  prefix: 'app-',
  purge: {
    content: [
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './components/**/*.vue',
      './pages-partials/**/*.vue'
    ],
  },
  theme: {
    container: {
      center: true
    },
    screens: {
      xs: '360px',
      sm: '414px',
      md: '880px'
    },
    colors: {
      
    },
    inset: {
      ...spacing
    },
    spacing: {
      ...spacing
    },
    fontFamily: {
      body: ['Catamaran', 'sans-serif'],
    },
    fontWeight: {
      bold: '700',
      semibold: '600',
      medium: '500',
      regular: '400'
    },
    fontSize: {
      36: '36px',
      32: '32px',
      28: '28px',
      24: '24px',
      20: '20px',
      18: '18px',
      16: '16px',
      14: '14px'
    },
    lineHeight: {
      56: '56px',
      52: '52px',
      40: '40px',
      36: '36px',
      32: '32px',
      28: '28px',
      24: '24px',
      20: '20px'
    },
    minWidth: {
      ...spacing
    },
    maxWidth: {
      ...spacing
    },
    minHeight: {
      ...spacing
    },
    maxHeight: {
      ...spacing
    },
    skew: {
      '1/2': '50%'
    }
  },
  corePlugins: [
    'preflight',
    'cursor',
    'display',
    'inset',
    'margin',
    'objectFit',
    'objectPosition',
    'opacity',
    'overflow',
    'order',
    'outline',
    'pointerEvents',
    'padding',
    'position',
    'verticalAlign',
    'wordBreak',
    'zIndex',
    'visibility',
    'userSelect',
    'whitespace',

    // text
    'letterSpacing',
    'textAlign',
    'fontFamily',
    'fontWeight',
    'fontSize',
    'lineHeight',

    // border
    'borderRadius',
    'borderWidth',
    'borderStyle',

    // sizing
    'width',
    'height',
    'maxWidth',
    'maxHeight',
    'minWidth',
    'minHeight',

    // flex
    'flex',
    'flexDirection',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'justifyContent',
    'alignContent',
    'alignItems',
    'alignSelf',
    
    // transition classes
    'transitionProperty',
    'transitionTimingFunction',
    'transitionDuration',

    // transform classes
    'transform',
    'translate',
    'transformOrigin',
    'rotate',
    'skew',
    'scale'
  ],
  variants: {
    margin: ['responsive', 'last'],
    padding: ['responsive', 'last'],
  },
  plugins: []
}
