import React from 'react';

const limitText = (text) => {
   const limit = 25;
   if (text.length > limit) return text.slice(0, limit) + ' ...';
   else return text;
};

export const Card = ({ movie }) => {
   const handleNavigate = (item) => {
      console.log(item);
   };

   return (
      <div
         className="w-full bg-zinc-700 flex flex-col border-2 border-zinc-500 
                     rounded-md overflow-hidden max-w-xs cursor-pointer hover:border-zinc-50 duration-200"
         onClick={() => handleNavigate(movie)}
      >
         <div className="h-96 mb-2 overflow-hidden rounded-md">
            <img
               src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
               alt={`${movie.title}`}
               className="w-full object-fill object-center h-full hover:scale-105 duration-200"
            />
         </div>

         <h2 className="font-normal text-xl text-zinc-300 text-center my-2">{limitText(movie.title)}</h2>
      </div>
   );
};
