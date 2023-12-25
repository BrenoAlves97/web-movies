import React from 'react';
import { Container } from '../utilities/container';

export const Footer = () => {
   return (
      <footer className="h-20 w-full border-t-2 border-zinc-700 flex items-center justify-center mt-14">
         <Container textCenter={true}>
            <p className="text-zinc-100 font-medium text-base">web movies, {new Date().getFullYear()}</p>
         </Container>
      </footer>
   );
};
