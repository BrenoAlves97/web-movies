import React from 'react';

export const Container = ({ children, hScreen, centerBetween, textCenter, placeCenter }) => {
   return (
      <div
         className={`w-full max-w-5xl mx-auto px-4 relative py-8
         ${centerBetween && 'flex items-center justify-between'} 
         ${hScreen && 'flex-1'} 
         ${textCenter && 'text-center'}
         ${placeCenter && 'flex items-center justify-center'}
         `}
      >
         {children}
      </div>
   );
};
