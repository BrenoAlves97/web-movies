import React from 'react';
import { toast } from 'react-hot-toast';

import { Container } from '../../components/utilities/container';
import { Subtitle } from '../../components/utilities/subtitle';
import { Loading } from '../../components/utilities/loading';
import { Card } from '../../components/card';
import { CustomInput } from '../../components/custom-input';

import { UseFetchItems } from '../../hooks/use-fetch-item';
import { apiConfig } from '../../config/api-config.js';

const key = import.meta.env.VITE_APP_KEY;
const token = import.meta.env.VITE_APP_TOKEN;
const popular = import.meta.env.VITE_APP_POPULAR;

export const Home = () => {
   const { data, loading } = UseFetchItems(`${popular}?api_key=${key}&language=pt-br&page=1`, apiConfig('GET', token));

   const [input, setInput] = React.useState('');

   const handleInputValue = () => setInput('');

   const handleSearch = () => {
      if (input === '') return toast.error('Digite o nome de algum filme...');
      console.log(input);
      handleInputValue();
   };

   if (loading)
      return (
         <Container hScreen={true} placeCenter={true}>
            <Loading size={30} color="#d4d4d8" />
         </Container>
      );

   return (
      <Container hScreen={true}>
         <CustomInput
            placeholder="Busque por um filme..."
            type="text"
            value={input}
            setValue={setInput}
            onClick={handleSearch}
         />

         <Subtitle textCenter={true}>Mais Populares</Subtitle>

         <section className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-3">
            {data && !loading && data.map((movie) => <Card key={movie.id} movie={movie} />)}
         </section>
      </Container>
   );
};
