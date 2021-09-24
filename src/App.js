import React, { useState } from 'react';
import './style.css';
import MovieList from './MovieList';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  async function onFetchHandler() {
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      const data = await response.json();

      const loadMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(loadMovies);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <button onClick={onFetchHandler}>Fetch </button>
      <MovieList movies={movies} />
    </div>
  );
}
