import React from 'react';

export default function MovieList(props) {
  return (
    <div>
      <ul>
        {props.movies.map((list) => {
          return (
            <li key={list.id}>
              {' '}
              {list.title}
              <span> {list.openingText} </span>
              <p> {list.releaseDate} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
