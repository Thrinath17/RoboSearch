import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'materialize-css/dist/css/materialize.css';
import 'tachyons';

const Card = ({ name, website }) => {
  return (
    <div className='card m-2 bg-secondary grow  deep-orange lighten-2' style={{ width: '20rem' }}>
      <img src={`https://robohash.org/${name}`} alt='Chitti' className='card-img-top' />
      <div className='card-body'>
        <h1 className='card-title text-center text-light'>{name}</h1>
        <p className='card-text text-center text-light'>{website}</p>
      </div>
    </div>
  );
};

export default Card;
