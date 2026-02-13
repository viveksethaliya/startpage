// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

// const DateTimeContainer = styled.div`
//   display: grid;
//   background: #333;
//   border-radius: 5px;
//   padding: 10px;
// `;

// const DateTimeTile = () => {
//   const [dateTime, setDateTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setDateTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <DateTimeContainer>
//       <h3>{dateTime.toLocaleTimeString()}</h3>
//       <p>{dateTime.toLocaleDateString()}</p>
//     </DateTimeContainer>
//   );
// };

// export default DateTimeTile;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DateTimeContainer = styled.div`
  display: grid;
  background: #333;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
  text-align: center;
  p{
  margin: 0px;
  margin-top: 0px;
  }
  p.time{
  font-size: 30px;
  }
`;

const DateTimeTile = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatWeekday = (date) => {
    return date.toLocaleDateString([], { weekday: 'long' });
  };

  return (
    <DateTimeContainer>
      <p class="time"><b>{formatTime(dateTime)}</b></p>
      <p>{formatDate(dateTime)}</p>
      <p>{formatWeekday(dateTime)}</p>
    </DateTimeContainer>
  );
};

export default DateTimeTile;