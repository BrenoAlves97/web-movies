import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../utilities/container';

export const Navbar = () => {
   return (
      <header className="w-full h-24 flex items-center justify-center border-b-2 border-zinc-700 text-zinc-200 mb-8">
         <Container centerBetween={true}>
            <h2 className="text-2xl sm:text-4xl font-bold">Logo Projeto</h2>
            <nav>
               <ul className="flex items-center justify-center">
                  <Link to="/" className="text-base font-bold inline hover:text-zinc-50 duration-200">
                     Home
                  </Link>
               </ul>
            </nav>
         </Container>
      </header>
   );
};
