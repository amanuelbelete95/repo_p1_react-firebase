import React from 'react';

const TeamCard = ({
  imgSrc,
  imageDescription,
  name,
  profession,
  statement,
  displayName,
}) => {
  return (
    <div className='cardcontainer'>
      <div>
        <div className='imageContainer'>
          <img
            src={imgSrc}
            alt={imageDescription}
            width={300}
            height='auto'
          />
        </div>

        <div className='card-container'>
          <h2>{name}</h2> <span>{profession}</span>
          <p>{statement}</p>
        </div>
        <button onClick={() => displayName('Amanuel')}>Display</button>
      </div>
    </div>
  );
};

export default TeamCard;
