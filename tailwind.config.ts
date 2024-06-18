import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        custom: '0 0 25px 7px rgba(168, 85, 247, 0.9), 0 0 64px 47px rgba(168, 85, 247, 0.6), 0 0 30px 15px rgba(168, 85, 247, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
