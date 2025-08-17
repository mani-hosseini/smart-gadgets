/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px) scale(0.95)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        bounceIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.3)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.05)',
          },
          '70%': { 
            transform: 'scale(0.9)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        }
      },
      animation: {
        'slideIn': 'slideIn 0.5s ease-out',
        'bounceIn': 'bounceIn 0.6s ease-out',
        'fadeIn': 'fadeIn 0.4s ease-out',
      }
    },
  },
  plugins: [],
} 