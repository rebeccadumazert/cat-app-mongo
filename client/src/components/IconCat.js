import React from 'react';
import iconCat from './iconCat.png';
import { ContainerIconCat } from './styles/Winners';

export const IconCat = () => {
  return (
    <ContainerIconCat>
      <img src={iconCat} alt="" />
    </ContainerIconCat>
  );
};
