import React from 'react';
import PropTypes from 'prop-types';

import Gif from './Gif.jsx';
import NoGifs from './NoGifs.jsx';

function GifList (props) {
  const { data } = props;

  return (
    <ul className='gif-list'>
      {(data.length > 0)
          ? data.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id} />)
          : <NoGifs />}
    </ul>
  );
}

GifList.propTypes = {
  data: PropTypes.array.isRequired
};

export default GifList;
