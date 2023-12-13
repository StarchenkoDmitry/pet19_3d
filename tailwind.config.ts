import type { Config } from 'tailwindcss'

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
        'section': '0px 0px 20px 0px rgb(0 0 0 / 40%)',
      }
    },
    fontFamily:{
      'sans':['Roboto, sans-serif'],

      'mainSans':[`sans-serif`],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'sans2': ['Helvetica', 'Arial', 'sans-serif'],
      'robo': ["Roboto"],
      'robo2': ["Roboto, sans-serif"],
      'spacex': ["'D-DIN-Bold', Arial, Verdana, sans-serif"],
    }
  },
  plugins: [],
}
export default config
