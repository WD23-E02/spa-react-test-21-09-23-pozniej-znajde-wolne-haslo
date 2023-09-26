import React from 'react';
import './style.css';

import { Location, Name, Form } from './components/';
import UserState from './context/UserState';

function App() {
  return (
    <UserState>
      <Form />
      <Name />
      <Location />
    </UserState>
  );
}

export default App;
