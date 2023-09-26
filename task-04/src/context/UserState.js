import React from 'react';
import { UserContext } from './UserContext';
import { useState } from 'react';

function UserState({ children }) {
  const [name, setName] = useState('Rick');
  const [location, setLocation] = useState('Dortmund');

  return (
    <UserContext.Provider value={{ name, setName, location, setLocation }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserState;
