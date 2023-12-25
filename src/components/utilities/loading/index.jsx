import React from 'react';
import { ScaleLoader } from 'react-spinners';

export const Loading = ({ size, color }) => {
   return <ScaleLoader size={size} color={color} />;
};
