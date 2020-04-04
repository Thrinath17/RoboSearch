import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const robotComponent = robots.map((user) => {
    return <Card key={user.id} name={user.name} website={user.website} />;
  });
  return (
    <div className='row m-2 d-flex flex-row align-items-center justify-content-center'>
      {robotComponent}
    </div>
  );
};

export default CardList;
