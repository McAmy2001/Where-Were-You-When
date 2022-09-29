import React from 'react';
const makeEventArray = require('../../utils/eventsApi')


function History() {
  const eventArray = makeEventArray;
  console.log(eventArray);
  return (
    <div className='todays-events-container'>
      Stuff goes here
      
    </div>
  )

};

export default History;