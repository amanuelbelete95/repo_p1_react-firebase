import React, { useState } from 'react';
import './styles.css';
import { accordionData } from './data';

function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    getCurrentId === selected ? setSelected(null) : setSelected(getCurrentId);
  };

  console.log(selected);
  return (
    <div className='wrapper'>
      <div className='accordion'>
        {accordionData && accordionData.length > 0
          ? accordionData.map((item, index) => (
              <div
                className='item'
                key={index}>
                <div className='title'>
                  <h1 onClick={() => handleSingleSelection(item.id)}>
                    {item.question}
                  </h1>
                  <span>+</span>
                </div>

                {selected === item.id ? (
                  <div className='content'>{item.answer}</div>
                ) : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Accordion;
