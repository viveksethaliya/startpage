// ShortcutTile.js
import React from 'react';
import styled from 'styled-components';

const ShortcutContainer = styled.div`
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

const Social = () => {
  return (
    <ShortcutContainer>
      <center><h3>Social</h3></center>
      <a href="https://twitter.com/"  rel="noopener noreferrer" target="_blank">Twitter</a>
      <a href="https://www.reddit.com/"  rel="noopener noreferrer" target="_blank">Raddit</a>
      <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">Instagram</a>
      <a href="https://www.youtube.com/"  rel="noopener noreferrer" target="_blank">Youtube</a>
      <a href="http://pinterest.com/"  rel="noopener noreferrer" target="_blank">Pinterest</a>
    </ShortcutContainer>
  );
};

export default Social;