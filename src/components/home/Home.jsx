import React, { useState } from 'react';
import './styles.css';
import { accordionData } from './data';

function Home() {
  const [selected, setSelected] = useState(null);
  const [enablemultiple, setEnableMultiple] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    getCurrentId === selected ? setSelected(null) : setSelected(getCurrentId);
  };

  const handleEnablingMultiple = () => {
    setEnableMultiple(!enablemultiple);
  };

  const handleMultipleSelection = (id) => {
    const copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(id);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(copyMultiple);
  };

  return (
    <div className='wrapper'>
      <h1 className='text-2xl bg-gray-500 p-5'>
        Solid Waste Management Services
      </h1>

      <p className='text-2xl bg-slate-50'>
        Check out the below questions and get answers about solid waste
        management service!
      </p>
      <button onClick={handleEnablingMultiple}>
        Enable Multiple Selection
      </button>
      <div className='accordion'>
        {accordionData && accordionData.length > 0
          ? accordionData.map((item, index) => (
              <div
                className='item'
                style={{ backgroundColor: '#614101' }}
                key={index}>
                <div
                  className='title'
                  style={{ backgroundColor: 'rgb(0, 255,255' }}>
                  <h1
                    onClick={() => {
                      enablemultiple
                        ? handleMultipleSelection(item.id)
                        : handleSingleSelection(item.id);
                    }}>
                    {item.question}
                  </h1>
                  <span
                    className='accordion-span'
                    onClick={() => {
                      enablemultiple
                        ? handleMultipleSelection(item.id)
                        : handleSingleSelection(item.id);
                    }}>
                    +
                  </span>
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

export default Home;
