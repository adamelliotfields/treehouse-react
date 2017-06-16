import React from 'react';

function NoGifs () {
  return (
    <li className='no-gifs'>
      <i className='material-icons icon-gif'>sentiment_very_dissatisfied</i>
      <h3>Sorry, no GIFs match your search.</h3>
    </li>
  );
}

export default NoGifs;
