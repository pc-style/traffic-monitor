/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ec4899', // pink-500
          hover: '#db2777', // pink-600
        },
        secondary: '#6b7280', // gray-500
        pink: {
          25: '#fef7f7',
          50: '#fdf2f8',
          75: '#fce7f3',
          100: '#fce7f3',
          150: '#fbcfe8',
          200: '#f9a8d4',
          250: '#f472b6',
          300: '#f472b6',
          350: '#ec4899',
          400: '#ec4899',
          450: '#db2777',
          500: '#db2777',
          550: '#be185d',
          600: '#be185d',
          650: '#9d174d',
          700: '#9d174d',
          750: '#831843',
          800: '#831843',
          850: '#701a75',
          900: '#701a75',
          950: '#4a044e',
        }
      },
      spacing: {
        'section': '2rem',
        'container': '1rem',
      },
      borderRadius: {
        'container': '0.75rem',
      },
      fontFamily: {
        sans: [
          'Inter Variable',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-pink': 'pulsePink 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulsePink: {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(236, 72, 153, 0.4)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 0 10px rgba(236, 72, 153, 0)',
            transform: 'scale(1.02)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 25%, #fbcfe8 50%, #f9a8d4 75%, #f472b6 100%)',
        'gradient-pink-dark': 'linear-gradient(135deg, #be185d 0%, #9d174d 50%, #831843 100%)',
      }
    },
  },
  plugins: [],
  safelist: [
    'border-pink-100',
    'border-pink-200',
    'border-pink-300',
    'border-purple-100',
    'border-purple-200',
    'border-purple-300',
    'border-indigo-100',
    'border-indigo-200',
    'border-indigo-300',
    'border-rose-100',
    'border-rose-200',
    'border-rose-300',
    'bg-pink-25',
    'bg-pink-50',
    'bg-pink-75',
    'bg-pink-100',
    'bg-pink-150',
    'bg-pink-200',
    'text-pink-600',
    'text-pink-700',
    'text-pink-800',
    'hover:bg-pink-200',
    'hover:bg-pink-300',
    'border-pink-400',
    'border-pink-500',
  ],
}
