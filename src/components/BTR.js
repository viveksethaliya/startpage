// ResourceTile.js
// import React from 'react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BTRContainer = styled.div`
  display: grid;
  background: #333;
  border-radius: 5px;
  padding: 10px;
  h3{
  padding: 0px;
  margin: 0 auto;
  }
`;
const ProgressBarContainer = styled.div`
  width: 100%;
  background: #444;
  border-radius: 5px;
  overflow: hidden;
  margin: 0px;
  height: 10px;
  margin: 0 auto;
`;

const ProgressBar = styled.div`
  height: 10px;
  background: #4caf50;
  width: ${props => props.percentage}%;
  border-radius: 5px;
  margin: 0px;
`;

const PercentageText = styled.span`
  margin-top: 0px;
  font-size: 14px;
`;

const BTR = () => {
    const [batteryLevel, setBatteryLevel] = useState(0);

    useEffect(() => {
      if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
          // Update battery level
          const updateBatteryLevel = () => {
            setBatteryLevel(Math.round(battery.level * 100));
          };
  
          // Initial update
          updateBatteryLevel();
  
          // Listen for battery level changes
          battery.addEventListener('levelchange', updateBatteryLevel);
  
          // Cleanup listener on unmount
          return () => {
            battery.removeEventListener('levelchange', updateBatteryLevel);
          };
        });
      } else {
        console.warn('Battery Status API is not supported in this browser.');
      }
    }, []);

  return (
    <BTRContainer>
      <h3>Battery</h3>
      <ProgressBarContainer>
        <ProgressBar percentage={batteryLevel} />
      </ProgressBarContainer>
      <PercentageText>{batteryLevel}%</PercentageText>
    </BTRContainer>
  );
};

export default BTR;