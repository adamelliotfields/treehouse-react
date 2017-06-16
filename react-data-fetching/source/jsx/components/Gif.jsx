import React from 'react';
import PropTypes from 'prop-types';

function Gif (props) {
  const { url } = props;

  return (
    <li className='gif-wrap'>
      <img src={url} alt='' />
    </li>
  );
}

Gif.propTypes = {
  url: PropTypes.string.isRequired
};

export default Gif;
