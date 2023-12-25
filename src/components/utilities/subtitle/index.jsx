import React from 'react';

export const Subtitle = ({ children, textCenter }) => {
   return (
      <h2
         className={`font-bold text-3xl sm:text-4xl mb-8 text-zinc-200 hover:text-zinc-50 duration-200 ${
            textCenter && 'text-center'
         }`}
      >
         {children}
      </h2>
   );
};
