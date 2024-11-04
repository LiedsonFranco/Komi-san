/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: 'var(--primary)',
        background: 'var(--background)',
        'foreground-2': 'var(--foreground-2)',
        'foreground-3': 'var(--foreground-3)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'text-background': 'var(--text-background)',
      },
      dropShadow: {
        'card': '0px 15px #26283F',
      },
    },
  },
  plugins: [],
}

