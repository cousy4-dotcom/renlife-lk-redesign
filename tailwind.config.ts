import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 900: '#24113f', 800: '#32185a', 700: '#47227d' },
        cta: '#b8ff2c',
        lavender: '#f2eff8',
        ink: '#1f1730',
        muted: '#766a86',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(36, 17, 63, 0.14)',
        card: '0 10px 28px rgba(55, 38, 82, 0.08)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
