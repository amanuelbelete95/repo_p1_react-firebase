import React, { useState } from 'react';
import './styles.css';
import { accordionData } from './data';

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enablemultiple, setEnableMultiple] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // Setting the color type and the color value to the background color

  const [color, setColor] = useState('#614101');

  const [rgb, setRgb] = useState('rgb(0, 255,255');

  const handleSingleSelection = (getCurrentId) => {
    getCurrentId === selected ? setSelected(null) : setSelected(getCurrentId);
  };

  const handleEnablingMultiple = () => {
    setEnableMultiple(!enablemultiple);

    // Generate the hexcolor
    const letters = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += letters[Math.floor(Math.random() * 16)];
    }

    setColor(hexColor);
  };

  const handleMultipleSelection = (id) => {
    const copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(id);

    if (findIndexOfCurrentId == -1) copyMultiple.push(id);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  };

  const handleRGBColor = (getCurrentId) => {
    // // This function update the background color of the accordion question on the click of

    // const r = Math.round(Math.random() * 256);
    // const g = Math.round(Math.random() * 256);
    // const b = Math.round(Math.random() * 256);
    // const generatedRgb = `rgb(${r},${g},${b})`;

    // setRgb(generatedRgb);
    getCurrentId === selected ? setSelected(null) : setSelected(getCurrentId);
  };

  return (
    <div className='wrapper'>
      <button onClick={handleEnablingMultiple}>
        Enable Multiple Selection
      </button>
      <div className='accordion'>
        {accordionData && accordionData.length > 0
          ? accordionData.map((item, index) => (
              <div
                className='item'
                style={{ backgroundColor: color }}
                key={index}>
                <div
                  className='title'
                  style={{ backgroundColor: rgb }}>
                  <h1
                    onClick={() => {
                      enablemultiple
                        ? handleMultipleSelection(item.id)
                        : handleSingleSelection(item.id);
                    }}>
                    {item.question}
                  </h1>
                  <span onClick={() => handleRGBColor(item.id)}>+</span>
                </div>

                {selected === item.id ? (
                  <div className='content'>{item.answer}</div>
                ) : null}

                {multiple.includes(item.id) && (
                  <div className='content'>{item.answer}</div>
                )}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Accordion;
