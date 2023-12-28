import React from 'react';
import { Link } from 'react-router-dom';
import { DoorClosed } from 'lucide-react';

import { Container } from '../../components/utilities/container';

export const Notfound = () => {
   return (
      <Container hScreen={true} placeCenter={true}>
         <div className="flex flex-col gap-6 justify-center items-center">
            <div className="flex gap-2 items-center justify-center text-center">
               <DoorClosed size={50} color="#eab308" className="hidden sm:block" />
               <p className="text-zinc-200 font-bold text-2xl md:text-3xl">Página não encontrada!</p>
            </div>
            <Link to="/" className="text-zinc-50 font-medium text-base hover:text-yellow-400 duration-200 ">
               Página inicial
            </Link>
         </div>
      </Container>
   );
};
