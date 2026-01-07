module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        industrial: {
          950: '#000000',
          900: '#000000',
          800: '#010101',
          700: '#020202',
          navy: '#000000',
          steel: '#6b7280',
          accent: '#ff7a18'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Roboto', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'card-lg': '0 8px 30px rgba(2,6,23,0.6)',
        'card-md': '0 6px 18px rgba(2,6,23,0.5)'
      },
      ringWidth: {
        3: '3px'
      }
    }
  },
  plugins: [],
}
