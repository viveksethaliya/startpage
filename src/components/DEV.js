// ShortcutTile.js
import React from 'react';
import styled from 'styled-components';

const DevlContainer = styled.div`
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

const Devl = () => {
  return (
    <DevlContainer>
      <center><h3>Dev</h3></center>
      <a href="https://github.com/"  rel="noopener noreferrer" target="_blank">Github</a>
      <a href="https://www.reddit.com/r/linux/" rel="noopener noreferrer" target="_blank">r/Linux</a>
      <a href="https://www.reddit.com/r/LinuxPorn/" rel="noopener noreferrer" target="_blank">r/LinuxPorn</a>
      <a href="https://claude.ai/new/" rel="noopener noreferrer" target="_blank">claude ai</a>
    </DevlContainer>
  );
};

export default Devl;