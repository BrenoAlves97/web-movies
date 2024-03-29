import React from 'react';
import { Star, Users, Coins, Image, PlusCircle } from 'lucide-react';

import { MovieContext } from '../../context/movie-context';

import { Loading } from '../utilities/loading';

export const MovieDetails = ({ movie }) => {
   const [image, setImage] = React.useState('');

   const { handleAddMovie } = React.useContext(MovieContext);

   const handleImageLoad = (url) => {
      setImage(url);
   };

   const handleDate = () => {
      const date = movie.release_date.split('-');
      const dd = date[2];
      const mm = date[1];
      const year = date[0];

      return `${dd}/${mm}/${year}`;
   };

   const formatValue = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' });

   return (
      <div>
         <div className={`h-[450px] mb-2 overflow-hidden rounded-md`}>
            {!movie.poster_path && (
               <div className="w-full h-full flex items-center justify-center bg-zinc-500">
                  <Image size={50} color="#d4d4d8" />
               </div>
            )}
            <>
               <div
                  className="w-full h-full flex items-center justify-center bg-zinc-500/10"
                  style={{
                     display: `${
                        movie.poster_path && !image.includes(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`)
                           ? 'flex'
                           : 'none'
                     }`,
                  }}
               >
                  <Loading size={24} color="#d4d4d8" />
               </div>
               <img
                  style={{
                     display: `${
                        image.includes(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`) ? 'block' : 'none'
                     }`,
                  }}
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : ''}
                  alt={`${movie.title}`}
                  className="w-full h-full object-contain opacity-85 hover:opacity-100 duration-200 rounded-md"
                  onLoad={() => handleImageLoad(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`)}
               />
            </>
         </div>

         <div className="w-full mt-8 px-2 py-4 bg-zinc-900/30 rounded-md relative group">
            <h2 className="font-bold text-center text-2xl sm:text-3xl text-zinc-50 mb-1">{movie.title}</h2>
            <p className="mb-4 text-zinc-400 font-light text-center">{movie.tagline}</p>

            {movie.overview && <p className="font-medium text-zinc-200 text-center mb-6">{movie.overview}</p>}

            <button
               className="p-3 absolute group-hover:block hidden duration-200 cursor-pointer animate-fadeon -top-4 -right-4"
               onClick={() => handleAddMovie(movie)}
            >
               <PlusCircle size={30} color="#d4d4d8" />
            </button>

            <div className="">
               <p className="text-zinc-100 font-medium flex gap-4 flex-row items-center justify-center mb-6">
                  <span className="text-yellow-500 flex gap-2 items-center">
                     <Star color="#facc15" size={32} />
                     <span className="font-bold text-xl">{Number(movie.vote_average).toFixed(2)}</span>
                  </span>
               </p>

               <p className="text-zinc-200 font-medium flex flex-col gap-4 sm:flex-row justify-center items-center sm:justify-between">
                  {movie.popularity && (
                     <span className="flex items-center gap-2">
                        <Users size={20} color="#d4d4d8" />
                        Popularidade:
                        <span className="text-zinc-50 font-bold ml-1">{movie.popularity}</span>
                     </span>
                  )}

                  {movie.revenue !== '' && (
                     <span className="flex items-center gap-2">
                        <Coins color="#facc15" size={24} /> Receita:{' '}
                        <span className="font-bold">{formatValue.format(movie.revenue)}</span>
                     </span>
                  )}
               </p>
            </div>

            <p className="mt-8 text-zinc-200 text-center">
               Data de lançamento: <span className="ml-1 font-bold text-zinc-50">{handleDate()}</span>
            </p>
         </div>
      </div>
   );
};
