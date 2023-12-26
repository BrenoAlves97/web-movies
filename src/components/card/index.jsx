import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Loading } from '../utilities/loading';

const limitText = (text) => {
   const limit = 19;
   if (text.length > limit) return text.slice(0, limit) + ' ...';
   else return text;
};

export const Card = ({ movie }) => {
   const [images, setImages] = React.useState([]);
   const navigate = useNavigate();

   const handleLoadImages = (url) => {
      setImages((prev) => [...prev, url]);
   };

   const handleDetails = (id) => {
      return navigate(`/detalhes/${id}`, { replace: true });
   };

   return (
      <div
         className="w-full bg-zinc-800 flex flex-col border-2 border-zinc-500 
                     rounded-md overflow-hidden max-w-xs cursor-pointer hover:border-zinc-50 duration-200 group"
         onClick={() => handleDetails(movie.id)}
      >
         <div className="h-96 mb-2 overflow-hidden rounded-md bg-zinc-500">
            <div
               className="w-full h-full flex items-center justify-center"
               style={{
                  display: `${
                     !images.includes(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`) ? 'flex' : 'none'
                  }`,
               }}
            >
               <Loading size={20} color="#27272a" />
            </div>
            <img
               style={{
                  display: `${
                     images.includes(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`) ? 'block' : 'none'
                  }`,
               }}
               src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
               alt={`${movie.title}`}
               className="w-full object-fill object-center h-full hover:scale-105 duration-200"
               onLoad={() => handleLoadImages(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`)}
            />
         </div>

         <h2 className="font-normal text-xl text-zinc-400 group-hover:text-zinc-100 text-center my-2 duration-200">
            {limitText(movie.title)}
         </h2>
      </div>
   );
};
