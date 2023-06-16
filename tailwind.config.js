/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        //自定义配置
        'blue': {
          'main': '#0164FF',
          'main-padding': '#3D99FF',
        },
        'color-1': {
          'main': '#00B1B2',
          'main-padding': '#1CD1BD',
        },
        'orange': {
          'main': '#E56E0D',
          'main-padding': '#F5BB4B',
        },
      }
    }
  },
  plugins: [],
}

