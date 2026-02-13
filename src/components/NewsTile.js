// export default NewsTile;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const NewsContainer = styled.div`
  display: grid;
  margin: 0 auto;
  margin-right: 0px;
  padding: 10px;
  height: 92vh;
  width: 60%;
  background: #333;
  border-radius: 5px;
  font-family: 'Monaco', 'Andale Mono', 'Deja Vu Sans Mono', 'Consolas', monospace;
  overflow-y: auto; // Adds scroll to the container

  /* Hide scrollbar for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    width: 0; // Hide scrollbar
  }

  /* Hide scrollbar for IE, Edge, and Firefox */
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox

  a {
  color: white;
  text-decoration: none;
  border-bottom: 2px solid transparent; // Transparent underline by default
  transition: border-bottom 0.3s ease;
  }

  a:hover {
    border-bottom: 2px solid white; // White underline on hover
  }
`;

const NewsTile = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = 'YOUR_API_KEY'; // Replace with your NewsAPI key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=1abdbd9034f44469bac1176b445ed1dd`);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching the news data", error);
      }
    };

    fetchNews();
  }, [apiKey]);

  return (
    <NewsContainer>
      {articles.map((article, index) => (
        <div key={index}>
          {'>'} <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
          <p></p>
        </div>
      ))}
    </NewsContainer>
  );
};

export default NewsTile;