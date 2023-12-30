/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            sans: ['Poppins'],
         },
         keyframes: {
            fadeon: {
               from: { opacity: '0' },
               to: { opacity: '1' },
            },
         },
      },

      animation: {
         fadeon: 'fadeon .2s ease-in forwards',
      },
   },
   plugins: [],
};
