// // ResourceTile.js
// import React from 'react';
// import styled from 'styled-components';

// const GRTContainer = styled.div`
//   display: grid;
//   background: #333;
//   border-radius: 5px;
//   padding: 10px;
//     grid-column-end: span 2;
// `;

// const GRT = () => {
//   const [greeting, setGreeting] = useState('');

//   useEffect(() => {
//     const updateGreeting = () => {
//       const currentHour = new Date().getHours();
      
//       if (currentHour >= 5 && currentHour < 12) {
//         setGreeting('Good Morning');
//       } else if (currentHour >= 12 && currentHour < 17) {
//         setGreeting('Good Afternoon');
//       } else if (currentHour >= 17 && currentHour < 22) {
//         setGreeting('Good Evening');
//       } else {
//         setGreeting('Good Night');
//       }
//     };

//     updateGreeting();
    
//     // Update greeting every minute in case time changes during session
//     const intervalId = setInterval(updateGreeting, 60000);
    
//     return () => clearInterval(intervalId);
//   }, []);
//   return (
//     <GRTContainer>
//       <GreetingText>{greeting}</GreetingText>
//       <NameText>Vivek</NameText>
//     </GRTContainer>
//   );
// };

// export default GRT;


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GRTContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #333;
  border-radius: 5px;
  padding: 20px;
  grid-column-end: span 2;
  justify-content: center;
  align-items: center;
  color: white;
`;

const GreetingText = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const NameText = styled.p`
  font-size: 1.2rem;
  margin: 5px 0 0 0;
  padding: 0;
  opacity: 0.8;
`;

const GRT = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();
      
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting('Good Morning');
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting('Good Afternoon');
      } else if (currentHour >= 17 && currentHour < 22) {
        setGreeting('Good Evening');
      } else {
        setGreeting('Good Night');
      }
    };

    updateGreeting();
    
    // Update greeting every minute in case time changes during session
    const intervalId = setInterval(updateGreeting, 60000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <GRTContainer>
      <GreetingText>{greeting}</GreetingText>
      <NameText>Vivek</NameText>
    </GRTContainer>
  );
};

export default GRT;