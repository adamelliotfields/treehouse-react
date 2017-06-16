import React from 'react';
import PropTypes from 'prop-types';

function Repository (props) {
  const { url, name, language, stars } = props;

  return (
    <div className='container'>
      <div className='name'>
        <div>
          <a className='link' href={url} target='_blank'>{name}</a>
        </div>
      </div>
      <div className='language'>
        <div>
          {language}
        </div>
      </div>
      <div className='stars'>
        <div>
          <i className='fa fa-star-o' />
          &nbsp;
          {stars}
        </div>
      </div>
    </div>
  );
}

Repository.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  language: PropTypes.string,
  stars: PropTypes.number
};

export default Repository;
