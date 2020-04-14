/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

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
  200: '200px'
}

module.exports = {
  prefix: 'app-',
  theme: {
    container: {
      center: true
    },
    screens: {
      sm: '414px',
      md: '620px'
    },
    colors: {
      text: {
        
      },
      bg: {
        
      }
    },
    inset: {
      ...spacing
    },
    spacing: {
      ...spacing
    }
  },
  corePlugins: [
    'preflight',
    'container',
    'alignContent',
    'alignItems',
    'alignSelf',
    'borderRadius',
    'backgroundColor',
    'borderColor',
    'borderWidth',
    'borderStyle',
    'cursor',
    'display',
    'flex',
    'flexDirection',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'justifyContent',
    'height',
    'maxHeight',
    'inset',
    'margin',
    'maxWidth',
    'minWidth',
    'minHeight',
    'maxHeight',
    'letterSpacing',
    'textAlign',
    'fontWeight',
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
    'width',
    'zIndex',
    // transition classes
    'transitionProperty',
    'transitionTimingFunction',
    'transitionDuration',
    // transform classes
    'transform',
    'translate',
    'transformOrigin',
    'textColor',
    'rotate',
    'skew',
    'scale',
    'visibility',
    'userSelect',
    'whitespace'
  ],
  variants: {},
  plugins: []
}
