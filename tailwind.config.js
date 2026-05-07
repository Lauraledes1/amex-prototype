/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    borderRadius: {
      none: '0',
      sm:   '8px',
      s:    '12px',
      m:    '16px',
      full: '1000px',
    },
    extend: {
      fontFamily: { sans: ['Montserrat', 'sans-serif'] },
      fontSize: {
        'display-lg':  ['48px', { lineHeight: '56px', letterSpacing: '-0.5px', fontWeight: '600' }],
        'headline-lg': ['40px', { lineHeight: '48px' }],
        'title-lg':    ['32px', { lineHeight: '40px' }],
        'title-sm':    ['20px', { lineHeight: '28px' }],
        'body-lg':     ['18px', { lineHeight: '26px' }],
        'body-md':     ['16px', { lineHeight: '24px' }],
        'body-sm':     ['14px', { lineHeight: '20px' }],
        'caption-md':  ['12px', { lineHeight: '16px' }],
      },
      colors: {
        brand: {
          primary:        '#0079c1',
          'primary-text': '#00619a',
          secondary:      '#f2b844',
        },
        content: {
          default:      '#101010',
          subtle:       '#808080',
          knockout:     '#ffffff',
          'on-surface': '#1a191a',
        },
        surface: {
          default:            '#fafafa',
          secondary:          '#f0f1f1',
          'container-lowest': '#ffffff',
          'container-low':    '#dfdfdf',
          'state-low':        '#f5f4f5',
        },
        border: {
          subtle:    '#cfcfcf',
          default:   '#606060',
          brand:     '#0079c1',
          secondary: '#f2b844',
        },
      },
      spacing: {
        '10': '10px',
        '18': '18px',
      },
    },
  },
  plugins: [],
};

