import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

export const Form = () => {
  const { setName, setLocation } = useContext(UserContext);

  function updateData() {
    console.log(5);
  }
  return (
    <div>
      <section>
        <label>Update Name:</label>
        <input onChange={(e) => setName(e.target.value)} />
      </section>
      <section>
        <label>Update Location:</label>
        <input onChange={(e) => setLocation(e.target.value)} />
      </section>
    </div>
  );
};
