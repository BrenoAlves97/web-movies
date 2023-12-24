import React from 'react';

export const Container = ({ children, hScreen, centerBetween, textCenter }) => {
   return (
      <div
         className={`w-full max-w-4xl mx-auto ${centerBetween && 'flex items-center justify-between'} ${
            hScreen && 'flex-1'
         } px-4 ${textCenter && 'text-center'}`}
      >
         {children}
      </div>
   );
};
