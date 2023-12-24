import React from 'react';

import { Container } from '../../components/utilities/container';
import { Subtitle } from '../../components/utilities/subtitle';

export const Home = () => {
   return (
      <Container hScreen={true}>
         <Subtitle textCenter={true}>Melhores filmes</Subtitle>
      </Container>
   );
};
