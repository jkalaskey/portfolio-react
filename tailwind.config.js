/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    extend: {
      colors: {
        neutral: {
          800: '#262525',
          700: '#303030',
          100: '#FFFFFF',
        },

        highlight: {
          blue: '#C7E7EE',
          red: '#F9DEDE',
          orange: '#F4DACA',
          pink: '#F4D7E4',
        },
      },
      backgroundImage: {
        'bg-black': 'url(/src/assets/images/black-bg.png)',
        'bg-paper': 'url(/src/assets/images/paper-bg.png)',
        'bg-floating-paper': 'url(/src/assets/images/floating-paper-bg.png)',
      },
      boxShadow: {
        'paper': '0px -6px 2px 0px rgba(0, 0, 0, 0), 0px -4px 2px 0px rgba(0, 0, 0, 0.03), 0px -2px 1px 0px rgba(0, 0, 0, 0.10), 0px -1px 1px 0px rgba(0, 0, 0, 0.17), 0px 0px 1px 0px rgba(0, 0, 0, 0.20)',
        'floating': '-1px 6px 2px 0px rgba(0, 0, 0, 0), -1px 4px 1px 0px rgba(0, 0, 0, 0.03), 0px 2px 1px 0px rgba(0, 0, 0, 0.10), 0px 1px 1px 0px rgba(0, 0, 0, 0.17)',
        'sticker': '0px 4px 1px 0px rgba(0, 0, 0, 0), 0px 2px 1px 0px rgba(0, 0, 0, 0.01), 0px 1px 1px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(0, 0, 0, 0.09)',
      },
      fontFamily: {
        'thinker': ['Thinker', 'sans-serif'],
        'thinker-alt': ['ThinkerAlt2', 'sans-serif'],
        'sans': ['Work Sans', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      fontSize: {
        'fs-base': '1rem',      // 16px
        'fs-lg': '1.125rem',    // 18px
        'fs-xl': '1.25rem',     // 20px
        'fs-2xl': '1.375rem',   // 22px
        'fs-3xl': '1.5rem',     // 24px
        'fs-4xl': '2.75rem',    // 44px
        'fs-5xl': '4rem',       // 64px
      },
      lineHeight: {
        'lh-3xs': '0.9',
        'lh-2xs': '1',
        'lh-xs': '1.2',
        'lh-sm': '1.3',
        'lh-base': '1.4',
        'lh-lg': '1.5',
      },
      letterSpacing: {
        'ls-tight': '-4.5px',
      },
      mixBlendMode: {
        'darken': 'darken',
        'multiply': 'multiply',
      },
      zIndex: {
        'behind': -1,
        'default': 1,
        'dropdown': 1000,
        'sticky': 1020,
        'modal': 1030,
        'popover': 1040,
        'tooltip': 1050,
      },
      aspectRatio: {
        'square': '1',
        'portrait': '3/4',
        'landscape': '4/3',
        'wide': '16/9',
      },
      transformOrigin: {
        'center': 'center center',
        'top': 'center top',
        'top-left': 'left top',
        'top-right': 'right top',
        'bottom': 'center bottom',
        'bottom-left': 'left bottom',
        'bottom-right': 'right bottom',
        'left': 'left center',
        'right': 'right center',
        'corner-fold': '0 0',  // For paper corner fold effects
        'diagonal-fold': '100% 0',  // For diagonal fold animations
      },
    },
  },
  plugins: [],
  screens: {
    'xs': '375px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
    },
  },
}
