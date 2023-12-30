import React from 'react';
import { toast } from 'react-hot-toast';

export const MovieContext = React.createContext();

export const MovieContextProvider = ({ children }) => {
   const [movies, setMovies] = React.useState([]);

   React.useEffect(() => {
      const moviesLS = localStorage.getItem('@movies');
      moviesLS && setMovies(JSON.parse(moviesLS));
   }, []);

   React.useEffect(() => {
      localStorage.setItem('@movies', JSON.stringify(movies));
   }, [movies]);

   const moviesLength = React.useMemo(() => movies.length);

   const handleAddMovie = (movie) => {
      const checkMovies = movies.find((item) => item.id === movie.id);

      if (!checkMovies) {
         setMovies((prev) => [...prev, movie]);
         return toast.success('Filme inserido na lista...');
      } else {
         return toast.error('Filme já inserido em sua lista...');
      }
   };

   const handleRemoveMovie = (movie) => {
      const updatedItems = movies.filter((m) => movie.id !== m.id);
      setMovies(updatedItems);
      return toast.success('Filme removido da lista...');
   };

   return (
      <MovieContext.Provider value={{ movies, handleAddMovie, moviesLength, handleRemoveMovie }}>
         {children}
      </MovieContext.Provider>
   );
};
