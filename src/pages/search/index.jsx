import React from 'react';
import { Binary } from 'lucide-react';
import { UserSearchMovies } from '../../hooks/user-fetch-search-movies';
import { Link } from 'react-router-dom';

import { Card } from '../../components/card';
import { Container } from '../../components/utilities/container';
import { Loading } from '../../components/utilities/loading';

import { apiConfig } from '../../config/api-config.js';

const token = import.meta.env.VITE_APP_TOKEN;

export const Search = () => {
   const params = new URL(document.location).searchParams;
   const movie = params.get('movie');

   if (!movie) return;

   const { data, loading } = UserSearchMovies(movie, apiConfig('GET', token));

   if (loading)
      return (
         <Container hScreen={true} placeCenter={true}>
            <Loading size={30} color="#d4d4d8" />
         </Container>
      );

   if (data.length === 0 && !loading)
      return (
         <Container hScreen={true} placeCenter={true}>
            <div className="flex flex-col gap-4 justify-center items-center">
               <div className="flex gap-2 items-center">
                  <Binary size={50} color="#eab308" />
                  <p className="text-zinc-200 font-bold text-3xl">Ops... Nenhum filme encontrado!</p>
               </div>
               <Link to="/" className="text-zinc-50 font-medium text-base hover:text-yellow-400 duration-200 ">
                  Página inicial
               </Link>
            </div>
         </Container>
      );

   return (
      <Container hScreen={true}>
         <section className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-3">
            {!loading && data && data.map((item) => <Card key={item.id} movie={item} />)}
         </section>
      </Container>
   );
};