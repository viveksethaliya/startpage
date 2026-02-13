// ResourceTile.js
import React from 'react';
import styled from 'styled-components';

const SRCContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #333;
  border-radius: 5px;
  grid-column-end: span 4;
  .search-btn {
  display: none;
  }
  .search-input{
  width: 40vw;
  height: 5vh;
  outline: none;
  border-radius: 5px; 
  border: 0px;
  background: #666666;
  padding: 0 15px;
  color: white;
      &::placeholder {
      color:rgb(230, 230, 230); /* Change this to your desired placeholder color */
      opacity: 1; /* Firefox sometimes needs this */
      margin-left: 10px;
      padding: 10px;
    }
  }
  form{
  margin: 0 auto;
  padding: 20px 0;
  gap: 0;
  }
`;

const SRC = () => {
  return (
    <SRCContainer>
      <form action="https://www.google.com/search" method="GET" target="_blank">
        <input type="text" name="q" class="search-input" placeholder="Search Google..."></input>
        <input type="submit" value="🔍" class="search-btn"></input>
      </form>
      <form action="https://www.startpage.com/do/dsearch" method="GET" target="_blank">
        <input type="text" name="q" class="search-input" placeholder="Search Startpage..."></input>
        <input type="submit" value="🔍" class="search-btn"></input>
      </form>
    </SRCContainer>
  );
};

export default SRC;