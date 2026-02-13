import React from 'react';
import styled from 'styled-components';

const ShortcutContainer = styled.div`
  display: grid;
  background: #333;
  border-radius: 5px;
  padding: 10px;
  gap: 2px;

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

const ShortcutTile = () => {
  return (
    <ShortcutContainer>
      <h3>Shortcuts</h3>
      <a href="https://www.google.in/" rel="noopener noreferrer" target="_blank">Google</a>
      <a href="https://chat.openai.com/" rel="noopener noreferrer" target="_blank">ChatGPT</a>
      <a href="https://drive.google.com/drive/home" rel="noopener noreferrer" target="_blank">Google Drive</a>
      <a href="https://web.whatsapp.com/" rel="noopener noreferrer" target="_blank">Whatsapp</a>
      <a href="https://mail.google.com/mail/u/0/#inbox" rel="noopener noreferrer" target="_blank">Gmail</a>
      <a href="https://piratebayproxy.net/" rel="noopener noreferrer" target="_blank">Piratebay</a>
    </ShortcutContainer>
  );
};

export default ShortcutTile;