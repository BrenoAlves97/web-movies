import React from 'react';
import { Image, Trash2 } from 'lucide-react';

import { MovieContext } from '../../context/movie-context';

import { Container } from '../../components/utilities/container';
import { Subtitle } from '../../components/utilities/subtitle';

const limitText = (text) => {
   const limit = 15;

   if (text.length > limit) {
      return text.slice(0, limit) + ' ...';
   } else {
      return text;
   }
};

export const MyMovies = () => {
   const { movies, moviesLength, handleRemoveMovie } = React.useContext(MovieContext);

   return (
      <Container hScreen={true} placeCenter={moviesLength === 0}>
         {moviesLength === 0 && (
            <p className="text-center text-zinc-200 font-bold text-2xl md:text-3xl">
               Nenhum filme adicionado a lista...
            </p>
         )}

         {moviesLength > 0 && <Subtitle textCenter={true}>Meus filmes...</Subtitle>}

         {moviesLength > 0 && (
            <div className=" flex gap-8 flex-col">
               {movies.map((movie) => (
                  <div
                     key={movie.id}
                     className="flex gap-4 sm:items-center flex-col sm:flex-row relative p-2 bg-zinc-800 rounded-md border-2 border-transparent hover:border-zinc-700/20 duration-200 group"
                  >
                     <div className="flex gap-2 items-center overflow-hidden">
                        {movie.poster_path ? (
                           <img
                              className="w-16 h-16 rounded-full object-cover object-top"
                              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : ''}
                              alt={movie.title}
                           />
                        ) : (
                           <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-zinc-500">
                              <Image size={30} color="#71717a" />
                           </div>
                        )}
                        <h2 className="text-zinc-300 text-base font-bold sm:text-xl group-hover:text-zinc-50 duration-200">
                           {limitText(movie.title)}
                        </h2>
                     </div>

                     <button
                        onClick={() => handleRemoveMovie(movie)}
                        className="absolute -top-4 -right-2 sm:static sm:ml-auto p-2 rounded-full border-2 bg-zinc-700 border-transparent hover:border-zinc-300 group duration-200"
                     >
                        <Trash2 size={22} color="#d4d4d8" className="group-hover:scale-110 duration-200" />
                     </button>
                  </div>
               ))}
            </div>
         )}
      </Container>
   );
};
