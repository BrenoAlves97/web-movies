import React from 'react';

export const Container = ({ children, hScreen, centerBetween, textCenter, placeCenter, pt }) => {
   return (
      <div
         className={`w-full max-w-5xl mx-auto px-4 relative
         ${centerBetween && 'flex items-center justify-between'} 
         ${hScreen && 'flex-1'} 
         ${textCenter && 'text-center'}
         ${placeCenter && 'flex items-center justify-center'}
         ${pt && 'pt-16'}
         `}
      >
         {children}
      </div>
   );
};
