import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

export const Location = () => {
  const { location } = useContext(UserContext);
  return (
    <h2>
      <strong>Location</strong>: {location}
    </h2>
  );
};
