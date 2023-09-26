import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

export const Name = () => {
  const { name } = useContext(UserContext);

  return (
    <h2>
      <strong>Name</strong>: {name}
    </h2>
  );
};
