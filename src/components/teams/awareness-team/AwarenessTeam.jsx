import React from 'react';

import TeamCard from '../TeamCard';

import cardImage1 from '../../assets/cardsImage/card-p1.webp';
import cardImage2 from '../../assets/cardsImage/card-p2.webp';
import cardImage3 from '../../assets/cardsImage/card-p3.jpeg';

const managerStatement =
  'As long as I am the manager of these agenyc I will do everything possible to keep the work we started';
const displayName = (name) => {
  return console.log(name);
};
const AwarenessTeam = () => {
  return (
    <div>
      <TeamCard
        imgSrc={cardImage1}
        imageDescription='manager '
        name='Mike Cooper'
        profession='Manager'
        statement={managerStatement}
        displayName={displayName}
      />
    </div>
  );
};

export default AwarenessTeam;
