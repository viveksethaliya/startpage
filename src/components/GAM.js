import React from 'react';
import styled from 'styled-components';

const GAMContainer = styled.div`
  display: grid;
  background: #333;
  border-radius: 5px;
  padding: 10px;
  gap: 8px;

  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    position: relative;
    padding-bottom: 2px;
  }

  a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: white;
    transition: width 0.3s ease;
  }

  a:hover::after {
    width: 100%;
  }

  h3 {
    padding: 0px;
    margin: 0 0 8px 0;
    text-align: center;
    color: white;
  }
`;

const GAM = () => {
  return (
    <GAMContainer>
        <center><h3>Gaming</h3></center>
        <a href="https://www.reddit.com/r/EmulationOnAndroid/" rel="noopener noreferrer" target="_blank">Android</a>
        <a href="https://www.reddit.com/r/emulation/" rel="noopener noreferrer" target="_blank">Emulation</a>
        <a href="https://www.reddit.com/r/pcmasterrace/" rel="noopener noreferrer" target="_blank">PC</a>
        <a href="https://www.reddit.com/r/ShouldIbuythisgame/" rel="noopener noreferrer" target="_blank">Game Discount</a>
    </GAMContainer>
  );
};

export default GAM;