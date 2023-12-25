import React from 'react';
import { Link } from 'react-router-dom';
import { Clapperboard } from 'lucide-react';

import { Container } from '../utilities/container';

export const Navbar = () => {
   return (
      <header className="w-full h-24 flex items-center justify-center border-b-2 border-zinc-700 text-zinc-200 mb-14 font-medium">
         <Container centerBetween={true}>
            <Link to="/">
               <h2 className="text-2xl sm:text-3xl hover:text-zinc-50 duration-200">Web Movies</h2>
            </Link>

            <nav>
               <ul className="flex items-center justify-center">
                  <Link className="text-base inline hover:text-zinc-50 duration-200">
                     <span className="flex items-center gap-2 group hover:text-zinc-50">
                        <Clapperboard color="#f4f4f5" size={24} className="group-hover:scale-110 duration-300" />
                        Meus Filmes
                     </span>
                  </Link>
               </ul>
            </nav>
         </Container>
      </header>
   );
};
