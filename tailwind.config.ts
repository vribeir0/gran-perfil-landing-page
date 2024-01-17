import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      'primary-blue': '#106eb0',
      'primary-orange': '#EC7000',
      'primary-gray': '#33303e',
      'second-gray': '#4e4b59'

    },
  },
  plugins: [],
}
export default config
