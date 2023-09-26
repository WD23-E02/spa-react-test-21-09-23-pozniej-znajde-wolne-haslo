import React from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';

const user = {
  name: 'Jeff Bezos',
  city: 'Albuquerque',
  born: 1964,
  likes: 'Being rich',
  twitterLink: 'https://twitter.com/jeffbezos',
  img: 'https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1032942302_dkawzr.jpg',
  twitterName: 'JeffBezos',
  companies: [
    'Amazon',
    'The Washington Post',
    'Google share holder',
    'IMBD',
    'Alexa',
    'Blue Origin',
    'Twitch',
    'Zappos',
    'Whole food market',
    'Amazon robotics',
    'Goodreads',
  ],
};

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <img src={user.img} alt='pic of jeff bezos' />
        <h3>{user.name}</h3>
        <ul>
          <strong>Place of birth:</strong>
          <li>{user.city}</li>
        </ul>
        <ul>
          <strong>Age of birth:</strong>
          <li>{user.born}</li>
        </ul>
        <ul>
          <strong>Owns:</strong>
          {user.companies.map((item) => (
            <li key={uuidv4()}>{item}</li>
          ))}
        </ul>
        <ul>
          <strong>Likes:</strong>
          <li>{user.likes}</li>
        </ul>
        <ul>
          <strong>Twitter:</strong>
          <li>
            <a href={user.twitterLink}>@JeffBezos</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
