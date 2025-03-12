export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#baddff',
          300: '#84c5ff',
          400: '#48a6ff',
          500: '#1a85ff',
          600: '#0062ff',
          700: '#004ee6',
          800: '#0040b8',
          900: '#003a8c',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        code: {
          green: '#98c379',
          blue: '#61afef',
          purple: '#c678dd',
          red: '#e06c75',
          yellow: '#e5c07b',
          cyan: '#56b6c2',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.green.400), 0 0 20px theme(colors.green.600)',
      },
    },
  },
  plugins: [],
}